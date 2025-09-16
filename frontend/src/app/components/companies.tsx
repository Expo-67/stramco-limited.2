"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import your logos
import mtaani from "../images/MTAANILOGO.png";
import maisha from "../images/maisha.png";
import inter from "../images/interz.jpg";

const logos = [
  { src: mtaani, alt: "Mtaani Telecom" },
  { src: maisha, alt: "Maisha Home" },
  { src: inter, alt: "Inter County Investment" },
  { src: mtaani, alt: "St Ernest Hospital" }, // if no logo, you can repeat or replace with text
  { src: maisha, alt: "Midone Stores" },
  { src: inter, alt: "Hopelight Group" },
];

export default function CompaniesCarousel() {
  return (
    <section className="py-16 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#111827] mb-4">
          Companies We’ve Worked With
        </h2>

        {/* Carousel Container */}
        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex space-x-16"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-20 relative">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
