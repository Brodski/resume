const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();
const serverless = require('serverless-http');


require("dotenv").config();

app.set('view engine', 'ejs')
app.set('views', './views') 
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/markdown'))

const {Jobs, Projects} = require("./views/fancy/jobData");

///////////////////////////////////////////////
////////////    REAL ENDPOINTS    /////////////
///////////////////////////////////////////////
app.get('/', function(req, res) {
    console.log('sending resume')
    // res.render('index', { jobs: Jobs, projects: Projects })
    res.render('resume/resume.ejs', { })
})

app.get('/fancy', function(req, res) {
    console.log('sending fancy')
    res.render('index', { jobs: Jobs, projects: [] })
})
app.get('/aem', function(req, res) {
    console.log('sending aem')
    res.render('aem/aem.ejs', { })
})



////////////////////////////////////////////////
///////////      BEGIN SERVER        ///////////
////////////////////////////////////////////////

// Create the serverless handler outside of the main handler function
const serverlessHandler = serverless(app);

if (!process.env.IS_LAMBDA) {
    app.listen((process.env.PORT ?? 3000 ), function() {
        console.log("STARTING: " + (process.env.PORT ?? 3000))
    })
}  else {
    console.log("process.env.IS_LAMBDA" , process.env.IS_LAMBDA)
    module.exports.handler = async (event, context) => {
        console.log("event.path", event.path)
        if (event.path.startsWith('/favicon.ico')) {
            const imagePath = path.join(__dirname, 'public/favicon.ico');
            const imageBytes = fs.readFileSync(imagePath);
            const base64Image = imageBytes.toString('base64');
            return {
                statusCode: 200,
                headers: {
                  'Content-Type': 'image/x-icon',
                },
                body: base64Image,
                isBase64Encoded: true,
            };
        } else {
            return serverlessHandler(event, context); 
        }
    };
    // module.exports.handler = serverless(app);
}