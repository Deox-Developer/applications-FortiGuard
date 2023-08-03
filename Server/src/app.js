const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta para recibir información de https://fortiguard.app/
app.get('/fortiguard', async (req, res) => {
  try {
    const response = await axios.get('https://fortiguard.app/');

    // Procesar la respuesta recibida
    // Por ejemplo, si la respuesta es en formato JSON
    // res.json(response.data);

    // O si la respuesta es HTML
    // res.send(response.data);

    // En este ejemplo, simplemente devolvemos la respuesta completa
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error al obtener información de FortiGuard');
  }
});

// Ruta para la página principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi página web con Node.js y Express!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});