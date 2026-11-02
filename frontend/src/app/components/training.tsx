"use client";

import React, { useRef, useState } from "react";

/*
 * ── IMAGES: just replace the 11 files ───────────────────────────────────────
 * Create a folder called `training-images` next to this file and put your
 * 11 photos in it named photo-1.jpg … photo-11.jpg (same names, same order).
 * To use another event later, overwrite those 11 files, nothing else to change.
 * (Different format? Change .jpg to .png/.webp in these 11 lines.)
 */
import photo1 from "../images/t1.jpeg";
import photo2 from "../images/t2.jpeg";
import photo3 from "../images/t3.jpeg";
import photo4 from "../images/t4.jpeg";
import photo5 from "../images/t5.jpeg";
import photo6 from "../images/t6.jpeg";
import photo7 from "../images/t7.jpeg";
import photo8 from "../images/t8.jpeg";
import photo9 from "../images/t9.jpeg";
import photo10 from "../images/t10.jpeg";
import photo11 from "../images/t11.jpeg";

// Next.js imports images as objects ({ src, width, height }); Vite/CRA as strings.
type ImportedImage = string | { src: string };
const urlOf = (img: ImportedImage) => (typeof img === "string" ? img : img.src);

/**
 * Stramco Solutions – Training showcase reel
 * Equity Hope Light Group:  Training & Team Building
 *
 * Needs React 18+ and Tailwind CSS. No carousel library, and no JavaScript timers:
 * the progress bar's CSS animation is the clock (see "How it works" below).
 *
 * ── EDIT HERE ───────────────────────────────────────────────────────────────
 * Replace the 11 entries below to reuse this section for another training event.
 */
const SLIDE_MS = 4000; // time each photo is shown (milliseconds)

type TrainingImage = {
  image: ImportedImage; // the imported photo above
  alt: string; // describe what is in the photo (for screen readers)
  title: string;
  description: string;
  position?: string; // CSS object-position, e.g. "50% 25%" to keep faces in frame
};

const heading = {
  eyebrow: " CUSTOMER CARE TRAINING & TEAM BUILDING",
  title: "Equity Hope Light Group",
  text: "Building stronger teams, improving customer experiences and empowering people to perform at their best.",
};

const trainingImages: TrainingImage[] = [
  { image: photo1, alt: "Equity Hope Light Group staff taking part in  training", title: " Training", description: "Equity Hope Light Group", position: "50% 30%" },
  { image: photo2, alt: "Participants engaged in an interactive session", title: "Learning & Engagement", description: "Interactive customer care sessions", position: "50% 30%" },
  { image: photo3, alt: "Team members taking part in a team building activity", title: "Team Building", description: "Strengthening collaboration and teamwork", position: "50% 30%" },
  { image: photo4, alt: "Participants joining in an interactive training session", title: "Interactive Sessions", description: "Learning through participation", position: "50% 30%" },
  { image: photo5, alt: "Staff developing service skills during the training", title: "Staff Development", description: "Building skills for better service", position: "50% 30%" },
  { image: photo6, alt: "Colleagues collaborating during a group activity", title: "Team Collaboration", description: "Creating stronger working relationships", position: "50% 30%" },
  { image: photo7, alt: "Participants practising what they learned", title: "Practical Learning", description: "Turning knowledge into action", position: "50% 30%" },
  { image: photo8, alt: "Participants working together on a group activity during the training", title: "Group Activities", description: "Learning and having fun together", position: "50% 30%" },
  { image: photo9, alt: "Participants actively involved in a training session", title: "Active Participation", description: "Everyone involved, every step of the way", position: "50% 30%" },
  { image: photo10, alt: "Participants celebrating together during the training", title: "Celebrating Progress", description: "Recognising effort and achievement", position: "50% 30%" },
  { image: photo11, alt: "The whole Equity Hope Light Group team together at the end of the training", title: "Growing Together", description: "Empowering people and strengthening teams", position: "50% 30%" },
];
// ────────────────────────────────────────────────────────────────────────────

/*
 * How it works
 * - Infinite loop: every slide is always mounted. Each one is placed by its
 *   *relative* position to the active slide, wrapped around the list
 *   (… -1 prev, 0 active, +1 next, +2 …). When the index goes 11 → 1, slide 1
 *   simply slides from "next" into "active" and slide 11 into "previous", so
 *   there is no rewind or jump. Slides further away are invisible.
 * - Timer: the active progress bar runs a CSS animation lasting SLIDE_MS.
 *   When it ends (onAnimationEnd) we move to the next photo. Changing the
 *   slide re-keys the bar so it restarts. No setInterval/setTimeout exists,
 *   so there is nothing to clean up and two timers can never overlap.
 * - Pausing: animation-play-state is "paused" while hovering, focusing or
 *   touching the gallery, so the bar freezes and resumes where it stopped.
 */

