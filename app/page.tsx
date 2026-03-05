import ScrollReveal from "@/components/ScrollReveal"

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-base-300">
      <div className="h-full flex flex-col snap-center">
        <header className="bg-neutral h-auto">
          <div className="flex justify-end-safe p-6 lg:px-8 gap-x-4">
            <button className="btn btn-secondary btn-circle w-fit p-3 text-neutral-content">Check Playground</button>
            <button className="btn btn-primary btn-circle w-fit p-3 text-neutral-content">Download Resume</button>
          </div>
        </header>
        <div className="grow grid place-content-center">
          <ScrollReveal>
            <div className="max-w-md mx-auto text-center">
              <h1 className="text-5xl font-bold mb-4 text-primary">Misato Shimizu</h1>
              <p className="leading-relaxed text-base-content/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <ScrollReveal>
        <div className="grid place-content-center h-screen snap-center">B</div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="grid place-content-center h-screen snap-center">C</div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="grid place-content-center h-screen snap-center">D</div>
      </ScrollReveal>
    </div>
  );
}
