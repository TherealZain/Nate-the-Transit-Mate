const express = require('express');
const path = require('path');



const webApp = express();

webApp.use(express.urlencoded({
  extended: true
}));
webApp.use(express.json());



const PORT = 2000;
webApp.use(express.static(path.join(__dirname, 'public')));




webApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});