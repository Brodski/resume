class Job {
    constructor(title, company, start, end, descriptions) {
        this.title = title;
        this.company = company;
        this.start = start;
        this.end = end;
        this.descriptions = descriptions
    }
}


// #######################################################
// ###############        PING ID       ##################
// #######################################################
const descPing = [
            "Use Adobe's content management system, AEM, to provide the structure for others to quickly create and \
            edit webpages on the companies main website. I am familiar with all the intricaties and technologies \
            used to build and host this site: \
            <a target='_blank' href='https://www.pingidentity.com' rel='noopener'> www.pingidentity.com. </a>",
            // 'Both frontend and backend development, using Java Servlets, JSP, HTML, Javascript, SASS/CSS.', 
            'Frontend work: building web components for the content team and design team, enabling static or dynamic pages, & optimizing page performance. Highly experienced in Javascript, HTML, CSS.',
            `Backend work: building APIs with Java servlets for client-side & server-side rendered pages,
                writing jobs to crawl content and make edits or other maintenance on pages. Occasional work with threads.`,
            `Cloud computing work: Wrote Lambda Functions along with the terraform configurations and gitlab-ci config file. Addition work with our the Cloudfront CDN.`,
            'Reworked the website that ultimately improved customer conversion rate by 61%.',
            'Work with designers, marketing, SEO and the content team to reach business requirements.', 
            'Provided guidance and support to new employees and interns, facilitating their success, onboarding and integration into the organization.',
        ]
const jobPing = new Job("Java Web Developer", "at Ping Identity", "Sept 2020", "Present", descPing)



// #######################################################
// ############        CHARTER COMMS       ###############
// #######################################################
const descCharter  = [
                "Worked on a DevOps/SRE team, helping with deployment and QA. Daily use of linux VMs and our \
                    cloud computing virtualization platform, VSphere.",
                'Helped build a proxy server written in Flask/Python to route traffic and query data from a \
                    MongoDB database.',
                "Wrote a testing tool in Python to QA a cluster of DHCP servers. The script used the hypervisor's\
                     API to shut down worker VMs and master VMs during stress testing.",
                "Additionally deployed docker apps (running Telegraf) to gather metrics from the VMs running the \
                    DHCP servers, sending the data to our splunk server.",
                "Help built a new test environment for an existing project in AWS by redeploying that project at \
                    a scaled down cluster size. This involved researching company documents and working with the \
                    team that managed that project; editing configuration files like Terraform, then executing the deployment."        
                ]
const jobCharter = new Job("Platform Infrastructure Integration / Automation Engineer", "at Charter Communications", "Dec 2018", "Oct 2019", descCharter )






// #######################################################
// ############      Bski Min Play      ##################
// #######################################################
const projAndriod = new Job(
    "Name: Brodski Minimalist Music Player With Swipe & Touch", 
    "Personal project - Google Play Store: play.google.com/store/apps/details?id=com.bskimusicplayer.mediaplayer", 
    "", 
    null, 
    [
        "Android Native app written in Kotlin. The app plays local files from the user's phone.",
        "This app is unique to other apps because I masterfully implement gestures to create the perfect user experience.",
        // "Follows the single activity, multiple fragments architecture pattern.",
        // "Tech features; uses a foreground service to play audio, registered to receive implicit intents for  audio, broadcasts intents for email, supports gestures, user preferences and data persistence."
    ]
)



// #######################################################
// ###############        VFO        #####################
// #######################################################
// const descVFO = ["A website that lets a user login with their youtube account and customize their feed.",
//                 // 'A single-page web application based on N-tier architecture with Presentation, Logic, and Data layer.', 
//                 'A single-page web application.',
// 				'Frontend was built using the React framework, Javascript, Materialize CSS framework, and SASS with a focus on React hooks in functional components over lifecycle methods in class components.', 
//                 "Client utilizes AJAX and OAuth 2.0 to communicate to Youtube's REST API, retrieving data from the user's Youtube profile and asynchronously rendering the returned data specific to each user.", 
//                 "Built a backend REST API server in Java using the Spring Boot framework with MongoDB database; server performs basic operations like parsing JSON objects and routing for HTTP GET and POST endpoints.",
// 			 "I created this app because the youtube recommendation algorithm is awful.",
//                 ]
const projVFO = new Job(
    "Name: Video Feed Organizer (VFO)", "Personal project - https://vfo.one", 
    "", 
    null, 
    [
        "A single-page web application that communicates to Youtube's REST API, allowing customization for the user and their Youtube profile.", 
        'Frontend was built using React, Javascript, SASS and Materialize CSS framework', 
        "Backend is a Java Springboot server and a MongoDB database.",
    ]
)








