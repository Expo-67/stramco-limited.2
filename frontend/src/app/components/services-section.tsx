"use client";

import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp, Briefcase } from "lucide-react";

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Target,
      title: "HR Outsourcing",
      description:
        "Comprehensive HR solutions including recruitment, talent management, and organizational development to build strong teams.",
      features: [
        "Recruitment and selection",
        "Training,Development and Research",
      ],
    },
    {
      icon: Users,
      title: "HR Consultancy",
      description:
        "hR advisory services to optimize workforce performance, enhance employee engagement, and align HR strategies with business goals.",
      features: [
        "Interviewing Dos and Donts",
        "Workplace Policies and Procedures",
      ],
    },
    {
      icon: TrendingUp,
      title: "HR Audit",
      description:
        "Hr audit being an investigative, analytical, and comparative process that attempts to reflect the effectiveness of the HR function.",
      features: ["Leadership Development", "Skills Training"],
    },
    {
      icon: Briefcase,
      title: "Recruitment Services & Staffing",
      description:
        "End-to-end recruitment and staffing solutions to attract, evaluate, and onboard top talent that drives organizational success.",
      features: ["Career Counseling", "Job Placement"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of cards
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 200); // 200ms delay between each card
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-[#111827] mb-4">
            Our Human Resource Services
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-3xl mx-auto">
            We provide comprehensive business solutions designed to transform
            your organization and drive sustainable growth through strategic
            expertise and innovative approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <Card
                key={index}
                className={`h-full transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-xl group cursor-pointer border-0 shadow-lg ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader className="text-center relative overflow-hidden">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-full w-fit transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-[#111827] group-hover:text-[#3B82F6] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-[#9CA3AF] group-hover:text-[#111827] transition-colors duration-300">
                    {service.description}
                  </CardDescription>

                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-[#60A5FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`text-sm text-[#111827] flex items-center transform transition-all duration-300 ${
                          isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-4"
                        }`}
                        style={{
                          transitionDelay: `${
                            index * 100 + featureIndex * 50
                          }ms`,
                        }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full mr-3 flex-shrink-0 transform transition-all duration-300 group-hover:scale-125"></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:border-[#60A5FA] group-hover:text-[#60A5FA] hover:bg-gradient-to-r hover:from-[#3B82F6] hover:to-[#60A5FA]"
                  >
                    <span className="relative z-10">Learn More</span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}
