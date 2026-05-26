import AIFast from "./images/AIFast.png";
import FastTrackerIntro from "./images/FastTrackerIntro.png";
import Menu from "./images/Menu.png";
import Phone from "./images/Phone.png";
import Recommend from "./images/Recommend.png";
import Recommend2 from "./images/Recommend2.png";
import Track from "./images/Track.png";

const projectsData = [
    // ── Fullstack (nyast → äldst) ─────────────────────────────
    {
        category: "Fullstack",
        title: { en: "VaultGG", sv: "VaultGG" },
        repo: "https://github.com/marsimjob/VaultGG",
        description: {
            en: "Gaming statistics platform with real-time data aggregation.",
            sv: "Spelstatistikplattform med realtidsaggregering av data.",
        },
        details: {
            en: "A gaming stats hub that aggregates player performance data, match history, and rankings. Built with a RESTful API architecture designed for scalability and fast response times.",
            sv: "En spelstatistikhubb som aggregerar spelarprestationsdata, matchhistorik och rankningar. Byggd med en RESTful API-arkitektur designad för skalbarhet och snabba svarstider.",
        },
        images: [],
        highlights: ["REST API", "Data Aggregation", "Real-time", "Statistics"],
        languages: ["C#"],
        tools: ["ASP.NET Core", "REST API", "JSON"],
    },
    {
        category: "Fullstack",
        title: { en: "Prenumerator", sv: "Prenumerator" },
        repo: "https://github.com/marsimjob/Prenumerator",
        liveUrl: "https://thriving-hamster-3df49e.netlify.app/",
        description: {
            en: "Fullstack subscription management app with billing cycle tracking.",
            sv: "Fullstack-app för prenumerationshantering med faktureringscykelspårning.",
        },
        details: {
            en: "A fullstack application for managing recurring subscriptions, billing cycles, and user accounts. Features a React frontend paired with an ASP.NET Core backend — automated renewal logic, status tracking, and a clean domain model.",
            sv: "En fullstack-applikation för att hantera återkommande prenumerationer, faktureringscykler och användarkonton. React-frontend kombinerat med ASP.NET Core-backend — automatisk förnyningslogik, statusspårning och en ren domänmodell.",
        },
        images: [],
        highlights: ["Fullstack", "Subscriptions", "Billing Logic", "Domain Model"],
        languages: ["C#", "React"],
        tools: ["ASP.NET Core", "React", "EF Core", "REST API"],
    },
    {
        category: "Fullstack",
        title: { en: "SlangopediaAPI", sv: "SlangopediaAPI" },
        repo: "https://github.com/marsimjob/SlangopediaAPI",
        description: {
            en: "RESTful API serving a searchable dictionary of slang terms.",
            sv: "RESTful API som tillhandahåller en sökbar ordbok med slanguttryck.",
        },
        details: {
            en: "A public-facing REST API for exploring and searching slang terminology. Designed with clean endpoints, filtering by category and origin, and full CRUD support for content management.",
            sv: "Ett publikt REST API för att utforska och söka slangterminologi. Designat med rena endpoints, filtrering per kategori och ursprung samt fullt CRUD-stöd för innehållshantering.",
        },
        images: [],
        highlights: ["REST API", "Search", "CRUD", "Filtering"],
        languages: ["C#"],
        tools: ["ASP.NET Core", "EF Core", "Swagger"],
    },

    // ── Frontend ──────────────────────────────────────────────
    {
        category: "Frontend",
        title: { en: "DoroPomodoro", sv: "DoroPomodoro" },
        repo: "https://github.com/marsimjob/DoroPomodoro",
        liveUrl: "https://marsimjob.github.io/DoroPomodoro/",
        description: {
            en: "Pomodoro productivity timer with session tracking.",
            sv: "Produktivitetstimer med Pomodoro-teknik och sessionsspårning.",
        },
        details: {
            en: "A focused productivity app built around the Pomodoro technique. Tracks work intervals, break cycles, and cumulative session history to help users build consistent work habits.",
            sv: "En produktivitetsapp byggd kring Pomodoro-tekniken. Spårar arbetsintervaller, pauscykler och kumulativ sessionshistorik för att hjälpa användare att bygga konsekventa arbetsvanor.",
        },
        images: [],
        highlights: ["Pomodoro", "Timer Logic", "Session Tracking", "UI"],
        languages: ["C#"],
        tools: ["Blazor", "Local Storage", "Timer API"],
    },

    // ── Backend (nyast → äldst) ───────────────────────────────
    {
        category: "Backend",
        title: { en: "Spectre Kickboxing", sv: "Spectre Kickboxning" },
        repo: "https://github.com/marsimjob/SpectreKickBox",
        description: {
            en: "Backend system scaffolded with SQL database and clean architecture.",
            sv: "Backend-system byggt med SQL-databas och ren arkitektur.",
        },
        details: {
            en: "A robust martial arts management system focusing on membership tracking and class scheduling using Clean Architecture principles.",
            sv: "Ett robust kampsportshanteringssystem med fokus på medlemsuppföljning och schemaplanering med Clean Architecture-principer.",
        },
        images: [],
        highlights: ["SQL Database", "Clean Architecture", "ASP.NET Core", "Backend API"],
        languages: ["C#", "TSQL"],
        tools: ["ASP.NET Core", "SQL Server", "Clean Architecture"],
    },
    {
        category: "Backend",
        title: { en: "Fast Tracker", sv: "Fast Tracker" },
        repo: "https://github.com/marsimjob/FastTracker",
        description: {
            en: "Application with authentication, login verification, and AI integration.",
            sv: "Applikation med autentisering, inloggningsverifiering och AI-integration.",
        },
        details: {
            en: "A high-performance tracking tool featuring secure JWT-based authentication and OpenAI-powered data analysis for user insights.",
            sv: "Ett högpresterande spårningsverktyg med säker JWT-baserad autentisering och OpenAI-driven dataanalys för användarinsikter.",
        },
        images: [FastTrackerIntro, Phone, Menu, AIFast, Recommend, Recommend2, Track],
        highlights: ["2-Step Verification", "JWT Authentication", "AI Integration", "Secure API"],
        languages: ["C#"],
        tools: ["React", "Node.js", "JWT", "OpenAI API"],
    },
    {
        category: "Backend",
        title: { en: "Backend Basketball 2025", sv: "Backend Basket 2025" },
        repo: "https://github.com/marsimjob/BackEndBasketBall2025",
        description: {
            en: "Advanced backend logic, data manipulation, and domain modelling.",
            sv: "Avancerad backend-logik, datamanipulering och domänmodellering.",
        },
        details: {
            en: "Complex sports statistics engine utilizing LINQ and JSON data parsing for real-time data processing and domain-driven design.",
            sv: "Komplex sportstatistikmotor som använder LINQ och JSON-dataparsning för realtidsdatabehandling och domändriven design.",
        },
        images: [],
        highlights: ["LINQ", "Complex Backend Logic", "JSON Parsing", "Data Manipulation"],
        languages: ["C#"],
        tools: ["JSON", "LINQ", "DDD"],
    },
    {
        category: "Backend",
        title: { en: "Job Tracker", sv: "Jobbspårare" },
        repo: "https://github.com/marsimjob/JobbApplicationTracker",
        description: {
            en: "Early CRUD project for tracking job applications using LINQ.",
            sv: "Tidigt CRUD-projekt för att spåra jobbansökningar med LINQ.",
        },
        details: {
            en: "An early starter project built to practice CRUD fundamentals and LINQ queries. Tracks job applications with basic filtering — a stepping stone toward more advanced backend work.",
            sv: "Ett tidigt startprojekt byggt för att öva på CRUD-grunder och LINQ-frågor. Spårar jobbansökningar med enkel filtrering — ett steg mot mer avancerad backendutveckling.",
        },
        images: [],
        highlights: ["CRUD", "LINQ", "Filtering"],
        languages: ["C#"],
        tools: ["ASP.NET", "LINQ"],
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
