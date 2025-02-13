
<!-- https://dillinger.io/  -->
<!-- https://dillinger.io/  -->
<!-- https://dillinger.io/  -->

## Christopher Brodski
###### Full-stack developer with 5 years of experience, specializing in backend development and cloud infrastructure using Java, Python, and AWS to build scalable systems.
- Email: cbrodski@gmail.com
- GitHub: [github.com/Brodski](https://github.com/Brodski)
- LinkedIn: [linkedin.com/in/christopher-brodski](https://www.linkedin.com/in/christopher-brodski)
---

**EDUCATION**
- **B.S. Computer Science**
  - Metropolitan State University of Denver
- **B.S. Applied Mathematics**
  - University of Colorado Denver
- **AWS Certified Cloud Practitioner**
  - Acquired: July 2024 
  - Credly badge https://www.credly.com/badges/6dca7d30-79c0-4e74-8396-35c2db85ffc9/public_url

---

**SKILLS**
- **Languages**
  - **Advanced:** Java, Python, Javascript / NodeJS
  - **Highly Proficient:** Kotlin, C#
- **Backend**
  - REST API, Java Servlets / Spring Boot, NodeJS
- **Frontend**
  - **Client-Side:** React, HTML / CSS / JavaScript, Browser Extensions
  - **Server-Side:** NodeJS, EJS, Java Server Pages (JSP)
  - **Dev-Tools:** Gulp.js, Webpack, yarn, npm, SASS, ESLint, Bootstrap
- **Database / Storage**
  - S3, SQL, MongoDB
- **Cloud Computing (AWS)**
  - S3, Lambda, API Gateway, CloudFront, Route 53, IAM, CloudWatch, Elastic Beanstalk
- **Dev Ops**
  - **Skilled:** Docker, Terraform
  - **Experienced:** Microservices, Kubernetes, Jenkins
- **Linux Networking**
  - nslookup, dig, ifconfig, netstat, traceroute, curl, vim, awk, grep
---

**WORK HISTORY**
**Senior Java Web Developer**, at Ping Identity
*Sept 2020 - June 2024*
  - **Overview:** 
    - Develop Adobe Experience Manager (AEM) components, templates, and backend services to support a scalable, high-performance web presence at Ping Identity (www.pingidentity.com). Extend AEM capabilities by integrating AWS services like Lambda to enhance backend functionality.
  - **Cloud infrastructure work:**
    - Built endpoints critical to system functionality that operated without failure since deployment. Accomplished this by deploying AWS Lambda endpoints using Terraform and Node.js.
    - Migrated endpoints off of our current cloud service Adobe to AWS instead; designing and implementing the architecture, pipeline, and IaC tool from start to finish. Independently built AWS Lambda functions, API Gateways, and an accompanying GitLab CI/CD pipeline.
    - Dockerized applications for deployment in our cloud environments, Adobe and AWS.
  - **Backend work:** 
    - Built APIs using Java servlets to dynamically generate HTML pages/fragments and database interactions via SQL, enabling seamless content rendering and data exchange. Developed automated jobs for content crawling, bulk edits, data validation, and system monitoring.
    - Wrote and designed services that used LLMs (via OpenAI's API) to personalize website content for users. Implemented request batching, response caching, and fallback handling to ensure efficient API usage and content reliability.
    - Experience with Java threading and asynchronous workflows (thread pools, futures). 
    - Experience with Maven build configurations, including lifecycles, module dependency management, and debugging maven dependencies conflicts.
  - **Frontend work:** 
    - Developed modular, reusable UI components with React and JSP for enterprise applications, supporting dynamic content rendering, localization, and API-driven interactions.
    - Frequent updates to frontend development workflow by configuring CI/CD pipelines, automating testing, and optimizing builds with Webpack and Gulp.js.
    - Working knowledge of asset optimization, cache busting (CDN & client-side), Google Tag Manager, preloading strategies, service workers, accessiblity, and performance profiling.
  - **Soft skills** Mentored new employees and interns, facilitating their success, providing technical guidance onboarding and integration into the organization.

**Platform Infrastructure Integration / Automation Engineer**, at Charter Communications
*Dec 2018 - Oct 2019*
  - **Overview:**
    - Part of a DevOps/SRE team, contributing to deployment processes and quality assurance.
  - **Job Duties:**
    - Routinely accessed virtual machines (VMs) via SSH to execute and develop various scripts. Used command-line tools to navigate the internal file system of the VMs to locate log files, view, filter, and analyze logs for troubleshooting and performance monitoring.
    - Developed a Flask/Python-based proxy server to streamline traffic and facilitate data retrieval from a MongoDB database. Added frontend framework with React. 
    - Wrote a Python-based testing tool for quality assurance on a DHCP server cluster, utilizing the hypervisor's API for precise control over both worker and master virtual machines during stress testing.
    - Deployed docker apps, running Telegraf, to gather metrics from the VMs running the DHCP servers. It streamed data into our Splunk server for real-time data analysis. I also created a Splunk dashboard to visualize and examine the data.
    - Helped build a new test environment for an existing project in AWS by redeploying that project at a scaled-down cluster size. This involved researching company documents and working with the team that managed that project; editing configuration files like Terraform, then executing the deployment. 
---

**PROJECTS**

- **Transcriber app**
  - Transcribes about 100 hours of videos to text daily.
  - Uses [Insanely Fast Whisper](https://github.com/Vaibhavs10/insanely-fast-whisper), an ultra fast version of [OpenAI's Whisper](https://github.com/openai/whisper).
  - Runs docker images daily in AWS. Primarily uses ECS, ECR, Lambda, the GPU cloud provider [vast.ai](https://vast.ai/), and managed with Terraform. Written in Python and some NodeJS.
  - [Github repo](https://github.com/Brodski/scraper-dl-vids) 

- **Brodski Minimalist Music Player With Swipe & Touch**
  - Android Native app written in Kotlin. The app plays local files from the user's phone, available on Google Play Store.
  - This app is unique to other apps because I masterfully implement gestures to create the perfect user experience.
  <!-- - ~~[Google Play Store Link](https://play.google.com/store/apps/details?id=com.bskimusicplayer.mediaplayer)~~  -->
  - [Github repo](https://github.com/Brodski/MediaPlayer#overview) 

- **Video Feed Organizer (VFO)**
  - Single-page web application that communicates to Youtube's REST API for profile customization.
  - Frontend was built using React, Javascript, SASS and Materialize CSS framework.
  - Backend is a Java Springboot server and a MongoDB database.
  - [https://vfo.one](https://vfo.one)

- **Bski Control Video with Mouse**
  - Browser extension for Firefox and Chrome
  - A fork from another extension that gives users more control over videos in the browser.
  - [Mozilla Addons Link](https://addons.mozilla.org/en-US/firefox/addon/bski-control-video-with-mouse)

For more projects, visit my GitHub: [https://github.com/Brodski](https://github.com/Brodski)
