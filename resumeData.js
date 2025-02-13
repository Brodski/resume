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
    "Use Adobe's content management system, AEM, to provide the structure for team members to quickly design, \
        publish and modify web content on the company's main website. Well-versed with the technologies for \
        constructing and maintaining a robust, scalable web presence at: \
        <a target='_blank' href='https://www.pingidentity.com' rel='noopener'> www.pingidentity.com. </a>",
    `Cloud computing work: Independently built AWS Lambda Functions, AWS Api Gateways, CloudWatch services,\
        and updated our Cloudfront CDN, along with an accompanying GitLab-CI pipeline, in an effort to \
        migrate endpoints from our CMS to AWS. I held responsibility for the architecture, pipeline, IaC \
        tool, and built it all from start to finish.`,
    `Wrote the Terraform configurations for the services and wrote the NodeJS code of the Lambda Functions for \
        the migrated endpoint. There have not been any records of them failing since they were built. These \
        endpoints are vital and cannot fail.`,
    `Dockerized applications for deployment in our cloud environments, Adobe and AWS.`, 
    `Backend work: built APIs using Java servlets for client-side and server-side rendering, ensuring seamless \
        interaction and data exchange. Automated jobs for content crawling, edits, and general page maintenance.\
        Experienced with thread management for asynchronous operations.`,
    'Frontend work: built web components for content and design teams, enabling static and dynamic page \
        functionalities across the website.', //  Advanced in JavaScript, HTML, and CSS.
    `Wrote and designed components that used LLMs (via OpenAI's API) to customize website content towards users. \
        It was semi-automated, allowing the content team to trigger content customization with a single click.`,
    `Applied SQL to design and expand database tables, enforce data normalization standards, and ensure data \
        integrity through well-structured primary and foreign key relationships`,
    // 'Reworked the website that ultimately improved customer interaction by 61%.',
    // 'Collaborate with designers, marketing, SEO, and content teams, ensuring alignment to meet and exceed \
    //     business objectives.', 
    'Provided guidance and support to new employees and interns, facilitating their success, onboarding and integration into the organization.',
    'Began as an Associate Developer, ended as Senior Developer.',
]
const jobPing = new Job("Senior Java Web Developer", "at Ping Identity", "Sept 2020", "June 2024", descPing)



// #######################################################
// ############        CHARTER COMMS       ###############
// #######################################################
const descCharter  = [
    "Part of a DevOps/SRE team, contributing to deployment processes and quality assurance.",
    "Routinely accessed virtual machines (VMs) via SSH to execute and develop various scripts. \
        Used command-line tools to navigate the internal file system of the VMs to locate log \
        files, view, filter, and analyze logs for troubleshooting and performance monitoring.",
    'Developed a Flask/Python-based proxy server to streamline traffic and facilitate data \
        retrieval from a MongoDB database.',
    "Wrote a Python-based testing tool for quality assurance on a DHCP server cluster, utilizing the \
        hypervisor's API for precise control over both worker and master virtual machines during stress testing.",
    "Deployed docker apps, running Telegraf, to gather metrics from the VMs running the DHCP servers. It streamed \
        data into our Splunk server for real-time data analysis. I also created a Splunk dashboard to visualize and examine the data.",
    "Helped build a new test environment for an existing project in AWS by redeploying that project at a \
        scaled-down cluster size. This involved researching company documents and working with the team that \
        managed that project; editing configuration files like Terraform, then executing the deployment.",
    "Built frontend framework with React and Redux"

]
const jobCharter = new Job("Platform Infrastructure Integration / Automation Engineer", "at Charter Communications", "Dec 2018", "Oct 2019", descCharter )






// #######################################################
// ############      Bski Min Play      ##################
// #######################################################
const projAndriod = new Job(
    "Name: Brodski Minimalist Music Player With Swipe & Touch", 
    "Personal project - <a href='https://github.com/Brodski/MediaPlayer#overview'> Github </a>", 
    "", 
    null, 
    [
        "Android Native app written in Kotlin. The app plays local files from the user's phone.",
        "This app is unique to other apps because I masterfully implement gestures to create the perfect user experience.",
    ]
)



// #######################################################
// ################        SCRAPER     ####################
// #######################################################
const descScraper =["Transcribes about 100 hours of videos to text daily.",
    "Uses <a href='https://github.com/Vaibhavs10/insanely-fast-whisper'> Insanely Fast Whisper </a>, an ultra fast version of <a href='https://github.com/openai/whisper'> OpenAI's Whisper </a>.",
    "Runs docker images daily in AWS. Primarily uses ECS, ECR, Lambda, the GPU cloud provider <a href='https://vast.ai'> vast.ai </a>, and managed with Terraform. Written in Python and some NodeJS."]
const projScraper = new Job(
    "Name: Transcriber app", 
    "Personal project - <a href='https://github.com/Brodski/scraper-dl-vids'> Github</a>", 
    "", 
    null, 
    descScraper
)


// #######################################################
// ###############        VFO        #####################
// #######################################################
const projVFO = new Job(
    "Name: Video Feed Organizer (VFO)", 
    "Personal project - <a href='https://vfo.one'> https://vfo.one </a>", 
    "", 
    null, 
    [
        "A single-page web application that communicates to Youtube's REST API for profile customization.", 
        'Frontend was built using React, Javascript, SASS and Materialize CSS framework', 
        "Backend is a Java Springboot server and a MongoDB database.",
    ]
)




// #######################################################
// ################   Mouse & Video   ####################
// #######################################################
const projMV = new Job(
    "Name: Bski Control Video with Mouse", 
    "Personal project - Mozilla Addons: <a href='https://addons.mozilla.org/en-US/firefox/addon/bski-control-video-with-mouse'> https://addons.mozilla.org/en-US/firefox/addon/bski-control-video-with-mouse </a>", 
    "", 
    null, 
    [
        'Browser extension for Firefox and Chrome', 
        "A fork from another extension that gives users more control over videos in the browser.",
        "The extension adds Event Listeners to maniuplate the video element's API.",
    ]
)

// #######################################################
// ################        RESUME     ####################
// #######################################################
const descResume =["This résumé is made with NodeJS & EJS. Hosted on AWS Lambda.",]
const projResume = new Job(
    "Name: Resume", 
    "<a href='https://resume.bski.one'> https://resume.bski.one </a>", 
    "", 
    null, 
    descResume
)

// #######################################################
// ################        GITHUB     ####################
// #######################################################
const projGit = new Job(
    "Github", 
    "<a href='https://github.com/Brodski'> https://github.com/Brodski </a>", 
    "", 
    null, 
    ["More projects.",]
)







const Jobs = [jobPing, jobCharter]
// const Projects = [projScraper, projAndriod, projVFO, projMV, projResume, projGit ]
const Projects = [projScraper, projAndriod, projVFO, projResume, projGit ]
module.exports = { Jobs, Projects };

