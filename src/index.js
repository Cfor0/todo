const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

app.post('/add', (req, res) => {
    console.log(req.body);
    res.send('it works')
} )



app.listen(3000, () => {
    console.log('API up and running!')
})