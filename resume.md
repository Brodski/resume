
<!-- https://dillinger.io/  -->
<!-- https://dillinger.io/  -->
<!-- https://dillinger.io/  -->

## Christopher Brodski
- Email: cbrodski@gmail.com
<!-- - Location: Denver, CO -->
- GitHub: [github.com/Brodski](https://github.com/Brodski)
<!-- - Resume *(fancy)*: [resume.bski.one](https://resume.bski.one) -->
- [LinkedIn] (https://www.linkedin.com/in/christopher-brodski)

---

**EDUCATION**

- **B.S. Computer Science**
  - Metropolitan State University of Denver

- **B.S. Applied Mathematics**
  - University of Colorado Denver

---
  
**CERTIFICATES**

- **AWS Certified Cloud Practitioner**
  - Acquired: July 2024
  - [Credly badge](https://www.credly.com/badges/6dca7d30-79c0-4e74-8396-35c2db85ffc9/public_url)

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

- **Database / Storage**
  - S3, SQL, MongoDB

- **Cloud Computing (AWS)**
  - S3, Lambda, API Gateway, CloudFront, Route 53, IAM, CloudWatch, Elastic Beanstalk

- **Dev Ops**
  - **Skilled:** Docker, Terraform
  - **Experienced:** Microservices, Kubernetes, Jenkins

- **Linux Networking**
  - nslookup / dig, ifconfig, netstat, traceroute, curl, vim / awk / grep

---

**WORK HISTORY**

- **Senior Java Web Developer**, at Ping Identity
*Sept 2020 - June 2024*
  - Use Adobe's content management system, AEM, to provide the structure for team members to quickly design, publish and modify web content on the company's main website. Well-versed with the technologies for constructing and maintaining a robust, scalable web presence at: www.pingidentity.com.
  - Cloud computing work: Independently built AWS Lambda Functions, AWS Api Gateways, CloudWatch services, and updated our Cloudfront CDN, along with an accompanying GitLab-CI pipeline, in an effort to migrate endpoints from our CMS to AWS. I held responsibility for the architecture, pipeline, IaC tool, and built it all from start to finish.
  - Wrote the Terraform configurations for the services and wrote the NodeJS code of the Lambda Functions for the migrated endpoint. There have not been any records of them failing since they were built. These endpoints are vital and cannot fail.
  - Dockerized applications for deployment in our cloud environments, Adobe and AWS.
  - Backend work: built APIs using Java servlets for client-side and server-side rendering, ensuring seamless interaction and data exchange. Automated jobs for content crawling, edits, and general page maintenance. Experienced with thread management for asynchronous operations.
  - Wrote and designed components that used LLMs (via OpenAI's API) to customize website content towards users. It was 
  semi-automated, allowing the content team to trigger content customization with a single click.
  - Frontend work: built web components for content and design teams, enabling static and dynamic page functionalities across the website.
  <!-- - Reworked the website that ultimately improved customer interaction by 61%. -->
  <!-- - Collaborate with designers, marketing, SEO, and content teams, ensuring alignment to meet and exceed business objectives. -->
  - Provided guidance and support to new employees and interns, facilitating their success, onboarding and integration into the organization.
  - Began as an Associate Developer, ended as Senior Developer.

- **Platform Infrastructure Integration / Automation Engineer**, at Charter Communications
*Dec 2018 - Oct 2019*
  - Part of a DevOps/SRE team, contributing to deployment processes and quality assurance.
  - Routinely accessed virtual machines (VMs) via SSH to execute and develop various scripts. Used command-line tools to navigate the internal file system of the VMs to locate log files, view, filter, and analyze logs for troubleshooting and performance monitoring.
  - Developed a Flask/Python-based proxy server to streamline traffic and facilitate data retrieval from a MongoDB database.
  - Wrote a Python-based testing tool for quality assurance on a DHCP server cluster, utilizing the hypervisor's API for precise control over both worker and master virtual machines during stress testing.
  - Deployed docker apps, running Telegraf, to gather metrics from the VMs running the DHCP servers. It streamed data into our Splunk server for real-time data analysis. I also created a Splunk dashboard to visualize and examine the data.
  - Helped build a new test environment for an existing project in AWS by redeploying that project at a scaled-down cluster size. This involved researching company documents and working with the team that managed that project; editing configuration files like Terraform, then executing the deployment.
  - Built frontend framework with React and Redux
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
