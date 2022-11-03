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
    const affirmation_data = await knex.select().from('affirmations')
    res.status(200).json(affirmation_data)
});

app.listen(3001, () => {
    console.log('Listening on port 3001')
})
//   const getAffirmationsById = (req, res) => {
//     const id = parseInt(req.params.id);
//     pool.query(queries.getAffirmationsById, [id], (error, results) => {
//       if (error) throw error;
//       res.status(200).json(results.rows);
//     });
//   };
  
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
  
  