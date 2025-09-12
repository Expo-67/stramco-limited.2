"use client";

import { Users, Target, Eye, ShieldCheck } from "lucide-react";
import Image from "next/image";
import team from "../../images/team.jpg";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">About Stramco</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic Management Consultancy (Stramco) Solutions Ltd is a
            one-stop firm committed to delivering innovative, practical, and
            sustainable strategic management solutions that help organizations
            thrive in a rapidly evolving world.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            At Stramco, we work with clients to unlock long-term, sustainable
            growth by focusing on what customers truly value and are willing to
            invest in.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe growth is not just a reward but an opportunity to create
            lasting impact. By optimizing every lever of management — product,
            price, innovation, marketing, and sales — we equip organizations to
            outperform competitors and redefine their future.
          </p>
          <p className="text-gray-700 leading-relaxed">
            More than strategies and reports, we deliver real results and
            empower our clients to sustain meaningful change.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-8">
          <blockquote className="text-lg italic text-gray-600">
            “We go beyond strategies, reports, and recommendations. Our clients
            achieve{" "}
            <span className="font-semibold text-blue-600">real results</span>
            and are equipped to sustain the change.”
          </blockquote>
        </div>
      </section>

      {/* Mission, Vision, Core Values */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <Target size={36} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide timely, high-quality, and superior services that create
              value for our clients and give them a competitive edge.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <Eye size={36} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the premier strategic management consultancy in the region,
              trusted for building resilience and solving complex business
              challenges.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <ShieldCheck size={36} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Core Values</h3>
            <ul className="text-gray-600 space-y-2">
              <li>✔ Integrity</li>
              <li>✔ Professionalism</li>
              <li>✔ Teamwork</li>
              <li>✔ Flexibility</li>
              <li>✔ Customer Focus</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Behind every success story is a team of passionate professionals. Our
          consultants bring expertise, innovation, and dedication to help
          organizations achieve lasting impact.
        </p>
        <div className="flex justify-center">
          <Image
            src={team}
            alt="Our Team"
            width={900}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16 text-center">
        <Users size={40} className="mx-auto text-blue-600 mb-4" />
        <h2 className="text-2xl font-bold mb-4">Partner with Stramco</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Let us help you innovate, grow, and achieve sustainable success.
          Together, we can redefine the future of your organization.
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
