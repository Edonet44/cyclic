

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

//const https = require('https');
const express = require('express')
const app = express();
const cors = require('cors');
//abilitare i Cors
const corsOptions = {
  origin: 'https://myplanttracker-2e0a9.web.app', // Dominio client 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};
//abilita i cors
app.use(cors(corsOptions));

app.all('/', (req, res) => {
    console.log("Richiesta in corso")
    res.send('Server avviato')
});
// Gestisci la richiesta per ottenere tutti i dati delle piante
app.get('/plants', (req, res) => {
  res.json(plantsData);
});
app.listen(process.env.PORT || 3000)