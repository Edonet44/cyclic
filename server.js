

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

//old

// const express = require('express')
// const app = express();
// const cors = require('cors');
// //abilitare i Cors
// const corsOptions = {
//   origin: 'https://myplanttracker-2e0a9.web.app', // Dominio client
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// };
// //abilita i cors
// app.use(cors(corsOptions));

// app.all('/', (req, res) => {
//     console.log("Richiesta in corso")
//     res.send('Server avviato')
// });
// // Gestisci la richiesta per ottenere tutti i dati delle piante
// app.get('/plants', (req, res) => {
//   res.json(plantsData);
// });
// app.listen(process.env.PORT || 3000)


const express = require('express');
const app = express();
const cors = require('cors');

// Abilita il CORS
const corsOptions = {
  origin: 'https://myplanttracker-2e0a9.web.app', // dominio il tuo client
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Applica il middleware CORS all'app
app.use(cors(corsOptions));

app.all('/', (req, res) => {
  console.log("Richiesta in corso");
  res.send('Server attivato');
});

// Gestisci la richiesta per ottenere tutti i dati delle piante
app.get('/plants', (req, res) => {
  if (!plantsData) {
    res.status(500).json({ error: 'Dati delle piante non trovati' });
  } else {
    res.json(plantsData);
  }
});
//aggiunto 10:13 9/11
// Gestisci la richiesta per ottenere un dato specifico di una pianta per ID
app.get('/plants/:id', (req, res) => {
  const plantId = req.params.id; // Estrai l'ID dalla richiesta
  const plant = plantsData.find((plant) => plant._id === plantId);

  if (!plant) {
    res.status(404).json({ error: 'Pianta non trovata' });
  } else {
    res.json(plant);
  }
});
/////////////////////////////////////////////


// Gestione degli errori
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Errore interno del server' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server in ascolto sulla porta ' + (process.env.PORT || 3000));
});
