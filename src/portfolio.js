﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Muhammad Younus",
  title: "Hi all, I'm Younus",
  subTitle: emoji("A Software Developer 🚀 having experience of building Machine Learning Models and Backend applications with Python / scikit-learn / PyTorch / Tensorflow / Keras / Flask / Django and some other cool libraries and frameworks."),
  resumeLink: "https://docs.google.com/document/d/1ahcEv8CZqSz8sPYyDzuttvLyzCjS9sLPdGhGjlpheyM/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/myounus96",
  linkedin: "https://www.linkedin.com/in/myounus96/",
  gmail: "myounus5396@gmail.com",
  facebook: "https://www.facebook.com/myounus006",
  twitter: "https://www.twitter.com/myounus96"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop Machine Learning and Deep Learning Models!"),
    emoji("⚡ Backend Development mostly with Python!"),
    emoji("⚡ Web Scraping with Python!")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "django",
      fontAwesomeClassname: "devicon-django-plain-wordmark colored"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "devicon-mysql-plain-wordmark colored"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "devicon-mongodb-plain-wordmark colored"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Deep Learning(Computer Vision and NLP)",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Building Serverless REST APIs",
      progressPercentage: "70%"
    },
    {
      Stack: "Web Scraping",
      progressPercentage: "90%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "Folio3",
      companylogo: require("./assets/images/folio3Logo.png"),
      date: "Feb 2019 – Present",
      descBullets: [
        "Work as a full stack developer on a web app build using MEAN stack.",
        "Developed a custom object detection solution using Python and YoloV3.",
        "Developed an android app which predicting tags related to images using NLP and CV techniques with deep learning",
      ]
    },
    {
      role: "Python Developer - Remote",  
      company: "Crescent Software Consultants",
      // companylogo: require("./assets/images/None.png"),
      date: "Nov 2018 – Jan 2019",
      desc: "Developed the whole backend of an e-commerce system using Flask, MySQL and MongoDB."
    },
    {
      role: "Web Developer",  
      company: "Gerrys Information Technology",
      companylogo: require("./assets/images/gerrysITLogo.png"),
      date: "Sep 2017 – Mar 2018",
      descBullets: [
        "Developed and customized ERP apps using Odoo.",
        "ASP web pages apps customization.",
      ]
    },
    {
      role: "Web Developer",  
      company: "iTech Resources",
      companylogo: require("./assets/images/itechResourcesLogo.png"),
      date: "Oct 2016 – Jan 2017",
      desc: "Developed and customized ERP apps using Odoo."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "myounus96", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/cyphereye-full-logo.png"),
      link: "https://cyphereye.com/"
    },
    {
      image: require("./assets/images/voicevoiceLogo.png"),
      link: "https://voicevoice.com/"
    },
    {
      image: require("./assets/images/agriBeefLogo.jpg"),
      link: "https://www.agribeef.com/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "myounus96"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
