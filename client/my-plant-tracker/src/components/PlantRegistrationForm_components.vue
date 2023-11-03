<template>
  <div>
    <h2>Form di registrazione Pianta</h2>

    <div class="registrazione">
      <input
        type="text"
        id="plantName"
        name="plantName"
        placeholder="Nome della pianta"
        v-model="plantName"
      />
      <input
        type="date"
        id="plantingDate"
        name="plantingDate"
        v-model="plantingDate"
      />
      <input
        type="number"
        id="initialHeight"
        name="initialHeight"
        placeholder="Altezza iniziale (cm)"
        v-model="initialHeight"
      />
      <input
        type="file"
        id="plantImage"
        name="plantImage"
        accept="image/*"
        @change="handleImageUpload"
      />
      <textarea
        id="plantNotes"
        name="plantNotes"
        placeholder="Note aggiuntive"
        v-model="plantNotes"
      ></textarea>
      <button type="submit">Invia</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {

  setup() {
    const plantName = ref("");
    const plantingDate = ref("");
    const initialHeight = ref(0); // Inizializzalo con un valore predefinito
    const plantNotes = ref("");

    const submitPlant = () => {
      // Esegui qui la logica per inviare i dati al backend, ad esempio una chiamata API POST
    };
    return {
      plantName,
      plantingDate,
      initialHeight,
      plantNotes,
      submitPlant,
    };
  },
};
</script>

<style scoped>
registrazione {
  background: linear-gradient(to bottom, #ffffff, #b3ffb3);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 60%;
  margin: 0 auto;
}

input,
textarea,
button {
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background: #4caf50;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #45a049;
}
</style>