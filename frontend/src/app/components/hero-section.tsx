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
          alt="Strategic business analytics workspace"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          priority
          fill
          quality={95}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Enhanced gradient overlay with better depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/60 to-black/70"></div>
        {/* Additional subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Decorative animated accents - Enhanced for better visibility */}
      <motion.div
        className="pointer-events-none absolute -top-10 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-400/40 to-purple-400/40 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-400/40 to-amber-400/40 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Additional subtle glow effects */}
      <motion.div
        className="pointer-events-none absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-cyan-300/20 to-blue-300/20 blur-2xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
        {/* Subtle backdrop for content */}
        <div className="absolute inset-0 backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 shadow-2xl" />
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 drop-shadow-lg mb-6 leading-tight"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3)) drop-shadow(0 0 20px rgba(147,51,234,0.3))'
          }}
        >
          Stramco Solutions
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative text-xl md:text-2xl text-white mb-8 font-medium drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
          }}
        >
          Strategic Management Experts That Care
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="relative text-lg md:text-xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'
          }}
        >
          Transform your business with our comprehensive strategic management
          consultancy, strategic plan development, strategic plan audit, Human
          Resource Services, and Job Vacancies.
        </motion.p>


        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 px-4"
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
