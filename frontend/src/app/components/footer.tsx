"use client";

import Image from "next/image";
import {
  Briefcase,
  Users,
  GraduationCap,
  ClipboardList,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import logo from "../images/logo-black.png";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 flex-shrink-0 mb-4">
              <Image
                src={logo}
                alt="Stramco Solutions"
                width={50}
                height={50}
                className="object-contain"
              />
              <h2 className="text-lg font-semibold text-gray-100">
                Stramco <span className="text-gray-400">Solutions</span>
              </h2>
            </div>
            <p className="text-gray-400">
              Strategic Management Experts That Care. Transforming businesses
              through comprehensive consultancy and HR solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">
              Services
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/pages/Strategymanagement"
                  className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors"
                >
                  <Briefcase className="w-4 h-4 text-[#3B82F6]" /> Strategic
                  Management
                </Link>
              </li>
              <li>
                <Link
                  href="/hr-services"
                  className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors"
                >
                  <Users className="w-4 h-4 text-[#3B82F6]" /> Human Resource
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/traininganddev"
                  className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors"
                >
                  <GraduationCap className="w-4 h-4 text-[#3B82F6]" /> Training
                  & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/jobvaccancy"
                  className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors"
                >
                  <Briefcase className="w-4 h-4 text-[#3B82F6]" />{" "}
                  Job-Vaccancies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#3B82F6]" />{" "}
                info@stramcosolutions.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#3B82F6]" /> +254 796-363-275
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#3B82F6]" /> Vision House
                Plaza, Mombasa Road, Kenya
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-[#3B82F6] transition"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-[#60A5FA] transition"
              >
                <Twitter className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-[#2563EB] transition"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Made with 💜 by redevops. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
