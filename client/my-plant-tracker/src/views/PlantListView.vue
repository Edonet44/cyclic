<!--
    Vista della Lista delle Piante (PlantListView): 
    Questa vista mostra un elenco di tutte le piante registrate. 
    Puoi utilizzare il componente PlantList per visualizzare le piante.
     Gli utenti possono fare clic su una pianta per visualizzarne i dettagli.
-->



<template>
  <section>
<GridComponent/>
  </section>
</template>


<script>
import GridComponent from '../components/PlantGrid_components.vue';

export default {
  components: {
    GridComponent, // Dichiarazione del componente per l'uso nella vista
  },
};
</script>