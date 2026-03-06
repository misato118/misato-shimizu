import { ProjectDetails } from "@/types";
import * as dotenv from "dotenv";

dotenv.config();
const myGitHub = process.env.GITHUB || "";

export const PROJECT_DETAILS: ProjectDetails[] = [
  {
    title: "Item Rental platform",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    link: myGitHub + "/item-rental-application",
    imagePath: "/item-rental-platform.png"
  },
  {
    title: "Job Application Management System",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    link: myGitHub + "/imapplicant",
    imagePath: "/imapplicant2.png"
  },
  {
    title: "Customer Retention Analysis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    link: myGitHub + "/customer-retention-analysis",
    imagePath: "/customer-retention-analysis.png"
  },
  {
    title: "Skincare Advisor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    link: myGitHub + "/skincare-advisor-app"
  }
];