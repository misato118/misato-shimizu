import { WorkExperienceDetails } from "@/types";

export const WORK_EXPERIENCE: WorkExperienceDetails[] = [
  {
    title: "Full-stack Software Engineer",
    company: "Snowgroup",
    start: new Date("2025-09-01"),
    description: "I specialized in architecting seamless integrations between decoupled systems using Java Spring Boot and modern web APIs. My role focused on enhancing system reliability and performance — from engineering Single Sign-On (SSO) workflows to resolving client-server bottlenecks that ensured accurate data rendering and a more responsive user experience.",
  },
  {
    title: "Front-end Software Engineer Intern",
    company: "Flindel",
    start: new Date("2019-06-01"),
    end: new Date("2019-10-01"),
    description: "I focused on building custom e-commerce integrations to automate logistical workflows and enhance data reliability. My role involved engineering a geospatial validation flow via the Google Geolocation API to enforce service boundaries and developing high-accuracy data hydration pipelines for Shopify-driven interfaces.",    
  }
];