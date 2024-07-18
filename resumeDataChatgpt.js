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
            "Using Adobe's content management system, AEM, I work on the foundatinal framework  \
                that empowers team members to quickly design, publish and modify web content on the companies main website.",
            "I have a comprehensive understanding of the technologies and methodologies \
                essential for constructing and maintaining a robust, scalable web presence at: \
                <a target='_blank' href='https://www.pingidentity.com' rel='noopener'> www.pingidentity.com. </a>",
            'Frontend work: building web components for content and design teams, enabling static \
                and dynamic page functionalities across the website. Advanced in \
                JavaScript, HTML, and CSS to produce an optimal web experience.',
            `Backend work: building APIs using Java servlets for client-side and server-side rendering, ensuring \
                seamless interaction and data exchange. Automatingjobs for content crawling, \
                edits, and general page maintenance. Experienced with thread management for asynchronous operations.`,
            `Cloud computing work: Wrote Lambda Functions, developed Terraform configurations, and established the \
                accompanying GitLab-CI pipelines.\
                Occasional work with our Cloudfront CDN, tweaking configuration or adding new behaviors.`,
            'Reworked the website that ultimately improved customer interation by 61%.',
            'Collaborate with designers, marketing, SEO, and content teams, ensuring alignment to meet and exceed business objectives.', 
            'Provided guidance and support to new employees and interns, facilitating their success, onboarding and integration into the organization.',
        ]
const jobPing = new Job("Java Web Developer", "at Ping Identity", "Sept 2020", "June 2024", descPing)



// #######################################################
// ############        CHARTER COMMS       ###############
// #######################################################
const descCharter  = [
                "As part of a DevOps/SRE team, I contributed to deployment processes and quality assurance, \
                    leveraging Linux VMs on our cloud computing virtualization platform, VSphere, on a daily basis ",
                'Contributed to the development of a Flask/Python-based proxy server to streamline traffic \
                    and facilitate data retrieval from a MongoDB database.',
                "Developed a Python-based testing tool for quality assurance on a DHCP server cluster, utilizing \
                    the hypervisor's API for precise control over both worker and master virtual machines during stress testing.",
                "Deployed docker apps, running Telegraf, to gather metrics from the VMs running the DHCP servers. \
                    It channeled data into our Splunk server for real-time data analysis. I also created a dashboard to visualize and examine the data.",
                "Help build a new test environment for an existing project in AWS by redeploying that project at a scaled \
                    down cluster size. This involved researching company documents and working with the team that managed \
                    that project; editing configuration files like Terraform, then executing the deployment."
         
                ]
const jobCharter = new Job("Platform Infrastructure Integration / Automation Engineer", "at Charter Communications", "Dec 2018", "Oct 2019", descCharter )






// #######################################################
// ############      Bski Min Play      ##################
// #######################################################
const projAndriod = new Job(
    "Name: Brodski Minimalist Music Player With Swipe & Touch", 
    // "Personal project - Google Play Store: <a href='play.google.com/store/apps/details?id=com.bskimusicplayer.mediaplayer'> play.google.com/store/apps/details?id=com.bskimusicplayer.mediaplayer </a>", 
    "Personal project - Google Play Store: play.google.com/store/apps/details?id=com.bskimusicplayer.mediaplayer", 
    "", 
    null, 
    [
        "Android Native app written in Kotlin. The app plays local files from the user's phone.",
        "This app is unique to other apps because I masterfully implement gestures to create the perfect user experience.",
    ]
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
        "A single-page web application that communicates to Youtube's REST API, allowing customization for the user and their Youtube profile.", 
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
// ################        GITHUB     ####################
// #######################################################
const projGit = new Job(
    "Github", 
    "<a href='https://github.com/Brodski'> https://github.com/Brodski </a>", 
    "", 
    null, 
    ["More projects. Some unfinished. Some unimpressive.",]
)







const Jobs_chatgpt = [jobPing, jobCharter]
const Projects_chatgpt = [projAndriod, projVFO,  projMV, projGit ]
module.exports = { Jobs_chatgpt, Projects_chatgpt };

