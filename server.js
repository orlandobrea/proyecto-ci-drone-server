const app = require('express')();

const PORT = process.env.PORT ? process.env.PORT : 3000;

app.get('/', (req, res) => {
    res.send('ok');
})

var server = app.listen(PORT, () => {
    console.log('Express app port ' + PORT);
})

module.exports = server;