import Link from "next/link";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import Reveal from "@/components/Reveal";
import { featuredProjects } from "@/lib/projects";

const stats = [
  ["400+", "Projects Delivered"],
  ["600+", "Institutional Clients"],
  ["10+", "Core Team Members"],
  ["20+", "Years in Public Environments"]
];

const studioProfile = [
  "Chromosome Designs is an Ahmedabad-based interpretive planning, exhibit design, and fabrication firm. Our mission is to create products and experiences that inspire people. Our core values guide us daily in achieving this mission.",
  "Our client list encompasses a diverse array of venues, including nature parks, wildlife sanctuaries, museums, wildlife interpretation centers, zoos, science centers, and corporate lobbies. We believe in providing excellent customer service and stand behind our designed products, ensuring complete customer satisfaction.",
  "The Chromosome Designs design team consists of an art director, a design manager, exhibit designers, graphic designers, an interpretive planner, researchers, and copywriters. Our experienced designers work through three progressive design phases, incorporating innovative ideas and value engineering. Throughout this process, we continuously ensure that each client's needs and demands are met within budget, resulting in a custom, one-of-a-kind design.",
  "Our modeling talents cover a range of subjects, from animals and humans to botanical and comic themes. At Chromosome Designs, we love what we do, and it shows in our models. You can always expect unrivaled attention to detail and scientific accuracy, when applicable."
];

const ledger = [
  ["01", "Nature parks, zoos, and wildlife sanctuaries", "Interpretive planning, visitor sequencing, habitat storytelling, and scientific accuracy."],
  ["02", "Museums, science centers, and interpretation centers", "Exhibit design, educational graphics, interactives, fabrication, and guided discovery."],
  ["03", "Corporate lobbies and public environments", "Custom displays, thematic installations, models, and branded interpretive experiences."],
  ["04", "Models, sculptures, and character worlds", "Animals, humans, botanical forms, comic themes, public sculptures, and one-of-a-kind builds."]
];

const process = [
  ["01", "Interpretive planning", "Audience needs, venue context, subject research, story hierarchy, and visitor flow."],
  ["02", "Progressive design phases", "Concept development, exhibit design, graphics, value engineering, and budget alignment."],
  ["03", "Modeling and fabrication", "Custom models, sculptures, scenic forms, materials, detailing, and production logic."],
  ["04", "Delivery and satisfaction", "Client coordination, quality control, installation, handover, and long-term product confidence."]
];

