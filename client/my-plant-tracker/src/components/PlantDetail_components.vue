<template>
  <div class="plant_details">
    <h1>I dettagli della Pianta</h1>
    <div v-if="plant" class="plant-info">
      <h3>{{ plant.name }}</h3>
      <p>Data di Piantumazione: {{ plant.plantingDate }}</p>
      <p>Altezza Iniziale: {{ plant.initialHeight }} cm</p>
      <p>Note: {{ plant.notes }}</p>
    </div>
    <div v-else><p>Caricamento in corso...</p></div>


    <!-- <div class="plant-info">
      <h3>{{ plant.name }}</h3>
      <p>Data di Piantumazione: {{ plant.plantingDate }}</p>
      <p>Altezza Iniziale: {{ plant.initialHeight }} cm</p>
      <p>Note: {{ plant.notes }}</p>
    </div> -->
  </div>
</template>

<!-- <script>
import axios from "../axios/axios";

// Abilita la visualizzazione dei log per le risposte
axios.instance.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    console.error("Response Error:", error);
    throw error;
  }
);

export default {
  data() {
    return {
      plant: null, //oggetto che conterra i dati della pianta
    };
  },

  async created() {
    // Ottieni l'id dalla route
    const plantId = this.$route.params.id;

    // Effettua la chiamata API per ottenere i dettagli della pianta
    axios
      .get(`/plants/${plantId}`)
      .then((response) => {
        debugger;
        console.log("Dati della pianta:", response.data);
        // Assegna i dati della pianta alla variabile 'plant'
        this.plant = response.data;
      })
      .catch((error) => {
        console.error(
          "Errore durante il recupero dei dati della pianta:",
          error
        );
      });
  },
};
</script> -->


<script>
import axios from "../axios/axios";

// // Abilita la visualizzazione dei log per le risposte
axios.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    console.error("Response Error:", error);
    throw error;
  }
);

export default {
  data() {
    return {
     plant: null,
    //  plant: [],//oggetto che conterrà i dati della pianta
    };
  },

  async created() {
    // Ottieni l'id dalla route
    const plantId = this.$route.params.id;

    // Effettua la chiamata API per ottenere i dettagli della pianta
    axios
      .get(`/plants/${plantId}`)
      .then((response) => {
        debugger;
        console.log("Dati della pianta:", response.data);
        // Assegna i dati della pianta alla variabile 'plant'
        this.plant = response.data;
      })
      .catch((error) => {
        console.error(
          "Errore durante il recupero dei dati della pianta:",
          error
        );
      });
  },
};
</script>



<style scoped>
.plant_detail {
  text-align: center;
  margin: 20px;
}

.plant-info {
  background: linear-gradient(to bottom, #e0f2f1, #00bcd4);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.plant-details {
  color: #004d40;
}

.detail-item {
  margin: 10px 0;
}
</style>