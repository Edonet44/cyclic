<template>
<div class="plant_detail">
    <h1>Dettagli della Pianta</h1>
    <div class="plant-info">
      <h3>{{ plant.name }}</h3>
      <p>Data di Piantumazione: {{ plant.plantingDate }}</p>
      <p>Altezza Iniziale: {{ plant.initialHeight }} cm</p>
      <p>Note: {{ plant.notes }}</p>
    </div> 
  </div>

</template>

<script>
export default {

  data() {

    return {
      plant:{}  //oggetto che conterra i dati della pianta
    }
  },
  created() {
    //ottiendi l id della route
    const plantId = this.$route.params.id;
    //effettua la chiamata api per ottenere i dettagli della pianta
     axios
      .get(`https://yellow-vulture-suit.cyclic.app/plants/id/${plantId}`)
      .then((response) => {
        this.plant = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
    
}


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