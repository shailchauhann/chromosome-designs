import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <div className="site-container pt-[120px]">
      <section className="grid min-h-[500px] content-end border-b border-white/15 py-20">
        <Reveal>
          <p className="eyebrow">Inquiries</p>
          <h1 className="max-w-5xl text-5xl font-bold leading-none md:text-7xl">
            Let us shape your next public experience.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-bone-soft">
            For museums, interpretation centers, science parks, wildlife sanctuaries, institutions, and public
            infrastructure organizations.
          </p>
        </Reveal>
      </section>

      <section className="section-pad grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ContactForm />
        </Reveal>
        <Reveal className="panel grid gap-6 p-7">
          <div
            className="relative min-h-[330px] border border-white/15 bg-[linear-gradient(90deg,rgba(244,239,229,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(244,239,229,0.08)_1px,transparent_1px),radial-gradient(circle_at_56%_52%,rgba(201,155,77,0.24),transparent_10rem)] bg-[length:64px_64px,64px_64px,auto] bg-panel"
            role="img"
            aria-label="Stylized studio map for Ahmedabad, India"
          >
            <span className="absolute left-[56%] top-[48%] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold after:absolute after:inset-2 after:rounded-full after:bg-ink" />
          </div>
          <address className="grid gap-3 not-italic text-bone-soft">
            <strong className="text-xl text-bone">Chromosome Designs Studio</strong>
            <span>G301, Sureel Willows, Ghuma, Bopal, Ahmedabad</span>
            <a href="mailto:cavinish@gmail.com">cavinish@gmail.com</a>
            <a href="tel:+919924323897">+91 99243 23897</a>
          </address>
          <div className="flex gap-3" aria-label="Social media">
            {["in", "ig", "fb"].map((item) => (
              <a key={item} className="grid h-12 w-12 place-items-center border border-white/15 font-bold text-gold" href="#">
                {item}
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
