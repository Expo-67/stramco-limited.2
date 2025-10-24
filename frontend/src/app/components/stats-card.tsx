"use client";

import { useState, useEffect, useRef } from "react";

interface StatsCardProps {
  number: string;
  label: string;
}

export function StatsCard({ number, label }: StatsCardProps) {
  const targetNumber = Number.parseInt(number.replace(/\D/g, ""));
  const suffix = number.replace(/\d/g, "");

  const [currentNumber, setCurrentNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCurrentNumber(targetNumber);
        clearInterval(timer);
      } else {
        setCurrentNumber(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
    <div 
      ref={ref} 
      className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-105 min-w-[200px]"
      style={{
        filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))'
      }}
    >
      <div 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
        style={{
          filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4))'
        }}
      >
        {currentNumber}
        {suffix}
      </div>
      <div 
        className="text-white/95 text-sm sm:text-base md:text-lg font-semibold leading-tight"
        style={{
          filter: 'drop-shadow(0 1px 4px rgba(0, 0, 0, 0.4))'
        }}
      >
        {label}
      </div>
    </div>
  );
}