export default function HomePage() {
  return (
    <>
      <section className="relative grid min-h-screen place-items-center overflow-hidden bg-hero-installation bg-cover bg-center px-5 pb-16 pt-32 text-center md:px-8">
        <span className="absolute inset-0 bg-gradient-to-b from-blacktop/20 to-blacktop/95" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-6xl">
          <p className="eyebrow">Ahmedabad-based interpretive planning / Exhibit design / Fabrication</p>
          <h1 className="text-5xl font-bold leading-none md:text-7xl lg:text-8xl">
            Chromosome Designs
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg text-bone-soft md:text-xl">
            Creating products and experiences that inspire people across nature parks, wildlife sanctuaries, museums,
            interpretation centers, zoos, science centers, and corporate lobbies.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link className="button button-solid" href="/projects">
              View the work <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link className="button button-ghost" href="/projects/science-city">
              Featured case
            </Link>
          </div>
        </Reveal>
        <aside className="absolute bottom-8 left-5 hidden gap-6 text-xs font-bold uppercase tracking-[0.14em] text-bone-soft md:flex">
          <span>400+ projects</span>
          <span>600+ clients</span>
          <span>20+ years</span>
        </aside>
      </section>

      <section className="site-container section-pad border-b border-white/15">
        <Reveal className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="eyebrow">Studio profile</p>
            <h2 className="text-4xl font-bold leading-none md:text-6xl">
              Interpretive planning, exhibit design, and fabrication with complete accountability.
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-relaxed text-bone-soft">
            {studioProfile.map((paragraph) => (
              <p key={paragraph} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="grid border-y border-white/15 bg-blacktop md:grid-cols-4" aria-label="Studio statistics">
        {stats.map(([value, label]) => (
          <Reveal key={label} className="border-b border-white/15 p-8 md:border-b-0 md:border-r md:last:border-r-0 lg:p-12">
            <strong className="font-display text-6xl font-medium leading-none text-gold lg:text-7xl">{value}</strong>
            <span className="mt-3 block font-bold text-muted">{label}</span>
          </Reveal>
        ))}
      </section>

      <section className="site-container section-pad">
        <Reveal className="mb-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow">Featured work</p>
            <h2 className="max-w-4xl text-4xl font-bold leading-none md:text-6xl">
              Selected projects built for public memory.
            </h2>
          </div>
          <Link className="text-link" href="/projects">
            View all projects <span aria-hidden="true">-&gt;</span>
          </Link>
        </Reveal>
        <Reveal>
          <FeaturedCarousel projects={featuredProjects} />
        </Reveal>
      </section>

      <section className="site-container section-pad border-y border-white/15">
        <Reveal className="mb-12 max-w-4xl">
          <p className="eyebrow">Portfolio territories</p>
          <h2 className="text-4xl font-bold leading-none md:text-6xl">
            A diverse array of venues, each approached as a custom interpretive experience.
          </h2>
        </Reveal>
        <div className="grid border-t border-white/15">
          {ledger.map(([number, title, copy]) => (
            <Reveal key={number}>
              <Link
                className="grid gap-4 border-b border-white/15 py-7 transition hover:text-gold md:grid-cols-[80px_0.8fr_1fr] md:items-center md:gap-8"
                href="/projects"
              >
                <span className="font-display text-3xl text-gold">{number}</span>
                <strong className="text-2xl leading-tight">{title}</strong>
                <em className="not-italic text-muted">{copy}</em>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-container section-pad grid gap-14 lg:grid-cols-[0.86fr_1.14fr]">
        <Reveal>
          <p className="eyebrow">How we make the work</p>
          <h2 className="text-4xl font-bold leading-none md:text-6xl">
            Innovative ideas, value engineering, detail, and scientific accuracy.
          </h2>
          <p className="mt-6 text-bone-soft">
            The design team works through progressive design phases so each client's needs and demands are met within
            budget, resulting in custom, one-of-a-kind design.
          </p>
        </Reveal>
        <Reveal>
          <div className="grid border-t border-white/15">
            {process.map(([number, title, copy]) => (
              <div key={number} className="grid gap-3 border-b border-white/15 py-7 md:grid-cols-[80px_0.65fr_1fr] md:gap-6">
                <span className="font-display text-3xl text-gold">{number}</span>
                <strong className="text-xl">{title}</strong>
                <p className="m-0 text-muted">{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="site-container section-pad grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="panel p-8 lg:p-11">
          <p className="eyebrow">Client commitment</p>
          <blockquote className="font-display text-3xl leading-tight md:text-5xl">
            "We believe in providing excellent customer service and stand behind our designed products."
          </blockquote>
          <cite className="mt-7 block font-bold not-italic text-gold">Chromosome Designs studio principle</cite>
        </Reveal>
        <Reveal className="grid grid-cols-2 gap-3">
          {["Nature Parks", "Wildlife Sanctuaries", "Museums", "Zoos", "Science Centers", "Corporate Lobbies"].map(
            (client) => (
              <span key={client} className="panel grid min-h-28 place-items-center p-5 text-center font-bold text-muted">
                {client}
              </span>
            )
          )}
        </Reveal>
      </section>

      <section className="grid min-h-[540px] place-items-center bg-[linear-gradient(180deg,rgba(3,4,3,0.32),rgba(3,4,3,0.92)),url('/assets/images/interpretation-center.svg')] bg-cover bg-center px-5 py-20 text-center">
        <Reveal>
          <p className="eyebrow">Start a public experience</p>
          <h2 className="mx-auto mb-9 max-w-5xl text-4xl font-bold leading-none md:text-6xl">
            Have a museum, park, interpretation center, or civic installation to shape?
          </h2>
          <Link className="button button-solid" href="/contact">
            Make an inquiry
          </Link>
        </Reveal>
      </section>
    </>
  );
}
