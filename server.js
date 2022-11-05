const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')
// const { response } = require('express')


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

// app.listen(port)
app.set('port', port)

//middleware
app.use(cors())
app.use(express.json());

//Routes 
app.get('/', (request, response) => {
  response.status(200).json({
    smoke: 'test'
  })
})

app.get('/api/v1/affirmations', async(req, res) => {
    const affirmationData = await knex.select().from('affirmations')
    res.status(200).json(affirmationData)
});

app.get('/api/v1/affirmations/:id', (req, res) => {
  knex('affirmations')
  .where({ id:  parseInt(req.params.id) })
  .then((data) => { res.json(data); })
  .catch(() => { res.json('Something went wrong.') });
});

// app.post('/api/v1/affirmations', async (request, response) => {
//   const paper = request.body;
  
//   for (let requiredParameter of ['description', 'image']) {
//     if (!paper[requiredParameter]) {
//       return response
//       .status(422)
//       .send({ error: `Expected format: { description: <String>, image: <String> }. You're missing a "${requiredParameter}" property.` });
//     }
//   }
  
//   try {
//     const id = await knex.select().from('affirmations').insert(paper, 'id');
//     response.status(201).json({ id })
//   } catch (error) {
//     response.status(500).json({ error });
//   }
// });

app.listen(app.get('port'), () => {
  console.log(`server has started on http://localhost:${app.get('port')}.`)
})

//    app.post('/affirmations', (req, res) => {
  //     console.log(req)
  //     knex('affirmations')
  //     .insert({
    //     description: req.body,
    //     image: req.body,
    //     })
    //     .then(() => { res.json('Affirmation added!'); })
    //     .catch(() => { res.json('Something went wrong.') });
    //    });
  
