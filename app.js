const express = require('express');
const router = express.Router();

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get("/", function(req, res){
    console.log("Even more nothing");
    res.render('firstpage');
});

app.listen(4000, function() {
    console.log("Port open")
})

