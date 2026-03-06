"use client";

const NavBar = () => {
  const scrollToPlayground = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-neutral h-auto">
      <div className="flex justify-end-safe p-6 lg:px-8 gap-x-4">
        <button onClick={() => scrollToPlayground("playground")} className="btn btn-secondary btn-circle w-fit p-3 text-neutral-content">Check Playground</button>
        <button className="btn btn-primary btn-circle w-fit p-3 text-neutral-content">Download Resume</button>
      </div>
    </header>
  );
}

export default NavBar;