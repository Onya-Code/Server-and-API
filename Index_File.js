const express = require('express');
const bodyParser = require('body-parser');

//const fixturesRoute = require('./Routes/Fixtures');

const PORT = 4500;
const app = express();


//const http = require("http");
//const fs = require("fs");


app.set("view engine", "ejs");
//app.set("views", "views");

app.use(express.static('public'));
app.use(bodyParser.json());

//app.use('/fixtures', fixturesRoute);


app.get('/',(req,res) => { 
  res.render('index', { name: 'Andy',
    title: 'Home page',
    students: ['Akinbayo', 'Lateef', 'Kayla', 'Christian', 'Clinton', 'Natalie', 'Bryan', 'Jude', 'Azeez']
  });
  //res.render('index', {title:'Home page', blogs })
});


app.get('/about', (req, res) => {
  res.render('about', {title: 'about page', data})
});


app.listen(PORT, () => {
  console.log("Server started successfully on port http://${PORT}")
});




//const server = http.createServer((req, res) => {
 //fs.readFile("./index.html", (err, data) => {   //rendering html with fs module.
  //res.writeHead(200, {
  // "content-type": "text/html",

 // });
  //res.write(data);
  //res.write("<input type='text'/>");
  //return res.end();

 //})
//}); 
