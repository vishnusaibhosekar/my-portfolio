import React from 'react';

import { FaJava, FaPython, FaJs, FaReact, FaAngular, FaNodeJs, FaNode, FaHtml5, FaCss3Alt, FaFlask, FaAws, FaGoogle, FaDatabase, FaGit, FaGithub, FaCodeBranch, FaNetworkWired, FaLeaf, FaCheckCircle, FaDocker, FaBrain, FaJira } from "react-icons/fa";
import { TiCss3 } from 'react-icons/ti';
import { SiGo, SiRuby, SiKubernetes } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { AiFillApi } from 'react-icons/ai';
import { IoSearchSharp } from 'react-icons/io5';

export const skills=[
  {name:"Java",icon:<FaJava/>},
  {name:"Python",icon:<FaPython/>},
  {name:"ReactJS",icon:<FaReact/>},
  {name:"GoLang", icon: <SiGo/>},
  {name:"Ruby", icon: <SiRuby/>},
  {name:"AWS",icon:<FaAws/>},
  {name:"GCP",icon:<FaGoogle/>},
  {name:"JavaScript",icon:<FaJs/>},
  {name:"Angular",icon:<FaAngular/>},
  {name:"NodeJS",icon:<FaNodeJs/>},
  {name:"Express JS",icon:<FaNode/>},
  {name:"Ruby on Rails", icon: <DiRuby/>},
  {name:"Flask",icon:<FaFlask/>},
  {name:"HTML",icon:<FaHtml5/>},
  {name:"CSS",icon:<FaCss3Alt/>},
  {name:"Tailwind CSS",icon:<TiCss3/>},
  {name:"MongoDB", icon: <FaDatabase/>},
  {name:"MySQL",icon:<FaDatabase/>},
  {name:"SQL",icon:<FaDatabase/>},
  {name:"Git",icon:<FaGit/>},
  {name:"GitHub",icon:<FaGithub/>},
  {name:"Perforce P4V",icon:<FaCodeBranch/>},
  {name:"REST API",icon:<FaNetworkWired/>},
  {name:"GraphQL", icon: <AiFillApi/>},
  {name: "Elasticsearch", icon: <IoSearchSharp/>},
  {name:"Spring",icon:<FaLeaf/>},
  {name:"Spring Boot",icon:<FaLeaf/>},
  {name:"Selenium Automation",icon:<FaCheckCircle/>},
  {name:"Docker",icon:<FaDocker/>},
  { name: "Kubernetes", icon: <SiKubernetes /> },
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
  {image: "./AWS-Certified-Cloud-Practitioner_badge.png", name: "Cloud Practitioner", company: "AWS", passed: false}
];