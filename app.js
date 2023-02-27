const client = require('./connect.js')
const express = require('express')
const app = express()

app.listen(3300, () => {
    console.log('Sever is now listening at port 3300')
})

client.connect()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/teams', (req, res) => {
    client.query(`Select * from teams`, (err, result) => {
        if (!err) {
            res.send(result.rows)
        } else {
            console.log(err.message)
        }
    })
    client.end
})

app.get('/teams/:id', (req, res) => {
    client.query(
        `Select * from teams where idTeam=${req.params.id}`,
        (err, result) => {
            if (!err) {
                res.send(result.rows)
            } else {
                console.log(err.message)
            }
        }
    )
    client.end
})

app.post('/teams', (req, res) => {
    const team = req.body
    const teamQuery = `Insert into teams (
            id,
            teamName,
            teamNickName,
            founded,
            country,
            city,
            stadium,
            league,
            coach,
            president,
            valuable,
            color,
            website
            ) values (
                '${team.id}',
                '${team.teamName}',
                '${team.teamNickName}',
                '${team.founded}',
                '${team.country}',
                '${team.city}',
                '${team.stadium}',
                '${team.league}',
                '${team.coach}',
                '${team.president}',
                '${team.valuable}',
                '${team.color}',
                '${team.website}')`
    client.query(teamQuery, (err, result) => {
        if (!err) {
            res.send('Successfully added a new team')
        } else {
            console.log(err.message)
        }
    })
    client.end
})

app.put('/teams/:id', (req, res) => {
    const team = req.body
    const teamQuery = `Update teams set
            id = '${team.id}',
            teamName = '${team.teamName}',
            teamNickName = '${team.teamNickName}',
            founded = '${team.founded}',
            country = '${team.country}',
            city = '${team.city}',
            stadium = '${team.stadium}',
            league = '${team.league}',
            coach = '${team.coach}',
            president = '${team.president}',
            valuable = '${team.valuable}',
            color = '${team.color}',
            website = '${team.website}'
            where id = ${req.params.id}`
    client.query(teamQuery, (err, result) => {
        if (!err) {
            res.send('Successfully updated a team')
        } else {
            console.log(err.message)
        }
    })
    client.end
})

app.delete('/teams/:id', (req, res) => {
    client.query(
        `Delete from teams where id=${req.params.id}`,
        (err, result) => {
            if (!err) {
                res.send(
                    'Successfully deleted a team with id: ' + req.params.id
                )
            } else {
                console.log(err.message)
            }
        }
    )
    client.end
})
