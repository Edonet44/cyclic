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



}
</script>

<style scoped>

</style>