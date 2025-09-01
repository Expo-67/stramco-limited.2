import { StatsCard } from "../components/stats-card";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/modern-office-space-with-glass-windows-and-contemp.png')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
          Stramco Solutions
        </h1>

        <h2 className="text-xl md:text-2xl text-white mb-8 font-medium">
          Strategic Management Experts That Care
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto text-pretty">
          Transform your business with our comprehensive strategic management
          consultancy, strategic plan development, strategic plan audit, Human
          Resource Services and Job vacancies
        </p>

        {/* Statistics */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <StatsCard number="23+" label="Kenyan Companies Served" />
          <StatsCard number="140+" label="Professionals Placed" />
        </div>
      </div>
    </section>
  );
}
