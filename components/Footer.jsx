import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid gap-12 border-t border-white/15 bg-blacktop px-5 py-16 md:grid-cols-[1.3fr_0.7fr_1fr] md:px-8">
      <div>
        <Link className="mb-6 inline-flex items-center gap-3 font-bold" href="/">
          <span className="brand-symbol" aria-hidden="true" />
          <span>
            Chromosome <strong className="text-gold">Designs</strong>
          </span>
        </Link>
        <p className="max-w-sm text-muted">
          Immersive exhibits, interpretation centers, public installations, and educational environments.
        </p>
      </div>
      <nav className="grid content-start gap-3 text-muted" aria-label="Footer links">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <address className="grid content-start gap-3 not-italic text-muted">
        <a href="mailto:info@chromosomedesigns.com">info@chromosomedesigns.com</a>
        <a href="tel:+919924323897">+91 99243 23897</a>
        <span>Ahmedabad, India</span>
      </address>
    </footer>
  );
}
