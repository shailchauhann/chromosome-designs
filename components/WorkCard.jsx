import Link from "next/link";

export default function WorkCard({ project, className = "" }) {
  return (
    <article className={`panel group relative min-h-[480px] overflow-hidden lg:min-h-[560px] ${className}`}>
      <Link className="flex min-h-[inherit] flex-col justify-end p-7 lg:p-9" href={`/projects/${project.slug}`}>
        <img
          className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          src={project.image}
          alt={project.title}
        />
        <span className="work-overlay absolute inset-0 -z-10" aria-hidden="true" />
        <span className="text-sm font-bold text-gold">{project.category}</span>
        <h3 className="mt-3 text-3xl font-bold leading-none md:text-4xl">{project.title}</h3>
        <p className="mt-4 max-w-xl text-bone-soft">{project.summary}</p>
        <span className="mt-5 text-link">Open case study <span aria-hidden="true">-&gt;</span></span>
      </Link>
    </article>
  );
}
