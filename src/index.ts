// Main entry point for the CloneCoin game engine server

// Initialize server configurations here

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the CloneCoin Game Engine Server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});