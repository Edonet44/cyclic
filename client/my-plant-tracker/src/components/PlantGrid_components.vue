<!-- recupero dei dati 
Oggetto Plant
chiave _id
nome=plant.name
data=plant.plantingDate
altezza=plant.initialHeight
note=plant.notes
link verso plantdetail
-->

<template>
  <div class="plant-grid">
    <div v-for="plant in plants" :key="plant._id" class="plant-item">
      <img :src="plant.imageUrl" alt="Plant image" />
      <div class="plant_info">
        <h3>{{ plant.name }}</h3>
        <p>Data di Piantumazione: {{ plant.plantingDate }}</p>
        <p>Altezza Iniziale: {{ plant.initialHeight }} cm</p>
        <p>Note{{ plant.notes }}</p>
        <!-- <router-link :to="'/plants/' + plant._id">
          <button>Apri dettagli</button>
        </router-link> -->
        <router-link :to="{ name: 'plantsdetail', params: { id: plant._id }}">
  <button>Apri dettagli</button>
</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
//import axios from "axios";
import axios from "../axios/axios";
//importo il file test.js di test
//import { plants } from "../test/test";
export default {
  //per il testing del file test.js
  // setup() {
  //     const plantsData = ref(plants);

  //     return {
  //       plants: plantsData,
  //     };
  //   },

  data() {
    return {
      plants: [],
    };
  },
  created() {

const instance = axios.create({
  baseURL: 'https://yellow-vulture-suit.cyclic.app', // Dominio Server
  timeout: 10000,
  withCredentials: true,
});
// Ora puoi utilizzare questa istanza di Axios per effettuare le tue richieste API
instance.get('/get-plants')
  .then((response) => {
     this.plants = response.data;
  })
  .catch((error) => {
    console.error(error);
  });


  },
 
};
</script>


<style scoped>
.plant-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.plant-item {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.plant-info {
  margin-top: 10px;
}
</style>