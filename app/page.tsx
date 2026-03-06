import NavBar from "@/components/NavBar";
import Project from "@/components/Project";
import ScrollReveal from "@/components/ScrollReveal"
import WorkExperience from "@/components/WorkExperience";
import { WORK_EXPERIENCE } from "@/constants/experience";
import { PROJECT_DETAILS } from "@/constants/projects";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-base-300 scroll-smooth">
      <div className="h-full flex flex-col snap-center">
        <NavBar />
        <div className="grow grid place-content-center">
          <ScrollReveal>
            <div className="max-w-lg mx-auto text-center">
              <h1 className="text-5xl font-bold mb-4 text-primary">Misato Shimizu</h1>
              <p className="leading-relaxed text-base-content/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <div className="grid place-content-center h-screen snap-center">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto h-[75vh] flex flex-col">
            <div className="grow overflow-y-auto flex flex-col justify-center gap-y-2 pr-4 custom-scrollbar">
              {WORK_EXPERIENCE.map((experience, index) => (
                <WorkExperience key={index} experience={experience} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
      <div className="grid place-content-center h-screen snap-center">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto h-[80vh] flex flex-col">
            <div className="grow overflow-y-auto flex flex-col justify-center-safe pr-4 custom-scrollbar my-1">
              {PROJECT_DETAILS.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            </div>            
          </div>
        </ScrollReveal>
      </div>

      
      <div id="playground" className="grid place-content-center h-screen snap-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-4 opacity-60">
            <span className="loading loading-dots loading-lg text-primary"></span>
            <div className="text-center">
              <h3 className="text-xl font-mono font-bold">The Playground</h3>
              <p className="mt-4 max-w-xs text-sm italic">
                I'm currently architecting a playground here.
                Check back soon for the live demo.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
