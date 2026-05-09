"use client";

import { useRef } from "react";
import WorkCard from "@/components/WorkCard";

export default function FeaturedCarousel({ projects }) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({
      left: Math.round(node.clientWidth * 0.82) * direction,
      behavior: "smooth"
    });
  };

  return (
    <div className="grid items-center gap-4 md:grid-cols-[56px_minmax(0,1fr)_56px]">
      <button
        className="hidden h-14 w-14 border border-white/15 bg-white/5 font-bold transition hover:-translate-y-0.5 md:block"
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Previous featured project"
      >
        &lt;
      </button>
      <div
        ref={trackRef}
        className="grid auto-cols-[86%] grid-flow-col gap-6 overflow-x-auto pb-2 [scrollbar-color:#c99b4d_#1a1b18] md:auto-cols-[minmax(420px,48%)]"
        tabIndex={0}
      >
        {projects.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
      <button
        className="hidden h-14 w-14 border border-white/15 bg-white/5 font-bold transition hover:-translate-y-0.5 md:block"
        type="button"
        onClick={() => scroll(1)}
        aria-label="Next featured project"
      >
        &gt;
      </button>
    </div>
  );
}
