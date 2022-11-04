const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')

// const { response } = require('express')

app.set('port', 3001)

//middleware
app.use(cors())
app.use(express.json());

//app.get('api', async(request, response) => {
//     const pathData = await knex.select().from('pathData')
//     response.status(200).json(pathData)
// })

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
  });

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

// app.delete('/todos/:id', (req, res) => {
//     knex('todos')
//     .where({ id: parseInt(req.params.id) })
//     .del()
//     .then(() => { res.json('Todo deleted!'); })
//     .catch(() => { res.json('Something went wrong.') });
//    });






    // const id = parseInt(req.params.id);
    // const match = knex.select().from('affirmations').find(idea => idea.id == id);
    // const match = knex.select().from("affirmations").where("id", id);
    // if (!match) return res.status(404).json({message: `No idea found with an id of ${id}`});
  
    // return res.status(200).json(match);
    // });f






//   app.get('api//affirmations', (req, res) => {
  
    //       const allAffirmations =  pool.query('SELECT * FROM affirmation')
    //       res.json(app.locals.affirmations)
    //   {
    //       console.log(err.message)
    //   }


  
//   const addAffirmations = (req, res) => {
//     const { description, image } = req.body;
//     pool.query(queries.checkDescriptionExists, [description], (error, results) => {
//       if (results.rows.length) {
//         res.send("Description already exists.");
//       };
//       pool.query(queries.addAffirmations, [description, image], (error, results) => {
//         if (error) throw error;
//         res.status(201).send("Affirmation Created Successfully!");
//       })
//     });
//   };
  
//   const deleteAffirmations = (req, res) => {
//     const id = parseInt(req.params.id);
  
//     pool.query(queries.getAffirmationsById, [id], (error, results) => {
//       const noAffirmationFound = !results.rows.length;
//       if (noAffirmationFound) {
//         res.send("Affirmation does not exist in the database");
//       }
  
//       pool.query(queries.deleteAffirmations, [id], (error, results) => {
//         if (error) throw error;
//         res.status(200).send('Affirmation removed successfully.');
//       });
//     });
//   };
  
//   const updateAffirmation = (req, res) => {
//     const id = parseInt(req.params.id);
//     const { description, image } = req.body;
  
//     pool.query(queries.getAffirmationsById, [id], (error, results) => {
//       const noAffirmationFound = !results.rows.length;
//       if (noAffirmationFound) {
//         res.send("Affirmation does not exist in the database");
//       }
  
//       pool.query(queries.updateAffirmation, [description, image, id], (error, results) => {
//         if (error) throw error;
//         res.status(200).send('Affirmation updated successfully');
//       });
//     });
//   };
  
  