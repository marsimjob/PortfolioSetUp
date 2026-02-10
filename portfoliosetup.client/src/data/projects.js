import AIFast from "./images/AIFast.png";
import FastTrackerIntro from "./images/FastTrackerIntro.png";
import Menu from "./images/Menu.png";
import Phone from "./images/Phone.png";
import Recommend from "./images/Recommend.png";
import Recommend2 from "./images/Recommend2.png";
import Track from "./images/Track.png";

export const projects = [
    {
        title: "Spectre Kickboxing",
        repo: "https://github.com/marsimjob/SpectreKickBox",
        description: "Backend system scaffolded with SQL database and clean architecture.",
        details: "A robust martial arts management system focusing on membership tracking and class scheduling using Clean Architecture principles.",
        images: [],
        highlights: ["SQL Database", "Clean Architecture", "ASP.NET Core", "Backend API"],
        languages: ["C#", "TSQL"],
        tools: ["ASP.NET Core", "SQL Server", "Clean Architecture"],
    },
    {
        title: "Fast Tracker",
        repo: "https://github.com/marsimjob/FastTracker",
        description: "Application with authentication, login verification, and AI integration.",
        details: "A high-performance tracking tool featuring secure JWT-based authentication and OpenAI-powered data analysis for user insights.",
        images: [FastTrackerIntro, Phone, Menu, AIFast, Recommend, Recommend2, Track],
        highlights: ["2-Step Verification", "JWT Authentication", "AI Integration", "Secure API"],
        languages: ["C#"],
        tools: ["React", "Node.js", "JWT", "OpenAI API"],
    },
    {
        title: "Backend Basketball 2025",
        repo: "https://github.com/marsimjob/BackEndBasketBall2025",
        description: "Advanced backend logic, data manipulation, and domain modelling.",
        details: "Complex sports statistics engine utilizing LINQ and JSON data parsing for real-time data processing and domain-driven design.",
        images: [],
        highlights: ["LINQ", "Complex Backend Logic", "JSON Parsing", "Data Manipulation"],
        languages: ["C#"],
        tools: ["JSON", "LINQ", "DDD"],
    },
    {
        title: "Job Tracker",
        repo: "https://github.com/marsimjob/JobbApplicationTracker",
        description: "Backend system for tracking job applications with filtering.",
        details: "A productivity tool for job seekers, featuring advanced filtering systems and a PostgreSQL backend for reliable data persistence.",
        images: [], 
        highlights: ["Filtering", "LINQ", "Backend Logic", "CRUD"],
        languages: ["C#"],
        tools: ["ASP.NET", "PostgreSQL", "REST API"],
    }
];