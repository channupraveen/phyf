"use client";

import { useRef } from "react";
import Crop from "./Crop";
import { gallery } from "@/content";

export default function Gallery() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <div>
      <div ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 scroll-px-5 md:px-[max(1.25rem,calc((100vw_-_80rem)/2_+_1.25rem))] md:scroll-px-[max(1.25rem,calc((100vw_-_80rem)/2_+_1.25rem))]">
        {gallery.map((g, i) => (
          <article
            key={g.title}
            className="group w-[82vw] shrink-0 snap-start sm:w-[60vw] md:w-[42vw] lg:w-[30rem]"
          >
            <p className="mb-3 text-sm font-semibold">{g.title}</p>
            <div className="relative overflow-hidden rounded-3xl bg-black">
              <Crop
                label={`phyf shaker close-up: ${g.title}`}
                focus={g.focus}
                zoom={g.zoom}
                className="aspect-[4/5] w-full transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                0{i + 1}
              </span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.tags.map((t) => (
                <li key={t} className="rounded-full border border-black/15 px-3 py-1 text-xs font-medium">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-black/60">{g.body}</p>
            <a href="#shop" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
              Explore more <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl justify-end gap-3 px-5">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-black/20 transition hover:bg-ink hover:text-white">
          ←
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-black/20 transition hover:bg-ink hover:text-white">
          →
        </button>
      </div>
    </div>
  );
}
