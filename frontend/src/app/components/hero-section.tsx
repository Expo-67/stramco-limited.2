"use client";

import { motion } from "framer-motion";
import { StatsCard } from "../components/stats-card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";
import backgroundImage from "../images/back 2.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
          priority
          fill
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Decorative animated accents */}
      <motion.div
        className="pointer-events-none absolute -top-10 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-500/30 to-amber-500/30 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 drop-shadow-sm mb-6 leading-tight"
        >
          Stramco Solutions
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white mb-8 font-medium"
        >
          Strategic Management Experts That Care
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Transform your business with our comprehensive strategic management
          consultancy, strategic plan development, strategic plan audit, Human
          Resource Services, and Job Vacancies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button
            asChild
            className="h-11 px-6 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
          >
            <a href="/pages/contact-us">Contact-us</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 px-6 text-base text-black"
          >
            <a href="/#services">Explore Services</a>
          </Button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          <StatsCard number="5+" label="Kenyan Companies Served" />
          <StatsCard number="10+" label="Professionals Placed" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{ duration: 1.6, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <ChevronsDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
