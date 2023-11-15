// axios.js

import axios from "axios";

// Crea un'istanza di Axios con la configurazione comune
const instance = axios.create({
  baseURL: 'https://yellow-vulture-suit.cyclic.app', // Dominio Server
  timeout: 10000,
  withCredentials: true,
});

export default instance;