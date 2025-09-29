"use client";

import { useEffect } from "react";
import { Briefcase, MapPin, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useJobStore from "../../../../store/UseJobsStore.js"; // ✅ import store
import logo from "../../images/logo-black.png";

export default function JobVacancies() {
  const { jobs, fetchJobs, loading, error } = useJobStore();

  // ✅ Fetch jobs on page load
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          💼 Job Vacancies
        </h1>

        {/* Loading and Error States */}
        {loading && <p className="text-blue-600">Loading jobs...</p>}
        {error && <p className="text-red-600">❌ {error}</p>}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.length === 0 && !loading && (
            <p className="text-gray-600">No job vacancies available.</p>
          )}

          {jobs.map((job) => (
            <div key={job._id} className="bg-white p-6 rounded-xl shadow-md">
              {/* Top section */}
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={logo} // ✅ Replace with company logo if available
                    alt={`${job.company?.name || "Company"} logo`}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{job.title}</h2>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Building2 className="w-4 h-4 mr-1" />
                    {job.company?.name || "Unknown Company"}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{job.location}</span>
              </div>
              <p>
                <strong>Deadline:</strong>{" "}
                {new Date(job.deadline).toLocaleDateString()}
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

              {/* Dropdown for job details */}
              <Accordion type="single" collapsible className="w-full mt-2">
                <AccordionItem value={`job-${job._id}`}>
                  <AccordionTrigger>
                    <span className="text-sm font-medium">
                      View Job Details
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm text-gray-700 mt-2">
                      <p>
                        <strong>Description:</strong> {job.description}
                      </p>
                      <p>
                        <strong>Responsibilities:</strong>{" "}
                        {job.responsibilities}
                      </p>
                      <p>
                        <strong>Application channel:</strong>{" "}
                        {job.applicationChannel}
                      </p>
                      <div>
                        <strong>Requirements:</strong>
                        <ul className="list-disc ml-6 mt-1">
                          {job.requirements
                            ?.split(",")
                            .map((req, index) => (
                              <li key={index}>{req.trim()}</li>
                            ))}
                        </ul>
                      </div>
                      <p>
                        <strong>Salary:</strong> {job.salary}
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