// #######################################################
// #############      PBS Captions       #################
// #######################################################
const projCaptions = new Job(
    "Name: Bski Captions", 
    null, 
    "https://sample.bski.one", 
    null, [  
        "A website that allows the user to search for words & phases from a set of videos I have selected.",
        'Server runs NodeJS, deployed in AWS Lambda using Serverless Framework, utilizing a few other AWS services and a MongoDB Atlas cluster.',
        // "An API is called that automatically creates the captions for each video.", 
        // "The content (captions & videos) is uploaded to an S3 bucket. The server syncs the data from the S3 bucket to a MongoDB cluster. User queries are executed from the server to the MongoDB database",
        // "Content is stored in a S3 bucket, contains; many videos and their transcripts with timestamps.",
        "End user submits search queries, then the server sends those queries to the MongoDB cluster. Uses operations like; <code> $filter</code>, <code>cond</code>, <code>regexMatch</code>, and <code>$project</code>.",
        `Additional AWS services: 
        <ul> 
            <li>CloudFront (CDN) </li> 
            <li>Certificate Manager (SSL/HTTPS)</li>
            <li>Lambda </li>
            <li>Route 53 </li>
            <li>IAM </li>
        </ul>`,
        
    ]
)





// #######################################################
// ##############    Local File Ext.   ###################
// #######################################################
const projFiles = new Job(
    "Name: Local File Browsing", 
    null, 
    "Mozilla Addons: https://addons.mozilla.org/en-US/firefox/addon/better-local-file-viewer", 
    null, [
        'Browser extension for Firefox only.', 
        "This extension adds CSS and javascript on top of the default style that the browser already uses when viewing local files.", 
        'Eg. Navigate to B:\\Users\\DrBrodski via the browser; extension renders different layout then the default.'
    ]
)

// #######################################################
// ##############       Digi Seat      ###################
// #######################################################
const projCsharp = new Job(
    "Name: DigiSeat", 
    null, 
    "", 
    null, [
        "Worked on a UWP app built on ASP.NET Core, Azure and SQL Server using XAML and C#.",
        "Debugging known bugs and identifying new bugs. Creating unit tests and the required mock objects.",
        "Wrote HTTP routes to transfer data between the backend and frontend to perform basic CRUD operation",
    ]
)







// #######################################################
// ################   Mouse & Video   ####################
// #######################################################
const projMV = new Job(
    "Name: Bski Control Video with Mouse", 
    "Personal project - Mozilla Addons: https://addons.mozilla.org/en-US/firefox/addon/bski-control-video-with-mouse", 
    "", 
    null, 
    [
        'Browser extension for Firefox and Chrome', 
        "A fork from another extension that gives users more control over videos in the browser.",
        //  volume, skip forward/back, and more with their mouse wheel; it solves the problem of frustratingly trying to point and click on videos with horrible UI and absurdly thin icons.",
        "The extension adds Event Listeners to maniuplate the video element's API.",
    ]
)





// #######################################################
// ################        GITHUB     ####################
// #######################################################
const descResume =["This résumé is made with NodeJS, EJS, and SASS / CSS. Hosted on AWS Lambda",]
const projResume = new Job("Name: Resume", "https://resume.bski.one", "", null, descResume)

// const descGit =["More projects. Some unfinished. Some unimpressive.",]
const descGit =["",]
const projGit = new Job("Github", "https://github.com/Brodski", "", null, descGit)







const Jobs2 = [jobPing, jobCharter]
// const Projects = [projCaptions, projVFO, projMV, projFiles, projAndriod, projResume ]
const Projects2 = [projAndriod, projVFO,  projMV, projResume, projGit ]
module.exports = { Jobs2, Projects2 };

