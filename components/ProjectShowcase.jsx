"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProjectShowcase({ projects, filters }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [preview, setPreview] = useState(null);

  const visibleProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.filters.includes(activeFilter);
  });

  return (
    <>
      <section className="site-container section-pad pt-0" aria-label="Project filters">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`min-h-12 border px-5 font-bold transition hover:-translate-y-0.5 ${
                activeFilter === filter.value
                  ? "border-gold bg-gold text-blacktop"
                  : "border-white/15 bg-white/5 text-bone-soft"
              }`}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="site-container mb-20 grid auto-rows-[minmax(480px,auto)] grid-cols-1 gap-6 lg:grid-cols-6">
        {visibleProjects.map((project, index) => (
          <article
            key={project.slug}
            className={`panel group relative overflow-hidden p-8 ${
              index === 0 ? "lg:col-span-3 lg:row-span-2" : index === 3 ? "lg:col-span-4" : "lg:col-span-3"
            }`}
          >
            <img
              className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              src={project.image}
              alt={project.title}
            />
            <span className="work-overlay absolute inset-0 -z-10" aria-hidden="true" />
            <div className="flex h-full max-w-2xl flex-col justify-end">
              <span className="text-sm font-bold text-gold">{project.category}</span>
              <h2 className="mt-3 text-3xl font-bold leading-none md:text-4xl">{project.title}</h2>
              <p className="mt-4 text-bone-soft">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-5">
                <Link className="text-link" href={`/projects/${project.slug}`}>
                  Open case study <span aria-hidden="true">-&gt;</span>
                </Link>
                <button className="text-link" type="button" onClick={() => setPreview(project)}>
                  Preview story
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {preview ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-blacktop/80 p-5 backdrop-blur-xl">
          <div className="panel relative grid max-h-[90vh] w-full max-w-6xl gap-8 overflow-auto p-7 lg:grid-cols-2 lg:p-9">
            <button
              className="absolute right-4 top-4 h-11 w-11 border border-white/15 bg-white/5 font-bold"
              type="button"
              onClick={() => setPreview(null)}
              aria-label="Close case preview"
            >
              x
            </button>
            <img className="h-[360px] w-full object-cover lg:h-[520px]" src={preview.image} alt={preview.title} />
            <div className="self-center pr-4">
              <p className="eyebrow">{preview.category}</p>
              <h2 className="text-4xl font-bold leading-none md:text-6xl">{preview.title}</h2>
              <p className="mt-5 text-bone-soft">{preview.description}</p>
              <dl className="mt-7 grid border-t border-white/15">
                <div className="grid gap-3 border-b border-white/15 py-5 md:grid-cols-[120px_1fr]">
                  <dt className="font-bold text-gold">Scope</dt>
                  <dd className="m-0 text-bone-soft">{preview.scope}</dd>
                </div>
                <div className="grid gap-3 border-b border-white/15 py-5 md:grid-cols-[120px_1fr]">
                  <dt className="font-bold text-gold">Impact</dt>
                  <dd className="m-0 text-bone-soft">{preview.impact}</dd>
                </div>
              </dl>
              <Link className="button button-solid mt-7" href={`/projects/${preview.slug}`}>
                Full case study
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
