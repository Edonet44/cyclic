
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

const express = require('express')
const mongoose = require('mongoose')
const Plants = require('./models/plants');

const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;


mongoose.set('strictQuery', false);


/////////////////////////////////////////DB/////////////////////////////////7
//imposta la connessione con Mongodb
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db::${conn.connection.host}`);
     console.log(`Connected to MongoDB database: ${conn.connections[0].name}`);
    
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

///////////////////////////////CORS////////////////////////////////////////////////

// Abilita i CORS lato client
const corsOptions = {
  origin: 'https://myplanttracker-2e0a9.web.app', // dominio del tuo client
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Applica il middleware CORS all'app
app.use(cors(corsOptions));



///////////////////INSERT/////////////////////////////////////////
app.get('/add-note', async (req, res) => { 
  try {
    //inserisce dei valori test su mongodb
    await Plants.insertMany([
      {
        _id: 'jkfserte34543',
        name: 'Naptest',
        plantingDate: '2020/04/05',
        initialHeight: 20,
        notes: 'pianta numero 45',
        imageUrl: 'https://erkfd.pzuz.om'
      },
      {
        _id: 'jkfs8935ri',
        name: 'Ritest',
        plantingDate: '2020/07/04',
        initialHeight: 10,
        notes: 'ualllaa',
        imageUrl: 'https://mareur.fds.om'
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

//Rotta per richiesta di un singolo dato
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

///////////////////////////////////UPDATE ///////////////////////////////////

// Aggiornamento di un dato
app.put('/update-note/:id', async (req, res) => {
  const plantId = req.params.id;
  const updatedData = req.body; // Assicurati che la richiesta contenga i nuovi dati

  try {
    // Esegui l'aggiornamento nel database
    const updatedPlant = await Plants.findByIdAndUpdate(plantId, updatedData, { new: true });

    if (!updatedPlant) {
      res.status(404).json({ error: 'Pianta non trovata' });
    } else {
      res.json(updatedPlant);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Errore durante l\'aggiornamento dei dati' });
  }
});


////////////////////////////////////DELETE////////////////////////////////////

// Cancellazione di un dato
app.delete('/delete-note/:id', async (req, res) => {
  const plantId = req.params.id;

  try {
    // Esegui la cancellazione nel database
    const deletedPlant = await Plants.findByIdAndDelete(plantId);

    if (!deletedPlant) {
      res.status(404).json({ error: 'Pianta non trovata' });
    } else {
      res.json({ message: 'Pianta cancellata con successo', deletedPlant });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Errore durante la cancellazione dei dati' });
  }
});



///////////////////////////////TEST CONNESSIONE//////////////////////////


app.all('/', (req, res) => {
  console.log("Richiesta in corso");
  res.send('Server attivato');
});


//////////////////////////////////////////////////TEST JSON //////////////////////////////

// Gestisci la richiesta per ottenere tutti i dati delle piante
app.get('/plants', (req, res) => {
  if (!plantsData) {
    res.status(500).json({ error: 'Dati delle piante non trovati' });
  } else {
    res.json(plantsData);
  }
});

///////////////////////////////////ERRORS///////////////////////////////

// Gestione degli errori
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Errore interno del server' });
});

