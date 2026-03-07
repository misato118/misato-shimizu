import { ProjectDetails } from "@/types";
import * as dotenv from "dotenv";

dotenv.config();
const myGitHub = process.env.GITHUB || "";

export const PROJECT_DETAILS: ProjectDetails[] = [
  {
    title: "Item Rental platform",
    description: "A full-stack web application that allows users to rent and manage items through a flexible, multi-role system.",
    link: myGitHub + "/item-rental-application",
    imagePath: "/item-rental-platform.png"
  },
  {
    title: "Job Application Management System",
    description: "A full-stack job management application where users can manage and analyze their job applications to find jobs efficiently.",
    link: myGitHub + "/imapplicant",
    imagePath: "/imapplicant2.png"
  },
  {
    title: "Customer Retention Analysis",
    description: "A full-stack machine learning application that predicts whether a telecommunications customer is likely to churn (cancel their subscription) based on their billing and demographic data.",
    link: myGitHub + "/customer-retention-analysis",
    imagePath: "/customer-retention-analysis.png"
  },
  {
    title: "Skincare Advisor",
    description: "A Microsoft Copilot Hackathon project where custom data on skincare products are used to train a chat agent",
    link: myGitHub + "/skincare-advisor-app"
  }
];