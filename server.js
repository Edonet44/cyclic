

const plantsData = [
  {
    _id: '1',
    name: 'Pianta 1',
    plantingDate: '2023-01-01',
    initialHeight: 30,
    notes: 'Questa è una pianta molto bella.',
    imageUrl: 'url_immagine_1.jpg',
  },
  {
    _id: '2',
    name: 'Pianta 2',
    plantingDate: '2023-02-15',
    initialHeight: 25,
    notes: 'Questa è un\'altra pianta fantastica.',
    imageUrl: 'url_immagine_2.jpg',
  },
  // Aggiungi altri dati delle piante
];

const https = require('https');
const express = require('express')
const app = express();

//abilitare i Cors
https.createServer(options, (req, res) => {
  res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  });
  res.end(JSON.stringify({
     version: '1.0',
     endpoint: req.url,
     method: req.method,
     headers: req.headers 
  }, null, 2));
}).listen(PORT);

// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo!')
// });
// Gestisci la richiesta per ottenere tutti i dati delle piante
app.get('/plants', (req, res) => {
  res.json(plantsData);
});
app.listen(process.env.PORT || 3000)