const express = require('express');

const app = express();

app.get("/", function(req, res){
    console.log("Even more nothing");
    res.send("HIIIIIIS");
});

app.listen(4000, function() {
    console.log("Port open")
})

