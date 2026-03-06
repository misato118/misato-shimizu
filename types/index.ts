export interface WorkExperienceDetails {
  title: String;
  company: String;
  start: Date;
  end?: Date;
  description: String;
}

export interface ProjectDetails {
  title: string;
  description: string;
  link?: string;
  imagePath?: string;
}