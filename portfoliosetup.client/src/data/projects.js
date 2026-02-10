import AIFast from "./images/AIFast.png";
import FastTrackerIntro from "./images/FastTrackerIntro.png";
import Menu from "./images/Menu.png";
import Phone from "./images/Phone.png";
import Recommend from "./images/Recommend.png";
import Recommend2 from "./images/Recommend2.png";
import Track from "./images/Track.png";

const projectsData = [
    {
        title: { en: "Spectre Kickboxing", sv: "Spectre Kickboxning" },
        repo: "https://github.com/marsimjob/SpectreKickBox",
        description: {
            en: "Backend system scaffolded with SQL database and clean architecture.",
            sv: "Backend-system byggt med SQL-databas och ren arkitektur.",
        },
        details: {
            en: "A robust martial arts management system focusing on membership tracking and class scheduling using Clean Architecture principles.",
            sv: "Ett robust kampsportshanteringssystem med fokus p\u00E5 medlemsuppf\u00F6ljning och schemaplanering med Clean Architecture-principer.",
        },
        images: [],
        highlights: ["SQL Database", "Clean Architecture", "ASP.NET Core", "Backend API"],
        languages: ["C#", "TSQL"],
        tools: ["ASP.NET Core", "SQL Server", "Clean Architecture"],
    },
    {
        title: { en: "Fast Tracker", sv: "Fast Tracker" },
        repo: "https://github.com/marsimjob/FastTracker",
        description: {
            en: "Application with authentication, login verification, and AI integration.",
            sv: "Applikation med autentisering, inloggningsverifiering och AI-integration.",
        },
        details: {
            en: "A high-performance tracking tool featuring secure JWT-based authentication and OpenAI-powered data analysis for user insights.",
            sv: "Ett h\u00F6gpresterande sp\u00E5rningsverktyg med s\u00E4ker JWT-baserad autentisering och OpenAI-driven dataanalys f\u00F6r anv\u00E4ndarinsikter.",
        },
        images: [FastTrackerIntro, Phone, Menu, AIFast, Recommend, Recommend2, Track],
        highlights: ["2-Step Verification", "JWT Authentication", "AI Integration", "Secure API"],
        languages: ["C#"],
        tools: ["React", "Node.js", "JWT", "OpenAI API"],
    },
    {
        title: { en: "Backend Basketball 2025", sv: "Backend Basket 2025" },
        repo: "https://github.com/marsimjob/BackEndBasketBall2025",
        description: {
            en: "Advanced backend logic, data manipulation, and domain modelling.",
            sv: "Avancerad backend-logik, datamanipulering och dom\u00E4nmodellering.",
        },
        details: {
            en: "Complex sports statistics engine utilizing LINQ and JSON data parsing for real-time data processing and domain-driven design.",
            sv: "Komplex sportstatistikmotor som anv\u00E4nder LINQ och JSON-dataparsning f\u00F6r realtidsdatabehandling och dom\u00E4ndriven design.",
        },
        images: [],
        highlights: ["LINQ", "Complex Backend Logic", "JSON Parsing", "Data Manipulation"],
        languages: ["C#"],
        tools: ["JSON", "LINQ", "DDD"],
    },
    {
        title: { en: "Job Tracker", sv: "Jobbsp\u00E5rare" },
        repo: "https://github.com/marsimjob/JobbApplicationTracker",
        description: {
            en: "Backend system for tracking job applications with filtering.",
            sv: "Backend-system f\u00F6r att sp\u00E5ra jobbans\u00F6kningar med filtrering.",
        },
        details: {
            en: "A productivity tool for job seekers, featuring advanced filtering systems and a PostgreSQL backend for reliable data persistence.",
            sv: "Ett produktivitetsverktyg f\u00F6r arbetss\u00F6kande med avancerade filtreringssystem och en PostgreSQL-backend f\u00F6r tillf\u00F6rlitlig datalagring.",
        },
        images: [],
        highlights: ["Filtering", "LINQ", "Backend Logic", "CRUD"],
        languages: ["C#"],
        tools: ["ASP.NET", "PostgreSQL", "REST API"],
    },
];

export function getProjects(lang) {
    return projectsData.map((p) => ({
        ...p,
        title: p.title[lang] || p.title.en,
        description: p.description[lang] || p.description.en,
        details: p.details[lang] || p.details.en,
    }));
}
