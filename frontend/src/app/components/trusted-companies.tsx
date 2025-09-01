export function TrustedCompanies() {
  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "Apple",
    "Meta",
    "Netflix",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600">
            We've helped organizations across various industries achieve their
            goals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company) => (
            <div key={company} className="flex items-center justify-center">
              <div className="text-xl font-semibold text-gray-400 hover:text-gray-600 transition-colors">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
