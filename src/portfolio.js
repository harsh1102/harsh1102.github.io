/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Harsh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Harsh Muniwala Portfolio",
    type: "website",
    url: "http://harsh1102.github.io.com/",
  },
};

//Home Page
const greeting = {
  title: "Harsh Muniwala",
  logo_name: "HarshMuniwala",
  subTitle:
  "Results-driven and detail-oriented Site Reliability Engineer with 3 years of experience in enhancing system security, optimizing costs, and streamlining processes",
  resumeLink:
    "https://drive.google.com/file/d/15IbHAKBd8aFFZAOSr4pNsDu7-m_EuAMP/view?usp=share_link",
  portfolio_repository: "",
  githubProfile: "https://github.com/harsh1102",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/harsh1102",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harsh1102/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:harshmuniwala33@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "ML & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Texas at Arlington",
      subtitle: "M.S. in Computer Science",
      logo_path: "utalogo.png",
      alt_name: "University of Texas at Arlington",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Software Development and Database Managment with Cloud Technology etc.",
        "⚡ Apart from this, I have also done serverl projects. As part of it, I have worked on creating new Andorid Application as well as Web Applications.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.uta.edu/",
    },
    {
      title: "Uka Tarsadia University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "cgpitlogo.png",
      alt_name: "Uka Tarsadia University",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://utu.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Terraform Associate",
      subtitle: "HashiCorp",
      logo_path: "hashicorplogo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "HashiCorp",
      color_code: "#8C151599",
    },
    {
      title: "Solutions Architect Associate",
      subtitle: "Amazon Web Service ",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "Amazon Web Service",
      color_code: "#00000099",
    },
    {
      title: "Architect Associate",
      subtitle: "Oracle Cloud Infrastructure",
      logo_path: "ocilogo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Oracle Cloud Infrastructure ",
      color_code: "#ffffff",
    },
    {
      title: "Associate Cloud Engineer ",
      subtitle: "Google Cloud ",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google Cloud ",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Results-driven and detail-oriented Site Reliability Engineer with 3 years of experience in enhancing system security, optimizing costs, and streamlining processes. Proven expertise in cloud technologies, infrastructure automation, and a strong command of tools such as Jenkins, Ansible, and Terraform.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Acxiom",
          company_url: "https://www.acxiom.com",
          logo_path: "acxiomlogo.png",
          duration: "September 2023 - Present",
          location: "Arkansas, United States",
          description:
            "• Developed Jenkins pipeline, migrating 420+ jobs and credentials from development to production using Groovy and Python \
            •  ImplementedarobustautomationscriptfacilitatingtheconversionoffreestylejobsintoJenkinsPipelines,successfullymigrating \
               60% of jobs and establishing a seamless integration with GitHub for enhanced efficiency and collaboration \
            •  Streamlined Docker orchestration process, replacing standalone host usage and resulting in 10x faster runtime \
            •  Conducted extensive security assessments on the AWS Vulnerability report, meticulously performing over 100 fundamental \
               checks, significantly strengthening system security by a notable 20% \n \
            • Led diverse tech stack investigations to proactively address reliability and performance issues, yielding a 10% improvement",
          color: "#0879bf",
        },
        {
          title: "Cloud Developer",
          company: "CloudCover",
          company_url: "https://cldcvr.com",
          logo_path: "cldcvrlogo.png",
          duration: "September 2021 - July 2022",
          location: "Pune, India",
          description:
            "Demonstrated expertise by ensuring an impressive 99.99% uptime through ownership of operational issues, proactive development of preventive measures, and thorough root cause analysis of defects \
            • Resolved issues for over 190 customer Kubernetes architectures on Rancher, providing effective and practical solutions \
            • Guidedcustomerstowardscost-optimizedsolutions,resultinginasubstantial85%reductioninAWSandGCParchitecturecosts,\
            showcasing a strong commitment to efficiency and financial optimization",
          color: "#9b1578",
        },
        {
          title: "Infrastructure Automation Engineer",
          company: "Resilinc Solution Pvt. Ltd.",
          company_url: "https://resilinc.com",
          logo_path: "resilinclogo.jpg",
          duration: "November 2019 - August 2021",
          location: "Pune, India",
          description:
            "Modernized 95% of ongoing tasks for development teams by establishing virtual environments using Bash and Python \
            • Spearheaded the automation of production replica orchestration using Terraform and Ansible, resulting in a remarkable 90% \
            reduction in manpower and significantly improving deployment efficiency and consistency \
            • Enhanced High Availability (HA) architecture on AWS, employing a diverse arsenal of tools to guarantee a steadfast 99.99% \
            availability and scalability, thus solidifying the infrastructure against potential disruptions",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Cloud Engineer Intern",
          company: "PetaBytz Technologies",
          company_url: "https://petabytz.com",
          logo_path: "pblogo",
          duration: "June 2019 - November 2019",
          location: "Pune, India",
          description:
            "Operated 5 web development projects and web hosting with comfort of WordPress, PHP, Python, and MySQL. Hosted website on cloud based deployment such as AWS. \
             Assessed on latest GCP services such as Anthos and furnished solution to improve work efficiency by 30%. Controlled 50 Windows and Linux servers on cloud as well as on-premises.",
          color: "#000000",
        },
        {
          title: "Web Developer Intern",
          company: "Om Infotech.",
          company_url: "https://www.ominfotechnologies.com",
          logo_path: "omilogo.jpeg",
          duration: "December 2018 - May 2019",
          location: "Gujarat, India",
          description:
            "Developed an e-commerce website for an online clothing store using Node.js and Express for the backend, MongoDB for database management, Angular for frontend development, and PHP for server-side scripting, ensuring scalability to handle more than 10,000 requests per day.",
          color: "#ee3c26",
        },
        {
          title: "Android Developer Intern",
          company: "Cursor Soft Pvt. Ltd.",
          company_url:"http://www.cursor-soft.com/Default.aspx",
          logo_path: "cslogo.png",
          duration: "May 2018 - July 2018",
          location: "Gujarat, India",
          description:
            "Worked on Android application development utilizing ASP.NET for API development, MySQL Server for database management, and Java for Android app development. Implemented MySQL procedures to optimize database operations, ensuring efficient handling of data within the application.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Jury Member",
          company: "Uka Tarsadia University",
          company_url: "https://utu.ac.in",
          logo_path: "ukalogo.png",
          duration: "October 2020 - October 2020",
          location: "Gujarat, India",
          description:
            "Evaluated and guided the participating team in the capacity of a jury member in a National Level Virtual Hackathon, providing constructive feedback and mentoring to foster innovation and excellence.",
          color: "#4285F4",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web developments projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hm-3.png",
    link: "https://drive.google.com/file/d/15IbHAKBd8aFFZAOSr4pNsDu7-m_EuAMP/view?usp=share_link",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://www.linkedin.com/in/harsh1102/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "302 Apt, 419, Summit Ave, Arlington, Texas, United States-76013",
    locality: "Arlington",
    country: "US",
    region: "Texas",
    postalCode: "76013",
    streetAddress: "410, Summit Ave",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/EBE25jhYUefXyUb88",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
