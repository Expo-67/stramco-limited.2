
import {
  Users,
  GraduationCap,
  FileText,
  Scale,
  Handshake,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
export const metadata = {
  title: "HR -Services- Stramco Solutions",
  description: "Learn more about HR-Services at  Stramco Solutions and what we do."
}
export default function HumanResourceServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Human Resource Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Stramco, we provide holistic Human Resource solutions that
            empower organizations to attract, retain, and develop top talent
            while maintaining compliance and a positive workplace culture.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <Users size={40} className="mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">HR Advisory</h3>
          <p className="text-gray-600">
            Strategic HR consulting that aligns your workforce with your
            business goals for sustainable growth.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <GraduationCap size={40} className="mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Training & Development</h3>
          <p className="text-gray-600">
            Customized training programs to build employee skills, leadership,
            and performance excellence.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <FileText size={40} className="mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Payroll Management</h3>
          <p className="text-gray-600">
            Efficient payroll solutions that ensure accuracy, compliance, and
            timely employee payments.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <Scale size={40} className="mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Compliance & Policy</h3>
          <p className="text-gray-600">
            Guidance on labor laws, regulations, and internal policies to keep
            your organization compliant.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <Handshake size={40} className="mx-auto text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Employee Relations</h3>
          <p className="text-gray-600">
            Support in building strong employer-employee relationships that
            foster trust and productivity.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Why Partner with Stramco?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We go beyond HR management — we empower organizations to unlock the
            full potential of their people, enabling growth, innovation, and
            long-term success.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700">End-to-end HR support</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700">Experienced HR professionals</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700">
                Solutions tailored to your industry
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700">
                Compliance and risk management expertise
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700">Focus on employee engagement</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 mt-1" size={24} />
              <p className="text-gray-700">
                Proven impact on business outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Transform Your HR Strategy with Stramco
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Let us help you create a people-centered strategy that ensures your
          workforce is empowered, engaged, and driving success.
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
