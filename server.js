// const express = require('express');
// const app = express();
// const port = 3000;

// // Crea un oggetto Router
// const router = express.Router();
// let records = [];

// // Get all students
// router.get('/', (req, res) => {
//   res.send('App is running..');
// });

// // Create new record
// router.post('/add', (req, res) => {
//   res.send('New record added.');
// });

// // Delete existing record
// router.delete('/', (req, res) => {
//   res.send('Deleted existing record');
// });

// // Update existing record
// router.put('/', (req, res) => {
//   res.send('Updating existing record');
// });

// // Showing demo records
// router.get('/demo', (req, res) => {
//   res.json([
//     {
//       id: '001',
//       name: 'Smith',
//       email: 'smith@gmail.com',
//     },
//     {
//       id: '002',
//       name: 'Sam',
//       email: 'sam@gmail.com',
//     },
//     {
//       id: '003',
//       name: 'lily',
//       email: 'lily@gmail.com',
//     },
//   ]);
// });

// // Registra il router nel percorso specificato (ad esempio, '/api')
// app.use('/api', router);

// // Avvia il server sulla porta specificata
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)