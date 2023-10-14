import React from 'react';

import { FaJava, FaJs, FaReact, FaAngular, FaVuejs, FaNodeJs, FaNode, FaHtml5, FaCss3Alt, FaFlask, FaAws, FaDatabase, FaGit, FaGithub, FaCodeBranch, FaLeaf, FaCheckCircle, FaDocker, FaBrain, FaJira } from "react-icons/fa";
import { TiCss3 } from 'react-icons/ti';
import { SiRuby, SiRedux } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { IoSearchSharp } from 'react-icons/io5';
import { SiGnubash } from 'react-icons/si';

export const skills=[
  {name:"AWS",icon:<FaAws/>},
  {name:"Java",icon:<FaJava/>},
  {name:"Ruby", icon: <SiRuby/>},
  {name:"JavaScript",icon:<FaJs/>},
  {name:"ReactJS",icon:<FaReact/>},
  {name:"Angular",icon:<FaAngular/>},
  {name:"Vue.js", icon:<FaVuejs/>},
  {name:"NodeJS",icon:<FaNodeJs/>},
  {name:"Express JS",icon:<FaNode/>},
  {name:"Redux", icon: <SiRedux />},
  {name:"Ruby on Rails", icon: <DiRuby/>},
  {name:"Flask",icon:<FaFlask/>},
  {name:"HTML",icon:<FaHtml5/>},
  {name:"CSS",icon:<FaCss3Alt/>},
  {name:"Tailwind CSS",icon:<TiCss3/>},
  {name:"MongoDB", icon: <FaDatabase/>},
  {name:"MySQL",icon:<FaDatabase/>},
  {name:"SQL",icon:<FaDatabase/>},
  {name:"Bash", icon: <SiGnubash/>},
  {name:"Git",icon:<FaGit/>},
  {name:"GitHub",icon:<FaGithub/>},
  {name:"Perforce P4V",icon:<FaCodeBranch/>},
  {name:"Elasticsearch", icon: <IoSearchSharp/>},
  {name:"ReactNative",icon:<FaReact/>},
  {name:"Spring",icon:<FaLeaf/>},
  {name:"Spring Boot",icon:<FaLeaf/>},
  {name:"Selenium Automation",icon:<FaCheckCircle/>},
  {name:"Docker",icon:<FaDocker/>},
  {name:"Jira",icon:<FaJira/>},
  {name:"Problem Solving",icon:<FaBrain/>}
];

export const projects = [
  {
    title: "Adopt-a-Pet",
    subtitle: "React, Node and Express",
    description: "A portal to adopt pets. Each animal has a profile page with its attributes.",
    image: "./Adopt-a-Pet.gif",
    link: "https://github.com/vishnusaibhosekar/adopt-a-pet",
  },
  {
    title: "Notes App Using ReactJS and Firebase",
    subtitle: "React and Firebase",
    description: "A notes app to save notes, make to-do lists. User has to login using a Google Account.",
    image: "./Notes-React-App.gif",
    link: "https://github.com/vishnusaibhosekar/NotesReactApp",
  },
  {
    title: "ChatRoom App",
    subtitle: "NodeJS and WebSockets",
    description: "A chatting application where multiple users can chat in a chatroom. There is not limit to how many users can join.",
    image: "./ChatRoom.png",
    link: "https://github.com/vishnusaibhosekar/ChatRoom",
  },
  {
    title: "E-Commerce Website",
    subtitle: "Python, Flask, HTML, CSS, Bootstrap, MySQL",
    description: "A website to buy and sell products. Users can add products to cart, checkout and pay. Admins can add, edit and delete products.",
    image: "./Shop.jpeg",
    link: "https://github.com/vishnusaibhosekar/IS601-005/tree/main/VShop",
  },
];

export const certifications = [
  {
    link: "https://www.credly.com/badges/918d8fb8-81fa-4fae-8d79-76d3328eb053/public_url",
    image: "./AWS-Certified-Developer-Associate_badge.png",
    name: "Developer Associate",
    company: "AWS",
    passed: true
  },
  {
    link: "https://www.credly.com/badges/918d8fb8-81fa-4fae-8d79-76d3328eb053/public_url",
    image: "./AWS-Certified-Cloud-Practitioner_badge.png",
    name: "Cloud Practitioner",
    company: "AWS",
    passed: true
  },
  {
    link: "https://www.linkedin.com/learning/certificates/9c06ae57dbaf06e58d8997c6cbe42f3bad8e72074196b74ab35795a5f13ce987?accountId=36051636&u=36051636&success=true&authUUID=S0cCdoz%2BSwOjAPaO3d1ksQ%3D%3D",
    image: "./linkedin.jpg",
    name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    company: "Microsoft & LinkedIn",
    passed: true
  },
  {
    link: "https://www.hackerrank.com/certificates/3d0568f11563",
    image: "./hackerrank.png",
    name: "Problem Solving (Intermediate) Certificate",
    company: "HackerRank",
    passed: true
  },
  {
    link: "https://www.udemy.com/certificate/UC-5707efd7-dc28-4222-9245-779ae8605698/",
    image: "./udemy.png",
    name: "Ultimate AWS Certified Cloud Practitioner - 2023",
    company: "Udemy",
    passed: true
  }
];