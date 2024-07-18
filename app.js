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

const {Jobs, Projects} = require("./resumeData");
const {Jobs2, Projects2} = require("./resumeData2");
const {Jobs_chatgpt, Projects_chatgpt} = require("./resumeDataChatgpt");

//////////////////////////
//    REAL ENDPOINTS    //
//////////////////////////
app.get('/', function(req, res) {
    console.log('sending homepage')
    res.render('index', { jobs: Jobs, projects: Projects })
})

app.get('/markdown', function(req, res) {
    console.log('sending markdown')
    res.render('markdown/markdown.ejs', { })
})



//////////////////////////
// ALT TESTING VERSIONS //
//////////////////////////
app.get('/2', function(req, res) {
    console.log('sending /2')
    res.render('index', { jobs: Jobs2, projects: Projects2 })
})
app.get('/3', function(req, res) {
    console.log('sending /3')
    res.render('index', { jobs: Jobs_chatgpt, projects: Projects_chatgpt })
})


//////////////////////////
//    BEGIN SERVER      //
//////////////////////////

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