/*
// first app

// importing express module
const express = require("express");
// importing path module
const path = require("path");
// making an express app
const app = express();
// defining port
const port = 80;

// static files are the files which are publically available
// serving static files
app.use('/static', express.static('static'))

// set the templete engine as pug
app.set('view engine', 'pug')

// set the views directory
app.set('views', path.join(__dirname, 'views'))

// my pug index endpoint by get request
app.get("/indexpug", (req, res) => {
    res.status(200).render('index', { title: 'pug page', message: 'This is pug index page of my first express app.By get request' })
});

// my pug index endpoint by post request
app.post("/indexpug", (req, res) => {
    res.status(200).render('index', { title: 'pug page', message: 'This is pug index page of my first express app.By post request' })
});

// in app in / whenever one goes this func. should run
// home page
// by get request
app.get("/", (req, res) => {
    res.status(200).send("This is home page of my first express app.");
});

// about section
// by get request
app.get("/about", (req, res) => {
    res.status(200).send("This is about page of my first express app.");
});

// in app in / whenever one goes this func. should run
// home page
// by post request
app.post("/", (req, res) => {
    res.status(200).send("This is home page of my first express app. '<post request>'");
});

// about section
// by post request
app.post("/about", (req, res) => {
    res.status(200).send("This is about page of my first express app. '<post request>'");
});

// error page (404)
// by get request
app.get("/errorpage", (req, res) => {
    res.status(404).send("This page is not found");
});

// error page (404)
// by post request
app.post("/errorpage", (req, res) => {
    res.status(404).send("This page is not found");
});

// to listen on port
app.listen(port, () => {
    console.log(`The application started succesfully on port ${port}`);
}); */

// second app(gym website)
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded()) // Html form data

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely"
    const params = { 'title': 'Enroll Now', "content": con }
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res) => {
    // The data given down(name, age, e.t.c.) comes from name and not from id
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = { 'message': 'Your form has been submitted successfully' }
    res.status(200).render('index.pug', params);

})


// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});