import ProjectShowcase from "@/components/ProjectShowcase";
import Reveal from "@/components/Reveal";
import { filters, projectList } from "@/lib/projects";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <>
      <section className="site-container grid min-h-[540px] items-end border-b border-white/15 pb-20 pt-[170px]">
        <Reveal>
          <p className="eyebrow">Portfolio</p>
          <h1 className="max-w-6xl text-5xl font-bold leading-none md:text-7xl">
            Large-scale cultural work, designed as immersive public systems.
          </h1>
        </Reveal>
      </section>
      <ProjectShowcase projects={projectList} filters={filters} />
      <section className="site-container section-pad">
        <Reveal className="mb-12">
          <p className="eyebrow">Case study anatomy</p>
          <h2 className="max-w-4xl text-4xl font-bold leading-none md:text-6xl">
            Every project page moves from challenge to built impact.
          </h2>
        </Reveal>
        <Reveal className="grid gap-6 md:grid-cols-2">
          <div className="panel p-8">
            <span className="font-bold text-gold">Before</span>
            <p className="mt-4 text-bone-soft">
              Briefs often begin as fragmented content, underused sites, complex public mandates, or subjects that feel
              too technical for general audiences.
            </p>
          </div>
          <div className="panel p-8">
            <span className="font-bold text-gold">After</span>
            <p className="mt-4 text-bone-soft">
              We convert those inputs into a clear visitor journey: entry sequence, primary story, tactile engagement,
              digital interaction, memory point, and institutional handover.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
