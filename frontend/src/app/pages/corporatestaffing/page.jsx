
import { Briefcase, Users, Building2, Target, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Co-orperate Staffing- Stramco Solutions",
  description: "Learn more about co-operate staffing at Stramco Solutions and what we do."
}
export default function CorporateStaffingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Corporate Staffing</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Stramco, we provide tailored staffing solutions designed to help
            organizations find, retain, and manage the right talent. We connect
            businesses with skilled professionals who drive growth and
            innovation.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <Briefcase size={40} className="mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Staff Recruitment</h3>
          <p className="text-gray-600">
            We identify and match the best-fit candidates to meet your
            organization’s needs across all departments.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <Users size={40} className="mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Executive Search</h3>
          <p className="text-gray-600">
            Our expert headhunters connect you with top-level executives who can
            lead your business to new heights.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <Building2 size={40} className="mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Outsourcing</h3>
          <p className="text-gray-600">
            We manage entire staffing processes, from hiring to training, so you
            can focus on running your core business.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <Target size={40} className="mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Temporary Staffing</h3>
          <p className="text-gray-600">
            Flexible staffing solutions that help organizations scale up or down
            depending on project and seasonal needs.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Why Choose Stramco?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our staffing solutions go beyond filling positions. We ensure that
            every hire contributes to your organization’s growth, culture, and
            long-term success.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700">
                Deep industry knowledge and insights
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700">Access to a large talent pool</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700">Efficient and transparent process</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700">
                Customized solutions for every client
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700">
                Commitment to long-term partnerships
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700">Proven track record of success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Let’s Build Your Dream Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Partner with Stramco for effective staffing solutions that give your
          organization a competitive edge in today’s dynamic business world.
        </p>
        <Link
          href="/pages/contact-us"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
