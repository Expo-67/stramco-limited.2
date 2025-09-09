"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Briefcase,
  Users,
  GraduationCap,
  ClipboardList,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import logo from "../images/logo-black.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "#",
      dropdown: [
        {
          label: "Strategic Management",
          href: "/pages/Strategymanagement",
          icon: Briefcase,
        },
        {
          label: "Human Resource Services",
          href: "/hr-services",
          icon: Users,
        },
        {
          label: "Training and Development",
          href: "/pages/traininganddev",
          icon: GraduationCap,
        },
        { label: "Careers", href: "/careers", icon: ClipboardList },
      ],
    },
    { label: "Recruitment", href: "/recruitment" },
    { label: "Strategic Management", href: "/pages/Strategymanagement" },
    { label: "Training & Development", href: "/pages/traininganddev" },
    { label: "Job Vacancy", href: "/pages/jobvaccancy" },
    { label: "Corporate Staffing", href: "/corporate-staffing" },
    { label: "Contact Us", href: "/pages/contact-us" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <Image
              src={logo}
              alt="Stramco Solutions"
              width={48}
              height={48}
              className="object-contain sm:w-[55px] sm:h-[55px]"
            />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              <span className="text-purple-600">Stramco</span>{" "}
              <span className="text-gray-700">Solutions</span>
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-gray-800 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 rounded-lg shadow-md border border-gray-100">
                      {item.dropdown.map((dropdownItem) => {
                        const Icon = dropdownItem.icon;
                        return (
                          <DropdownMenuItem key={dropdownItem.label} asChild>
                            <a
                              href={dropdownItem.href}
                              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 w-full px-2 py-2 rounded-md transition-colors"
                            >
                              <Icon className="h-4 w-4 text-gray-400" />
                              {dropdownItem.label}
                            </a>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-800 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-purple-600 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm shadow-md rounded-b-lg">
            <nav className="px-3 pt-3 pb-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <div className="text-gray-800 font-semibold px-3 py-2 text-sm border-b border-gray-100">
                        {item.label}
                      </div>
                      {item.dropdown.map((dropdownItem) => {
                        const Icon = dropdownItem.icon;
                        return (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="flex items-center gap-3 text-gray-600 hover:text-purple-600 hover:bg-gray-100 px-6 py-2 text-sm rounded-md transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <Icon className="h-4 w-4" />
                            {dropdownItem.label}
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-gray-800 hover:text-purple-600 hover:bg-gray-100 px-3 py-2 text-sm font-medium rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
