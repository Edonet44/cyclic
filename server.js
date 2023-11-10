
///////////////////////////FILE JSON DI TEST //////////////////////////////
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

///////////////////////////////INIZIALIZZAZIONI////////////////////////////////////////

require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const Plants = require('./models/plants');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;
//const PORT = process.env.PORT || 3000;


mongoose.set('strictQuery', false);

///////////////////////////////CORS////////////////////////////////////////////////

// Abilita i CORS lato client
const corsOptions = {
  origin: 'https://myplanttracker-2e0a9.web.app', // dominio il tuo client
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Applica il middleware CORS all'app
app.use(cors(corsOptions));

/////////////////////////////////////////DB/////////////////////////////////7
//imposta la connessione con Mongodb
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db::${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

connectDB().then(() => { 
  app.listen(PORT, () => {console.log(`Ascolto della connessione :${PORT}`) });
});

//test db mongo
app.get('/', (req, res) => {
  res.send({ plant: 'Plants' });
});

// //Routes go here
// app.all('*', (req,res) => {
//     res.json({"every thing":"is awesome"})
// })

///////////////////INSERT/////////////////////////////////////////
app.get('/add-note', async (req, res) => { 
  try {
    //inserisce dei valori test su mongodb
    await Plants.insertMany([
      {
        _id: 'jkfsh3243',
        name: 'Edotest',
        plantingDate: '2020/02/20',
        initialHeight: 30,
        notes: 'sdkjfhasdhfasdfasdfasdkvancv',
        imageUrl: 'https://dsfdsfjsdkfds.gdfgjd.om'
      },
    ]);
    res.send("Aggiunto dato"); // Invia la risposta solo dopo l'inserimento dei dati
  } catch (error) {
    console.log("errore", +error);
     res.status(500).send("Errore durante l'aggiunta dei dati");
  }
});


///////////////////////////QUERY///////////////////////////////7

// Rotta per ottenere tutte le piante
app.get('/get-plants', async (req, res) => {
  try {
    // Esegui una query per ottenere tutte le piante nel database
    const plants = await Plants.find();

    // Invia la risposta con i dati delle piante
    res.json(plants);
  } catch (error) {
    // Gestisci gli errori
    console.error('Errore durante la query al database:', error);
    res.status(500).json({ error: 'Errore interno del server' });
  }
});

////////////////////////////////////TEST CONNESSIONE///////////////////////////////////////


app.all('/', (req, res) => {
  console.log("Richiesta in corso");
  res.send('Server attivato');
});

////////////////////////////////////REQUEST DB/////////////////////////////////

app.get('/plants/:id', async (req, res) => {
  const plantId = req.params.id;
  try {
    const plant = await Plants.findById(plantId);
    if (!plant) {
      res.status(404).json({ error: 'Pianta non trovata' });
    } else {
      res.json(plant);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Errore nel recupero dei dettagli della pianta' });
  }
});


//////////////////////////////////////////////////REQUEST JSON //////////////////////////////

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


///////////////////////////////////ERRORS///////////////////////////////


// Gestione degli errori
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Errore interno del server' });
});

