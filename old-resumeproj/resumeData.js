class Job {
    constructor(title, company, start, end, descriptions) {
        this.title = title;
        this.company = company;
        this.start = start;
        this.end = end;
        this.descriptions = descriptions
    }
}
const desc1 = ['build the website', 'maintain the website', 'work with design']
const job1 = new Job("Web Developer", "Ping Identity", "Sept 2020", "Present", desc1)







const desc2 = ['Helped building a proxy server to route traffic and get data on Roku device', 
                'Read har files and construct a database(mongo) for a proxy server with Flask/Python to query',
                'sit and twirl my thumbs all day'
                ]
const job2 = new Job("Platform Infrastructure Integration / Automation Engineer", "Charter Communications", "Dec 2018", "Oct 2019", desc2)









const descVFO = ["A website that lets you login through your youtube account and customize the content you see from whoever you follow, because youtube recommendation algorith is awful",
                'A single-page web application based on N-tier architecture with Presentation, Logic, and Data layer.', 
                'Frontend was built using the React framework, Javascript, Materialize CSS, and SASS with a focus on hooks in functional components over lifecycle methods in class components.', 
                "Client utilizes AJAX and OAuth 2.0 to communicate to Youtube's REST API, retrieving data from the user's Youtube profile and asynchronously renders the returned data specific to each user.", 
                "Built a backend REST API server in Java using the Spring Boot framework with MongoDB database; performs basic server function like parsing JSON objects and routing for HTTP GET and POST endpoints"
                ]
const projVFO = new Job("Name: Video Feed Organizer (VFO)", null, "https://vfo.one", null, descVFO)


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
const descAndroid = [
                    "Android Native app written in Kotlin. The app plays local files from the user's phone.",
                    "This app is unique to other apps because I masterfully impliment gestures to create the perfect user experience which no one else has done before",
                    "Follows the single activity, multiple fragments architecture pattern.",
                    "Tech features; uses a foreground service to play audio, registered to receive implicit intents for  audio, broadcasts intents for email, supports gestures, user preferences and data persistence."
                ]

const projAndriod = new Job("Name: Brodski Minimalist Music Player With Swipe & Touch", null, "Google Play Store: play.google.com/store/apps/details?id=com.bskimusicplayer.mediaplayer", null, descAndroid)








const descNode = [  "A website (still in development) that allows the user to search select videos for words & phases.",
                    'Server runs NodeJS, deployed in AWS Elastic Beanstalk, utilizing AWS services and a MongoDB Atlas cluster',
                    "An API is called that automatically creates the captions for each video", 
                    "The content, captions & videos, is uploaded to an S3 bucket. The server syncs data from the S3 bucket to a MongoDB cluster",
                    // "Content is stored in a S3 bucket, contains; many videos and their transcripts with timestamps",
                    "End user submits search inputs. Server then queries data in a MongoDB cluster. Uses <code> $filter</code>, <code>cond</code>, <code>regexMatch</code>, and <code>$project</code>",
                    `Additional AWS services: 
                    <ul> 
                        <li>CloudFront (CDN) </li> 
                        <li>Certficate Manager (SSL/HTTPS)</li>
                        <li>Route 53 </li>
                        <li>CodePipeline</li>
                    </ul`,
                    
                ]
const projNode = new Job("Name: Bski Captions", null, "https://bski.one", null, descNode)






const descMV = ['Firefox and Chrome browser extension', 
                "Automatically adds Event Listeners to any page with a video elements, the events intelligently respond to user's mouse scroll",
                "Allows user to control volume, skip forward/back, and more with their mouse wheel; it solves the problem of frustately trying to point and click on videos with horrible UI and impossibly thin icon"
        ]
const projMV = new Job("Name: Bski Control Video with Mouse", null, "Mozilla Addons: https://addons.mozilla.org/en-US/firefox/addon/bski-control-video-with-mouse", null, descMV)







const descFiles =[' Firefox only browser extension', 
                "This extension adds CSS and runs javascript on top of the default style that the browser already uses when viewing local files", 
                'Eg. Navigate to B:\\Users\\DrBrodski via the browser, extension renders differnt layout then the default'
            ]
const projFiles = new Job("Name: Local File Browsing", null, "Mozilla Addons: https://addons.mozilla.org/en-US/firefox/addon/better-local-file-viewer", null, descFiles)







const Jobs = [job1, job2]
const Projects = [projNode, projVFO, projMV, projFiles, projAndriod ]
module.exports = { Jobs, Projects };

