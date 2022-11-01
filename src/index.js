const express = require('express');
const app = express();
const port = 3000;
const path =require("path");
const morgan = require('morgan');
const {engine} = require("express-handlebars");

app.use(express.static(__dirname + '/public'));
//Request Logger
app.use(morgan('combined'));
//Template Engine
app.engine('.hbs',engine({extname: '.hbs'}))
app.set('view engine', '.hbs');
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news',(req,res) =>{
    res.render('news')
})
app.set('views', path.join(__dirname, 'resource/views'));
console.log(path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





