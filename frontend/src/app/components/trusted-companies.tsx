"use client";

import { motion } from "framer-motion";

export function TrustedCompanies() {
  const companies = [
    "St Ernest Hospital",
    "Soulfa Lounge",
    "Mtaani Telecom",
    "Maisha Home",
    "Midone Stores",
    "Inter County Investment Group",
    "Hopelight Group",
  ];

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#111827] mb-4">
            More Companies We’ve Partnered With
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            We are proud to work alongside organizations across diverse
            industries, building strong partnerships that drive growth and
            success.
          </p>
        </motion.div>

        {/* Company Names Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="px-6 py-4 bg-white rounded-xl shadow-md border border-gray-100 text-[#374151] font-medium transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              {company}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
