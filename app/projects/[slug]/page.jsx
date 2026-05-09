import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getProject, projectList } from "@/lib/projects";

export function generateStaticParams() {
  return projectList.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projectList.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <section className="relative grid min-h-screen items-end overflow-hidden px-5 pb-20 pt-36 md:px-8">
        <img className="absolute inset-0 -z-20 h-full w-full object-cover" src={project.image} alt={project.title} />
        <span className="absolute inset-0 -z-10 bg-gradient-to-b from-blacktop/10 to-blacktop/90" aria-hidden="true" />
        <Reveal className="mx-auto w-full max-w-site">
          <p className="eyebrow">{project.category}</p>
          <h1 className="text-5xl font-bold leading-none md:text-7xl lg:text-8xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-bone-soft md:text-xl">{project.summary}</p>
        </Reveal>
      </section>

      <section className="site-container section-pad grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="eyebrow">Project overview</p>
          <h2 className="text-4xl font-bold leading-none md:text-6xl">{project.overviewTitle}</h2>
          <p className="mt-6 text-bone-soft">{project.description}</p>
        </Reveal>
        <Reveal>
          <dl className="grid border-t border-white/15">
            {[
              ["Typology", project.typology],
              ["Services", project.services],
              ["Audience", project.audience],
              ["Status", "Completed"]
            ].map(([label, value]) => (
              <div key={label} className="grid gap-3 border-b border-white/15 py-5 md:grid-cols-[120px_1fr]">
                <dt className="font-bold text-gold">{label}</dt>
                <dd className="m-0 text-bone-soft">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="site-container section-pad grid gap-8 lg:grid-cols-2">
        <Reveal className="panel p-8">
          <p className="eyebrow">Problem statement</p>
          <h2 className="text-3xl font-bold leading-none md:text-5xl">{project.problemTitle}</h2>
          <p className="mt-6 text-bone-soft">{project.problem}</p>
        </Reveal>
        <Reveal className="panel p-8">
          <p className="eyebrow">Design response</p>
          <h2 className="text-3xl font-bold leading-none md:text-5xl">Build the visit as a sequence of discoveries.</h2>
          <p className="mt-6 text-bone-soft">{project.response}</p>
        </Reveal>
      </section>

      <section className="site-container section-pad grid gap-14 lg:grid-cols-[0.86fr_1.14fr]">
        <Reveal>
          <p className="eyebrow">Sketches and concepts</p>
          <h2 className="text-4xl font-bold leading-none md:text-6xl">
            Concept work sets the rhythm before fabrication begins.
          </h2>
          <p className="mt-6 text-bone-soft">
            Early studies define the interpretive hierarchy, visitor sightlines, material tone, and the relationship
            between built objects and digital layers.
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {["Audience map", "Story hierarchy", "Object scale", "Lighting mood", "Digital trigger", "Handover logic"].map(
            (item) => (
              <span key={item} className="panel grid min-h-36 place-items-center p-5 text-center font-bold text-bone-soft">
                {item}
              </span>
            )
          )}
        </Reveal>
      </section>

      <section className="site-container section-pad grid gap-6 lg:grid-cols-2">
        <Reveal className="panel p-8">
          <p className="eyebrow">Materials used</p>
          <ul className="grid gap-3 pl-5 text-bone-soft">
            {project.materials.map((material) => (
              <li key={material}>{material}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="panel p-8">
          <p className="eyebrow">Outcomes and impact</p>
          <h2 className="text-3xl font-bold leading-none md:text-5xl">{project.impactTitle}</h2>
          <p className="mt-6 text-bone-soft">{project.impact}</p>
        </Reveal>
      </section>

      <section className="site-container section-pad">
        <Reveal className="mb-12">
          <p className="eyebrow">Interactive gallery</p>
          <h2 className="text-4xl font-bold leading-none md:text-6xl">Spatial moments from the case.</h2>
        </Reveal>
        <Reveal className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          {project.gallery.map((image, index) => (
            <img
              key={image}
              className={`panel min-h-[300px] object-cover ${index === 0 ? "md:row-span-2 md:min-h-[640px]" : ""}`}
              src={image}
              alt={`${project.title} gallery ${index + 1}`}
            />
          ))}
        </Reveal>
      </section>

      <section className="site-container section-pad">
        <Reveal className="mb-12">
          <p className="eyebrow">Related projects</p>
          <h2 className="text-4xl font-bold leading-none md:text-6xl">More public learning environments.</h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {related.map((item) => (
            <Reveal key={item.slug}>
              <Link className="panel group block overflow-hidden" href={`/projects/${item.slug}`}>
                <img className="h-56 object-cover transition duration-700 group-hover:scale-105" src={item.image} alt={item.title} />
                <span className="block p-5 font-bold">{item.title}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
