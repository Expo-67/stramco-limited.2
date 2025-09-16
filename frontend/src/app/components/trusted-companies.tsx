"use client";

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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111827] mb-4">
            More Companies We’ve Partnered With
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            We are proud to work alongside organizations across diverse
            industries, building strong partnerships that drive growth and
            success.
          </p>
        </div>

        {/* Company Names Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 
                         text-[#374151] font-medium transition transform hover:-translate-y-1"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
