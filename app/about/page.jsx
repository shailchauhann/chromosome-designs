import Reveal from "@/components/Reveal";

const team = [
  ["Creative Direction", "Experience strategy and narrative design", "Interpreting institutional goals into visitor journeys, themes, and concept worlds."],
  ["Spatial Design", "Exhibits, models, sculptures, and environments", "Translating concepts into scale, materials, lighting, drawings, and production logic."],
  ["Interactive Media", "AR/VR, kiosks, software, and film", "Building layered interpretation that responds to audiences, language, and context."]
];

const values = [
  ["01", "Clarity before spectacle", "Every cinematic moment must help the visitor understand the subject."],
  ["02", "Respect for place", "Material, language, graphics, and visitor flow respond to the site and its public."],
  ["03", "Built accountability", "Design decisions are tied to fabrication, maintenance, access, and institutional use."]
];

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <div className="site-container pt-[120px]">
      <section className="grid min-h-[430px] items-end gap-12 border-b border-white/15 py-20 lg:grid-cols-[1.05fr_0.65fr]">
        <Reveal>
          <p className="eyebrow">Studio story</p>
          <h1 className="text-5xl font-bold leading-none md:text-7xl">
            We design public environments where knowledge becomes physical.
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-lg text-bone-soft">
            Chromosome Designs brings together exhibition design, model making, environmental graphics, filmmaking,
            interactive software, AR/VR, and on-site execution for government and institutional cultural projects.
          </p>
        </Reveal>
      </section>

      <section className="section-pad grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <img className="panel min-h-[520px] object-cover" src="/assets/images/studio-floor.svg" alt="Studio floor" />
        </Reveal>
        <Reveal>
          <p className="eyebrow">Mission and philosophy</p>
          <h2 className="text-4xl font-bold leading-none md:text-6xl">
            Make complex subjects legible, memorable, and worthy of place.
          </h2>
          <p className="mt-6 text-bone-soft">
            We believe visitors learn through sequence: arrival, orientation, surprise, touch, pause, and recall. Every
            project is treated as a system of spatial storytelling, not a collection of isolated display objects.
          </p>
          <p className="mt-4 text-bone-soft">
            That is why the studio moves from research and script to physical form, interaction, fabrication,
            installation, and public handover as one connected practice.
          </p>
        </Reveal>
      </section>

      <section className="section-pad">
        <Reveal className="mb-12">
          <p className="eyebrow">Team</p>
          <h2 className="text-4xl font-bold leading-none md:text-6xl">A compact studio with wide execution depth.</h2>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {team.map(([label, title, copy]) => (
            <Reveal key={label} className="panel min-h-64 p-8">
              <span className="text-gold">{label}</span>
              <h3 className="mt-10 text-2xl font-bold leading-tight">{title}</h3>
              <p className="mt-4 text-muted">{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">Expertise visualization</p>
          <h2 className="text-4xl font-bold leading-none md:text-6xl">One studio, many disciplines.</h2>
        </Reveal>
        <Reveal className="panel grid min-h-[420px] grid-cols-2 gap-3 p-6 md:grid-cols-4">
          {["Research", "Interpretation", "Spatial Design", "Fabrication", "Film", "AR/VR", "Kiosks", "Signage"].map((item) => (
            <span key={item} className="grid place-items-center border border-white/15 bg-blacktop/70 p-4 text-center font-bold text-bone-soft">
              {item}
            </span>
          ))}
        </Reveal>
      </section>

      <section className="section-pad grid gap-5 lg:grid-cols-3">
        {values.map(([number, title, copy]) => (
          <Reveal key={number} className="panel min-h-64 p-8">
            <span className="font-display text-3xl text-gold">{number}</span>
            <h3 className="mt-10 text-2xl font-bold leading-tight">{title}</h3>
            <p className="mt-4 text-muted">{copy}</p>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
