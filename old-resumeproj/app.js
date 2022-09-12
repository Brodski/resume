const express = require('express');
const app = express();
const yeah = require("./resume");
const { JobsData } = require("./data/resume");

app.set('view engine', 'ejs')
app.set('views', './views') // this line not needed b/c views is by default

app.get('/', function(req, res) {
    res.render('index');
    res.send('hello0')
})

app.get("/resume", function(req, res) {
    // res.render('resume', JobsData)\
    console.log(JobsData)
    // console.log(Boop)
    console.log("%o", { jobs: JobsData })
    // console.log("%o", { jobs: JobsData.JobsData  })
    res.render('resume', { jobs: JobsData })
    // res.render('xxxjob', { jobs: JobsData })
})

app.listen(4200, function() {
    console.log("STARTING")
})