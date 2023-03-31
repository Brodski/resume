const express = require('express');
const app = express();
const {Jobs, Projects} = require("./resumeData");
const serverless = require('serverless-http');
require("dotenv").config();

// const { JobsData } = require("./data/resume");

app.set('view engine', 'ejs')
app.set('views', './views') // this line not needed b/c views is by default
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    // res.render('index');
    res.render('index', { jobs: Jobs, projects: Projects })
})

app.get("/resume", function(req, res) {
    res.render('index', { jobs: Jobs, projects: Projects })
})

console.log("=========================")
if (!process.env.IS_LAMBDA) {
    app.listen((process.env.PORT ?? 3000 ), function() {
        console.log("STARTING: " + (process.env.PORT ?? 3000))
    })
}  else {
    console.log("process.env.IS_LAMBDA" , process.env.IS_LAMBDA)
    module.exports.handler = serverless(app);
}
console.log("=========================")