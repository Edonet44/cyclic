<!--

Vista di Registrazione della Pianta (PlantRegistrationView):
 Questa vista contiene il modulo di registrazione della pianta, utilizzando il componente 
 PlantRegistrationForm. 
Gli utenti possono inserire i dettagli della pianta, 
come il nome, la data di piantumazione, ecc.

-->

<template>
  <section>
<RegistrationForm/>
    
  </section>
    
  
</template>

<script>
import RegistrationForm from '../components/PlantRegistrationForm_components.vue';

export default {
  components: {
    RegistrationForm, // Dichiarazione del componente per l'uso nella vista
  },
};
</script>