"use client";

import { useState } from "react";
import { Briefcase, MapPin, Building2, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "../../images/logo-black.png";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function JobVacancies() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova Ltd",
      location: "Nairobi, Kenya",
      logo: "/company1.png",
      description:
        "Responsible for building and maintaining user interfaces with React and Next.js.",
      requirements: [
        "2+ years experience with React/Next.js",
        "Knowledge of TailwindCSS",
        "Strong problem-solving skills",
      ],
      deadline: "2025-09-30",
      status: "Open",
    },
    {
      id: 2,
      title: "Hotel Receptionist",
      company: "GrandStay Hotels",
      location: "Mombasa, Kenya",
      logo: "/company2.png",
      description:
        "Handle guest check-ins, manage reservations, and provide excellent customer service.",
      requirements: [
        "Diploma in Hospitality Management",
        "Strong communication skills",
        "Experience with hotel booking systems",
      ],
      deadline: "2025-09-15",
      status: "Open",
    },
    {
      id: 3,
      title: "Accountant",
      company: "FinTrust Bank",
      location: "Kisumu, Kenya",
      logo: "/company3.png",
      description:
        "Prepare financial reports, handle transactions, and ensure compliance with regulations.",

      requirements: [
        "CPA / ACCA qualification",
        "3+ years experience in finance",
        "Attention to detail",
      ],
      deadline: "2025-10-01",
      status: "Closed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          💼 Job Vacancies
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-xl shadow-md">
              {/* Top section */}
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={logo}
                    alt={`${job.company} logo`}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{job.title}</h2>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Building2 className="w-4 h-4 mr-1" />
                    {job.company}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{job.location}</span>
              </div>
              <p>
                <strong>Deadline:</strong> {job.deadline}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`${
                    job.status === "Open"
                      ? "text-green-600 font-medium"
                      : "text-red-600 font-medium"
                  }`}
                >
                  {job.status}
                </span>
              </p>

              {/* Dropdown */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`job-${job.id}`}>
                  <AccordionTrigger>
                    <span className="text-sm font-medium">
                      View Job Details
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm text-gray-700 mt-2">
                      <p>
                        <strong>Job Title:</strong> {job.title}
                      </p>
                      <p>
                        <strong>Description:</strong> {job.description}
                      </p>
                      <p>
                        <strong>
                          Responsibilities: Develop systems using Laravel
                        </strong>{" "}
                        {job.responsibilities}
                      </p>
                      <p>
                        <strong>
                          Application channel: info@stramcosolutions.com
                        </strong>{" "}
                        {job.application}
                      </p>
                      <div>
                        <strong>Requirements:</strong>
                        <ul className="list-disc ml-6 mt-1">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <p>
                        <strong>Estimated salary: 200,000kshs</strong>{" "}
                        {job.salary}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
