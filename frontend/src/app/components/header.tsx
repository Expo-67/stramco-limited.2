"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "#",
      dropdown: [
        { label: "Strategic Management", href: "/strategic-management" },
        { label: "Human Resource Services", href: "/hr-services" },
        { label: "Training and Development", href: "/training-development" },
        { label: "Careers", href: "/careers" },
      ],
    },
    { label: "Recruitment", href: "/recruitment" },
    { label: "Strategic Management", href: "/strategic-management" },
    { label: "Training & Development", href: "/training-development" },
    { label: "Job Vacancy", href: "/job-vacancy" },
    { label: "Corporate Staffing", href: "/corporate-staffing" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">
              Stramco Solutions
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.label}>
                          <a href={dropdownItem.href} className="w-full">
                            {dropdownItem.label}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
