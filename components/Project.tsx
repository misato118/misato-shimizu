import { ProjectDetails } from "@/types";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Project = ({ key, project }: { key: number, project: ProjectDetails }) => {
  return (
    <div key={key} className="grid grid-cols-3 gap-4 items-center">
      <div className="col-span-1 flex justify-center items-start">
        {project.imagePath ? (
          <img src={project.imagePath} alt={`${project.title} image`} className="size-40 object-contain rounded-lg" />
        ) : <div className="size-40 flex items-center justify-center"><PhotoIcon className="size-20" /></div>}
      </div>
      <div className="col-span-2">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xl font-bold text-primary mb-1 hover:underline">
          <span>{project.title}</span> <ArrowTopRightOnSquareIcon className="size-5 pt-1 ml-1 shrink-0" />
        </a>
        <p className="text-sm leading-relaxed text-base-content/80">{project.description}</p>
      </div>
    </div>
  );
}

export default Project;