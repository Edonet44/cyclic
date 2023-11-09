<!--
Vista di Dettaglio della Pianta (PlantDetailView): 
Questa vista mostra i dettagli completi di una pianta specifica.
 Utilizza il componente PlantDetail per visualizzare le informazioni dettagliate sulla pianta,
 tra cui il tracciamento della crescita e le immagini associate.

-->

<template>
  <section>
<Plantdetail_component/>
  </section>
</template>


<script>
import PlantDetail_components from '../components/PlantDetail_components.vue';

export default {
  components: {
    PlantDetail_components, // Dichiarazione del componente per l'uso nella vista
  },
};
</script>