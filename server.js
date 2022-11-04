const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')

// const { response } = require('express')

app.set('port', 3001)

//middleware
app.use(cors())
app.use(express.json());


// routes
app.get('/api/v1/affirmations', async(req, res) => {
    const affirmationData = await knex.select().from('affirmations')
    res.status(200).json(affirmationData)
});

app.listen(3001, () => {
    console.log('Listening on port 3001')
})
 app.get('/api/v1/affirmations/:id', (req, res) => {
    knex('affirmations')
    .where({ id:  parseInt(req.params.id) })
    .then((data) => { res.json(data); })
    .catch(() => { res.json('Something went wrong.') });
   });

   app.post('/api/v1/affirmations', async (request, response) => {
    const paper = request.body;
    for (let requiredParameter of ['description', 'image']) {
      if (!paper[requiredParameter]) {
        return response
          .status(422)
          .send({ error: `Expected format: { description: <String>, image: <String> }. You're missing a "${requiredParameter}" property.` });
      }
    }
    try {
      const id = await knex.select().from('affirmations').insert(paper, 'id');
      response.status(201).json({ id })
    } catch (error) {
      response.status(500).json({ error });
    }
  })