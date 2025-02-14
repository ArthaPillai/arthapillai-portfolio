/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Artha Pillai",
  title: "Hi all, I'm Artha",
  subTitle: emoji(
    "A data-driven Business Intelligence & Data Analyst 💡 with a strong passion for transforming complex data into actionable insights. I specialize in utilizing tools like Python, R, SQL, Power BI,and Tableau. Let’s explore how I can help you turn your data challenges into opportunities!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "arthapillai2000@gmail.com",
  linkedin: "https://www.linkedin.com/in/artha-pillai/",
  github: "https://github.com/ArthaPillai",
  medium: "https://medium.com/@arthapillai2000",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "DRIVEN DATA STORYTELLER ON A QUEST TO UNLOCK HIDDEN NARRATIVES BEHIND THE NUMBERS",
  skills: [
    emoji(
      "⚡ Transform raw data into engaging stories that drive strategic decisions"
    ),
    emoji(
      "⚡ Blend diverse datasets to spotlight game-changing insights that spark innovation"
    ),
    emoji(
      "⚡ Craft visually compelling dashboards and reports that bring data to life"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Power-Bi",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Qlik Sense",
      fontAwesomeClassname: "fas fa-q"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/neulogo.png"),
      subHeader: "Master of Professional Studies in Analytics",
      duration: "September 2022 - August 2024"
    },
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/mumbaiuniversitylogo.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "August 2019 - May 2022"
    },
    {
      schoolName: "Maharashtra State Board of Technical Education",
      logo: require("./assets/images/msbtelogo.png"),
      subHeader: "Technical Diploma in Computer Engineering",
      duration: "August 2016 - June 2019"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis & Reporting", // Core skill in analyzing and interpreting data
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Visualization", // Ability to create compelling visualizations and dashboards
      progressPercentage: "90%"
    },
    {
      Stack: "SQL & Data Management", // Expertise in managing, querying, and integrating data
      progressPercentage: "90%"
    },
    {
      Stack: "Programming Languages", // Proficiency in Python, R, and other relevant languages
      progressPercentage: "85%"
    },
    {
      Stack: "Machine Learning & Predictive Analytics", // Skill in building predictive models and implementing machine learning algorithms
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst Intern",
      company: "World Justice Project",
      companylogo: require("./assets/images/wjplogo.png"),
      date: "September 2023 – March 2024",
      descBullets: [
        "I contributed to global awareness and policymaking by creating and publishing  comprehensive country reports of USA and North Macedonia with extensive data analysis charts using R and HTML.",
        "My efforts in developing a Python script for sentiment analysis significantly reduced report generation time by automating Excel reports from AWS data.",
        "Additionally, I revolutionized the development of Rule of Law country reports by building a dynamic HTML webpage using Flask, streamlining the process and enhancing efficiency.",
        "My role also involved deploying a Naive Bayes model to classify news articles related to the rule of law, which improved the accuracy and efficiency of the news analysis process."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Aine Ai",
      companylogo: require("./assets/images/aineailogo.jpeg"),
      date: "August 2021 – January 2022",
      descBullets: [ 
        "I played a critical role in analyzing telecom data, developing predictive models and implementing machine learning algorithms.",
        "Also created visually compelling dashboards to provide valuable insights and support data-driven decision-making within the organization."
      ]
    },
    {
      role: "Data Science Intern",
      company: "SIES Graduate School of Technology",
      companylogo: require("./assets/images/sieslogo.png"),
      date: "June 2021 – July 2021",
      descBullets: [ 
        "I applied ML techniques like Neural Networks and Logistic Regression to analyze and classify Quantum Computing data.",
        "Additionally, I leveraged NLP techniques for insights extraction.",
        "My role involved data analysis, interpretation, collaboration, and effective communication of findings to contribute to the overall success of the project."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publications 📰 "),
  subtitle:
    "Data Analysis Websites and and Research Paper publications of mine !",

  achievementsCards: [
    {
      title: "Rule of Law in the United States",
      subtitle:
        "Analyzed U.S. rule-of-law trends and public trust by developing visualizations and reports from a nationally representative survey for the 2024 election.",
      image: require("./assets/images/RoLUSALogo.png"),
      imageAlt: "RoL USA Logo",
      footerLink: [
        {
          name: "Website",
          url: "https://worldjusticeproject.org/our-work/research-and-data/rule-law-united-states"
        }
      ]
    },
    {
      title: "Rule of Law in North Macedonia",
      subtitle:
        "Collaborated on a nationwide survey in North Macedonia, analyzing perceptions of accountability, corruption, and justice with compelling visualizations and reports.",
      image: require("./assets/images/RoLNMLogo.jpg"),
      imageAlt: "RoL NM Logo",
      footerLink: [
        {
          name: "Website",
          url: "https://worldjusticeproject.org/our-work/research-and-data/rule-of-law/north-macedonia-2023"
        }
      ]
    },

    {
      title: "Clinical Healthcare System",
      subtitle: "Enhanced stroke prediction using advanced data mining, feature engineering, and machine learning techniques to significantly reduce false negatives.",
      image: require("./assets/images/CHSLogo.png"),
      imageAlt: "CHS Logo",
      footerLink: [
        {
          name: "Research Paper",
          url: "https://www.ijream.org/IJREAM_V08I02.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Embarking on adventures through the data universe, I unravel tales and share the wisdom gleaned from my analytical escapades.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@arthapillai2000/dashboards-are-dead-the-future-of-data-analytics-and-my-sanity-433ad4732491",
      title:
        "Dashboards Are Dead? The Future of Data Analytics (And My Sanity)",
      description:
        "For years, I’ve been in a love-hate relationship with dashboards. On one hand, they make me feel powerful — like a wizard conjuring up insights with a few clicks. On the other hand, they haunt my dreams. "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
