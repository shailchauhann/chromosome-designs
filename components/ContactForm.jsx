"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  return (
    <form
      className="grid gap-5 md:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("Thank you. Your inquiry is ready to be routed to the studio team.");
        event.currentTarget.reset();
      }}
    >
      <label className="grid gap-2 font-bold text-bone-soft">
        Name
        <input className="border border-white/15 bg-white/5 p-4 text-bone" name="name" autoComplete="name" required />
      </label>
      <label className="grid gap-2 font-bold text-bone-soft">
        Organization
        <input className="border border-white/15 bg-white/5 p-4 text-bone" name="organization" autoComplete="organization" />
      </label>
      <label className="grid gap-2 font-bold text-bone-soft">
        Email
        <input
          className="border border-white/15 bg-white/5 p-4 text-bone"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </label>
      <label className="grid gap-2 font-bold text-bone-soft">
        Project type
        <select className="border border-white/15 bg-white/5 p-4 text-bone" name="project-type">
          <option className="text-ink">Interpretation center</option>
          <option className="text-ink">Museum exhibit</option>
          <option className="text-ink">Wildlife / zoo project</option>
          <option className="text-ink">Science park</option>
          <option className="text-ink">Public sculpture</option>
          <option className="text-ink">AR/VR experience</option>
        </select>
      </label>
      <label className="grid gap-2 font-bold text-bone-soft md:col-span-2">
        Brief
        <textarea className="min-h-40 border border-white/15 bg-white/5 p-4 text-bone" name="brief" required />
      </label>
      <button className="button button-solid" type="submit">
        Send inquiry
      </button>
      <p className="min-h-7 text-gold md:col-span-2" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
