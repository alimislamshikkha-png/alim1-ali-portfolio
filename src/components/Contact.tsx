import React from "react";

type Project = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  category: string;
  tools?: string[];
};

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="portfolio"
      className="bg-slate-950 text-white py-20 px-5"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold mb-3">
            MY PORTFOLIO
          </p>

          <h2 className="text-4xl font-bold">
            16 Complete Demonstration Projects
          </h2>

          <p className="text-slate-400 mt-4">
            Explore my Digital Marketing Support and
            Virtual Assistant demonstration work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-cyan-900/50 bg-slate-900 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-cyan-400 text-sm">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold mt-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mt-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools?.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs bg-slate-800 px-3 py-2 rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
