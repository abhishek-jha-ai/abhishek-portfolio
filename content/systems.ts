/**
 * Other systems. Only facts supplied by Abhishek — add `links` when a
 * public URL exists and the card renders it.
 */

export type System = {
  id: string;
  code: string;
  name: string;
  org?: string;
  role?: string;
  domain: string;
  summary: string;
  metric?: { value: string; label: string };
  /** Before/after comparison, rendered as proportional bars. */
  improvement?: { label: string; before: string; after: string; beforeHours: number; afterHours: number };
  groups?: { label: string; items: string[] }[];
  links?: { live?: string; caseStudy?: string; github?: string };
  wide?: boolean;
};

/** Products you can open right now. */
export const products: System[] = [
  {
    id: "plancraft",
    code: "SYS-02",
    name: "PlanCraft AI",
    domain: "Production AI",
    summary:
      "A production AI productivity platform — voice journaling, smart reminders and AI insights, built on retrieval, tool calling and agentic workflows.",
    metric: { value: "1,000+", label: "users" },
    links: { live: "https://plancraftai.com/" },
    groups: [
      { label: "Product", items: ["Voice journaling", "Smart reminders", "AI insights", "AI-assisted workflows"] },
      { label: "AI", items: ["LLMs", "RAG", "Tool calling", "Agentic workflows"] },
      { label: "Stack", items: ["Python", "FastAPI", "PostgreSQL", "AWS"] },
    ],
  },
  {
    id: "salonflow",
    code: "SYS-03",
    name: "SalonFlow",
    domain: "Multi-tenant SaaS",
    summary:
      "A multi-tenant platform for business operations — scheduling, CRM and workflow automation.",
    metric: { value: "200+", label: "businesses" },
    links: { live: "https://www.salonflow.studio/" },
    groups: [
      { label: "Product", items: ["Scheduling", "CRM", "Business operations", "Workflow automation"] },
      { label: "Stack", items: ["TypeScript", "Backend APIs", "PostgreSQL", "Cloud infrastructure"] },
    ],
  },
  {
    id: "foundercontent",
    code: "SYS-04",
    name: "FounderContent AI",
    domain: "LLM content automation",
    summary: "An LLM content automation platform that turns source material into LinkedIn content.",
    links: { live: "https://foundercontent.ai/" },
  },
];

/** Systems built inside companies — the company owns the product. */
export const employerSystems: System[] = [
  {
    id: "braintree",
    code: "SYS-05",
    name: "Healthcare data systems",
    org: "Braintree Health",
    role: "Software Engineer Intern / Team Lead",
    domain: "Healthcare interoperability",
    summary:
      "Backend services for healthcare data on Java and Spring Boot, working across HL7, FHIR and DICOM — including a data-processing workflow that went from weeks to hours.",
    improvement: {
      label: "Healthcare data-processing workflow",
      before: "2–3 weeks",
      after: "~1.5 hours",
      beforeHours: 420,
      afterHours: 1.5,
    },
    groups: [{ label: "Stack", items: ["Java", "Spring Boot", "REST APIs", "HL7", "FHIR", "DICOM"] }],
  },
  {
    id: "eruvaka",
    code: "SYS-06",
    name: "Eruvaka platform",
    org: "Eruvaka Technology",
    role: "Java Full Stack Developer / Team Lead",
    domain: "Production platform",
    summary:
      "Technical leadership on a production platform — GraphQL and REST APIs on Node.js and TypeScript, with ML capabilities integrated into the product.",
    metric: { value: "20,000+", label: "users" },
    groups: [
      { label: "Scope", items: ["Technical leadership", "ML capability integrations"] },
      { label: "Stack", items: ["TypeScript", "Node.js", "GraphQL", "REST"] },
    ],
  },
  {
    id: "caci",
    code: "SYS-07",
    name: "Enterprise microservices",
    org: "CACI International",
    role: "Senior Java Full Stack Developer",
    domain: "Enterprise platform",
    summary:
      "Java and Spring Boot microservices secured with OAuth 2.0 and JWT, shipped through CI/CD onto Docker and Kubernetes — and kept healthy in production through Splunk-driven troubleshooting and root-cause analysis.",
    groups: [
      { label: "Services", items: ["Java", "Spring Boot", "REST APIs", "Microservices", "OAuth 2.0", "JWT"] },
      { label: "Platform", items: ["Docker", "Kubernetes", "CI/CD"] },
      { label: "Operations", items: ["Splunk", "Production troubleshooting", "Root-cause analysis"] },
    ],
    wide: true,
  },
];

export type ShippedLink = { name: string; what: string; href: string; label: string; live: boolean; external: boolean };

/** Quick-scan index of things a visitor can click. `live` = publicly usable without an account. */
export const shipped: ShippedLink[] = [
  { name: "PlanCraft AI", what: "AI productivity", href: "https://plancraftai.com/", label: "plancraftai.com", live: true, external: true },
  { name: "SalonFlow", what: "Business operations SaaS", href: "https://www.salonflow.studio/", label: "salonflow.studio", live: true, external: true },
  { name: "FounderContent AI", what: "LLM content automation", href: "https://foundercontent.ai/", label: "foundercontent.ai", live: true, external: true },
  { name: "Pazeix", what: "Payment gateway", href: "https://pazeix.com/signin", label: "pazeix.com · sign-in", live: false, external: true },
  { name: "Agentic SDLC Platform", what: "Governed AI delivery runtime", href: "/systems/agentic-sdlc", label: "Case study", live: false, external: false },
  { name: "Sudo Programmer", what: "Company", href: "https://sudoprogrammer.com/", label: "sudoprogrammer.com", live: false, external: true },
];
