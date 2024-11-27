const express = require('express');
const app = express();

// Ruta principal que devuelve un nuevo mensaje
app.get('/', (req, res) => {
    res.status(200).send('¡Bienvenido a mi servidor Express!');
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
