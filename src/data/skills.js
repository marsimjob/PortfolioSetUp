const skillsData = [
  {
    title: { en: "Backend, .NET & Architecture", sv: "Backend, .NET & Arkitektur" },
    items: [
      "OOP, Clean Architecture, DTOs",
      ".NET Core, Minimal APIs, MVC",
      "CQRS, MediatR, FluentValidation",
      "Unit & Integration Tests",
    ],
  },
  {
    title: { en: "Security & Identity", sv: "S\u00E4kerhet & Identitet" },
    items: [
      "JWT Auth, Roles & Permissions",
      "Identity, 2FA, TOTP",
      "Secrets Management",
    ],
  },
  {
    title: { en: "Frontend, React & UI", sv: "Frontend, React & UI" },
    items: [
      "React, Tailwind CSS",
      "API consumption with Axios",
      "State mgmt: Redux & Zustant",
      "Forms with React Hook Form & Zod",
    ],
  },
];

export function getSkills(lang) {
  return skillsData.map((group) => ({
    ...group,
    title: group.title[lang] || group.title.en,
  }));
}
