import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  ["01", "Exhibit Design", "Concept, content hierarchy, spatial sequencing, models, graphic systems, and display logic."],
  ["02", "Interpretation Centers", "Visitor journeys for forests, zoos, museums, heritage sites, science parks, and civic programs."],
  ["03", "Sculptures & Models", "Public sculptures, life-size species models, dinosaur forms, scenic fabrication, and durable installations."],
  ["04", "AR/VR Experiences", "Immersive learning simulations, augmented interpretation, virtual tours, and digital overlays."],
  ["05", "Interactive Software", "Kiosk interfaces, educational games, touch tables, multi-language experiences, and visitor analytics hooks."],
  ["06", "Film Making", "Short documentaries, environmental films, animated explainers, projection content, and launch media."],
  ["07", "Signage Systems", "Wayfinding, interpretive panels, tactile graphics, accessibility-aware typography, and site identity."],
  ["08", "Kiosk Design", "Hardware integration, enclosure design, content UX, maintenance logic, and public-use durability."]
];

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <div className="site-container pt-[120px]">
      <section className="grid min-h-[430px] items-end gap-12 border-b border-white/15 py-20 lg:grid-cols-[1.05fr_0.65fr]">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
          <h1 className="text-5xl font-bold leading-none md:text-7xl">
            Services that exist to support stronger portfolio work.
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-lg text-bone-soft">
            The agency is not a menu of isolated services. It is a production-ready studio for complete public
            experiences, from story and exhibit form to interaction and installation.
          </p>
        </Reveal>
      </section>

      <section className="section-pad grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map(([number, title, copy]) => (
          <Reveal key={number} className="panel min-h-80 p-8">
            <span className="font-display text-3xl text-gold">{number}</span>
            <h2 className="mt-10 text-2xl font-bold leading-tight">{title}</h2>
            <p className="mt-4 text-muted">{copy}</p>
          </Reveal>
        ))}
      </section>

      <section className="section-pad grid gap-14 lg:grid-cols-[0.86fr_1.14fr]">
        <Reveal>
          <p className="eyebrow">Proof through work</p>
          <h2 className="text-4xl font-bold leading-none md:text-6xl">
            The portfolio remains the clearest service description.
          </h2>
          <p className="mt-6 text-bone-soft">
            Each capability is visible inside the case studies: the way a visitor moves, how a model holds scale, how a
            digital layer clarifies content, and how the finished environment survives public use.
          </p>
        </Reveal>
        <Reveal className="grid gap-6 md:grid-cols-2">
          {[
            ["Science exhibits", "/assets/images/science-city.svg", "/projects/science-city"],
            ["Wildlife interpretation", "/assets/images/wildlife-sanctuary.svg", "/projects/wildlife-sanctuary"]
          ].map(([title, image, href]) => (
            <Link key={title} className="panel group overflow-hidden" href={href}>
              <img className="h-64 object-cover transition duration-700 group-hover:scale-105" src={image} alt={title} />
              <span className="block p-5 font-bold">{title}</span>
            </Link>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