const n = trainingImages.length;

/** Signed distance from the active slide, wrapped to the range [-n/2, n/2). */
const relative = (i: number, active: number) =>
  ((i - active + n + n / 2) % n) - n / 2;

export default function TrainingShowcase() {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const paused = hovering || focused || touching;
  const go = (d: number) => setIndex((i) => (i + d + n) % n);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={`${heading.title} training photos`}
      className="overflow-x-clip bg-white px-4 py-16 text-black sm:px-6 sm:py-24"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <style>{`
        @keyframes stramco-fill { from { width: 0% } to { width: 100% } }
        .stramco-fill { animation-name: stramco-fill; animation-timing-function: linear; animation-fill-mode: forwards; }
        .stramco-slide { transition: transform 900ms cubic-bezier(.22,.61,.36,1), opacity 900ms ease; }
        @media (prefers-reduced-motion: reduce) {
          .stramco-fill { animation: none; width: 100%; }
          .stramco-slide { transition: none; }
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <header className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-neutral-600">
            {heading.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
            {heading.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-700">
            {heading.text}
          </p>
        </header>

        {/* Reel */}
        <div
          className="relative mt-10 h-[26rem] touch-pan-y select-none overflow-hidden sm:h-[30rem] md:h-[34rem]"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onTouchStart={(e) => {
            setTouching(true);
            touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          }}
          onTouchEnd={(e) => {
            setTouching(false);
            const s = touchStart.current;
            touchStart.current = null;
            if (!s) return;
            const dx = e.changedTouches[0].clientX - s.x;
            const dy = e.changedTouches[0].clientY - s.y;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
          }}
          onTouchCancel={() => {
            setTouching(false);
            touchStart.current = null;
          }}
        >
          {trainingImages.map((item, i) => {
            const rel = relative(i, index);
            const isActive = rel === 0;
            const near = Math.abs(rel) <= 1;
            const clamped = Math.max(-2, Math.min(2, rel));
            return (
              <figure
                key={i}
                aria-hidden={!isActive}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${n}`}
                className="stramco-slide absolute left-0 top-0 m-0 h-full w-full overflow-hidden bg-neutral-200 md:w-[74%]"
                style={{
                  transform: `translateX(${clamped * 104}%) scale(${isActive ? 1 : 0.92})`,
                  transformOrigin: "left center",
                  opacity: isActive ? 1 : rel === 1 ? 0.5 : 0,
                  pointerEvents: near && !isActive ? "auto" : "none",
                  cursor: rel === 1 ? "pointer" : "default",
                  zIndex: isActive ? 2 : 1,
                }}
                onClick={rel === 1 ? () => setIndex(i) : undefined}
              >
                <img
                  src={urlOf(item.image)}
                  alt={item.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: item.position ?? "50% 30%" }}
                />
                <figcaption
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-5 pb-5 pt-16 text-white transition-opacity duration-700 sm:px-7 sm:pb-6"
                  style={{ opacity: isActive ? 1 : 0 }}
                >
                  <p className="text-lg font-semibold sm:text-xl">{item.title}</p>
                  <p className="mt-0.5 text-sm text-white/85 sm:text-base">{item.description}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Progress indicators */}
        <ol
          className="mt-6 flex items-center gap-1.5 sm:gap-2"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {trainingImages.map((item, i) => {
            const isActive = i === index;
            return (
              <li key={i} className={isActive ? "w-14 sm:w-28" : "w-4 sm:w-8"} style={{ transition: "width 500ms ease" }}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show photo ${i + 1} of ${n}: ${item.title}`}
                  aria-current={isActive}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="group flex h-8 w-full items-center focus:outline-none"
                >
                  <span className="relative block h-[3px] w-full overflow-hidden bg-black/20 group-hover:bg-black/40 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-black">
                    {isActive && (
                      <span
                        key={index}
                        className="stramco-fill absolute left-0 top-0 block h-full bg-black"
                        style={{
                          animationDuration: `${SLIDE_MS}ms`,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                        onAnimationEnd={() => go(1)}
                      />
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}