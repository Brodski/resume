const express = require('express');
const app = express();
const serverless = require('serverless-http');
require("dotenv").config();

app.set('view engine', 'ejs')
app.set('views', './views') 
app.use(express.static(__dirname + '/public'))

const {Jobs, Projects} = require("./resumeData");
const {Jobs2, Projects2} = require("./resumeData2");
const {Jobs3, Projects3} = require("./resumeData3");

app.get('/', function(req, res) {
    res.render('index', { jobs: Jobs, projects: Projects })
})
app.get('/2', function(req, res) {
    res.render('index', { jobs: Jobs2, projects: Projects2 })
})
app.get('/3', function(req, res) {
    res.render('index', { jobs: Jobs3, projects: Projects3 })
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