const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knexfile')
const { response } = require('express')

app.set('port', 3001)

//middleware
app.use(cors())

//app.get('api', async(request, response) => {
//     const pathData = await knex.select().from('pathData')
//     response.status(200).json(pathData)
// })

// routes
app.listen(3001, () => {
    console.log('Listening on port 3001')
})