"use client";

import { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Target, TrendingUp, Briefcase, Building2 } from "lucide-react";

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Target,
      title: "HR Outsourcing",
      description:
        "Comprehensive HR solutions including recruitment, talent management, and organizational development to build strong teams.",
      features: ["Recruitment and Selection", "Training & Development"],
    },
    {
      icon: Users,
      title: "HR Consultancy",
      description:
        "HR advisory services to optimize workforce performance, enhance engagement, and align strategies with business goals.",
      features: ["Interviewing Guidelines", "Workplace Policies"],
    },
    {
      icon: TrendingUp,
      title: "HR Audit",
      description:
        "Investigative and analytical HR audit services to assess and enhance the effectiveness of HR functions.",
      features: ["Leadership Development", "Skills Training"],
    },
    {
      icon: Briefcase,
      title: "Recruitment & Staffing",
      description:
        "End-to-end recruitment and staffing solutions to attract, evaluate, and onboard top talent for organizational success.",
      features: ["Career Counseling", "Job Placement"],
    },
    {
      icon: Building2,
      title: "Payroll Processing",
      description:
        "Flexible payroll outsourcing services that save time, ensure compliance, reduce costs, and minimize errors for businesses.",
      features: ["Time & Cost Savings", "Labor Law Compliance"],
    },
    {
      icon: Users,
      title: "Workload Analysis",
      description:
        "Customized programs to allocate tasks effectively, optimize resources, and promote employee well-being.",
      features: ["Resource Optimization", "Employee Well-being"],
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Human Resource Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide business solutions designed to transform your
            organization and drive sustainable growth through strategic
            expertise and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <Card
                key={index}
                className={`h-full border-0 shadow-lg transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-xl group cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                ref={(el) => {
                  if (el) {
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting) {
                          setVisibleCards((prev) =>
                            prev.includes(index) ? prev : [...prev, index]
                          );
                          observer.unobserve(el);
                        }
                      },
                      { threshold: 0.2 }
                    );
                    observer.observe(el);
                  }
                }}
              >
                <CardHeader className="text-center relative">
                  <div className="mx-auto mb-5 p-5 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full shadow-lg transform transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm text-gray-500 group-hover:text-gray-700">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-center text-sm text-gray-700 transition-all ${
                          isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-4"
                        }`}
                        style={{
                          transitionDelay: `${
                            index * 150 + featureIndex * 75
                          }ms`,
                        }}
                      >
                        <span className="w-2 h-2 mr-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Animations */}
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
