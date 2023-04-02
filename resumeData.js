class Job {
    constructor(title, company, start, end, descriptions) {
        this.title = title;
        this.company = company;
        this.start = start;
        this.end = end;
        this.descriptions = descriptions
    }
}
const desc1 = [

            "Use Adobe's content management system, AEM, to maintain and develop the company's website.",
            'Both frontend and backend development, using Java Servlets, JSP, HTML, Javascript, SASS/CSS.', 
            'Reworked the website that ultimately improved customer conversion rate by 61%.',
            'Frontend work: building web components for the content team and design team, enabling static or dynamic pages, & optimizing page performance. Highly experienced in Javascript, HTML, CSS.',
            // 'Frontend work: building web components for the content team and design team. Using JSP (HTML, Javascript, CSS/SASS and Java)',
            // 'Frontend work includes building web components for the content team, allowing them to drag and drop the components on the page. Providing them the option to adjust the components for functionality or design.',
            // 'Frontend work includes building web components for the content team, using JSP, Javascript, HTML, CSS/SASS and Java',
            // 'Backend work includes writing pages to used server-side rendering, working with JSP and Java Servlets that communicate with pages for dynamic content.',
            // `Backend work includes creating Java servlets for certain pages that used client-side rendering,
            `Backend work: building APIs with Java servlets for client-side & server-side rendered pages,
                writing jobs to crawl content and make edits or other maintenance on pages.`,
            // "Update our CDN's behavior, AWS Cloudfront, for new and old pages",
            // 'Wrote jobs that used JCR API to crawl nodes and do content edits or maintenance on pages.',
            'Work with designers, marketing, SEO and the content team to reach business requirements.', 
            'Provided guidance and support to new employees and interns, facilitating their success, onboarding and integration into the organization.',
            // "Improved the homepage's Lighthouse rating by 20-35 points in every category over the last year; performance, accessiblity, SEO, ect.",
            // 'Implemented tools to help test code and debug code in production or stage without redeploying, saving a couple of hours each time and reducing the risk of breaking anything during the process.'
        ]
const job1 = new Job("Java Web Developer", "Ping Identity", "Sept 2020", "Present", desc1)






const desc2 = [
                // "Worked on a partial DevOps/SRE team that specialized in platform, quality assurance, and infrastructure.",
                "Worked on a DevOps/SRE team, helping with deployment and QA. Daily use of linux VMs and our cloud computing virtualization platform, VSphere.",
                'Helped build a proxy server written in Flask/Python to route traffic and query data from a MongoDB database.',
                "Wrote a testing tool in Python to QA a cluster of DHCP servers. The script used the hypervisor's API to shut down worker VMs and master VMs during stress testing.",
                "Additionally deployed docker apps (running Telegraf) to gather metrics from the VMs running the DHCP servers, sending the data to our splunk server.",     //Debugging included going into the docker via <code> docker exec -it  </code>."
                "Help built a new test environment for an existing project in AWS by redeploying that project at a scaled down cluster size. This involved researching company documents and working with the team that managed that project; editing configuration files like Terraform, then executing the deployment."
         
                ]
const job2 = new Job("Platform Infrastructure Integration / Automation Engineer", "Charter Communications", "Dec 2018", "Oct 2019", desc2)









const descVFO = ["A website that lets a user login with their youtube account and customize their feed.",
                // 'A single-page web application based on N-tier architecture with Presentation, Logic, and Data layer.', 
                'A single-page web application.',
				'Frontend was built using the React framework, Javascript, Materialize CSS framework, and SASS with a focus on React hooks in functional components over lifecycle methods in class components.', 
                "Client utilizes AJAX and OAuth 2.0 to communicate to Youtube's REST API, retrieving data from the user's Youtube profile and asynchronously rendering the returned data specific to each user.", 
                "Built a backend REST API server in Java using the Spring Boot framework with MongoDB database; server performs basic operations like parsing JSON objects and routing for HTTP GET and POST endpoints.",
			 "I created this app because the youtube recommendation algorithm is awful.",
                ]
const projVFO = new Job("Name: Video Feed Organizer (VFO)", null, "https://vfo.one", null, descVFO)


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
const descAndroid = [
                    "Android Native app written in Kotlin. The app plays local files from the user's phone.",
                    "This app is unique to other apps because I masterfully implement gestures to create the perfect user experience which no one else has done before",
                    "Follows the single activity, multiple fragments architecture pattern.",
                    "Tech features; uses a foreground service to play audio, registered to receive implicit intents for  audio, broadcasts intents for email, supports gestures, user preferences and data persistence."
                ]

const projAndriod = new Job("Name: Brodski Minimalist Music Player With Swipe & Touch", null, "Google Play Store: play.google.com/store/apps/details?id=com.bskimusicplayer.mediaplayer", null, descAndroid)








const descCaptions = [  "A website that allows the user to search for words & phases from a set of videos I have selected.",
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
const projCaptions = new Job("Name: Bski Captions", null, "https://sample.bski.one", null, descCaptions)






const descMV = ['Browser extension for Firefox and Chrome', 
                "Allows users to control volume, skip forward/back, and more with their mouse wheel; it solves the problem of frustratingly trying to point and click on videos with horrible UI and absurdly thin icons.",
                "The extension adds Event Listeners to most video elements, and then makes use of the video element's API.",
        ]
const projMV = new Job("Name: Bski Control Video with Mouse", null, "Mozilla Addons: https://addons.mozilla.org/en-US/firefox/addon/bski-control-video-with-mouse", null, descMV)







const descFiles =['Browser extension for Firefox only.', 
                "This extension adds CSS and javascript on top of the default style that the browser already uses when viewing local files.", 
                'Eg. Navigate to B:\\Users\\DrBrodski via the browser; extension renders different layout then the default.'
            ]
const projFiles = new Job("Name: Local File Browsing", null, "Mozilla Addons: https://addons.mozilla.org/en-US/firefox/addon/better-local-file-viewer", null, descFiles)



const descResume =["This résumé is not a template off the internet, I coded it.",
                    "Made with NodeJS, EJS, and SASS / CSS. Hosted on AWS Lambda", 
                 
            ]
const projResume = new Job("Name: Resume", null, "https://resume.bski.one", null, descResume)







const Jobs = [job1, job2]
const Projects = [projCaptions, projVFO, projMV, projFiles, projAndriod, projResume ]
module.exports = { Jobs, Projects };

