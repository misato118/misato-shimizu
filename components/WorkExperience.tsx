import { WorkExperienceDetails } from "@/types";

const WorkExperience = ({ key, experience }: { key: number, experience: WorkExperienceDetails }) => {
  const dateOptions = { month: "short", year: "numeric" } as const;

  return (
    <div key={key} className="max-w-3xl mx-auto my-8">
      <h1 className="text-2xl font-bold text-primary">{experience.title}</h1>
      <p className="text-lg text-secondary font-semibold">{experience.company}</p>
      <p className="text-md text-secondary font-semibold mb-1">{experience.start.toLocaleDateString("default", dateOptions)} - {experience.end ? experience.end.toLocaleDateString("default", dateOptions) : "Present"}</p>
      <p className="text-base leading-relaxed text-base-content/80">{experience.description}</p>
    </div>
  );
}

export default WorkExperience;