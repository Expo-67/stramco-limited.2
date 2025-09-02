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
          href: "/strategic-management",
          icon: Briefcase,
        },
        {
          label: "Human Resource Services",
          href: "/hr-services",
          icon: Users,
        },
        {
          label: "Training and Development",
          href: "/training-development",
          icon: GraduationCap,
        },
        { label: "Careers", href: "/careers", icon: ClipboardList },
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo + Title */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <Image
              src={logo}
              alt="Stramco Solutions"
              width={40}
              height={40}
              className="object-contain sm:w-[50px] sm:h-[50px]"
            />
            <h2 className="text-base sm:text-lg font-semibold text-[#9CA3AF]">
              Stramco <span className="text-[#111827]">Solutions</span>
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-[#111827] hover:text-[#3B82F6] px-3 py-2 text-sm font-medium transition-colors">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      {item.dropdown.map((dropdownItem) => {
                        const Icon = dropdownItem.icon;
                        return (
                          <DropdownMenuItem key={dropdownItem.label} asChild>
                            <a
                              href={dropdownItem.href}
                              className="flex items-center gap-3 text-[#111827] hover:text-[#3B82F6] w-full"
                            >
                              <Icon className="h-4 w-4 text-[#9CA3AF]" />
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
                    className="text-[#111827] hover:text-[#3B82F6] px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#111827] hover:text-[#3B82F6] hover:bg-[#F3F4F6]"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#F3F4F6] bg-white">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <div className="text-[#111827] font-medium px-3 py-2 text-sm border-b border-[#F3F4F6]">
                        {item.label}
                      </div>
                      {item.dropdown.map((dropdownItem) => {
                        const Icon = dropdownItem.icon;
                        return (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#3B82F6] hover:bg-[#F3F4F6] px-6 py-2 text-sm transition-colors rounded-md"
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
                      className="block text-[#111827] hover:text-[#3B82F6] hover:bg-[#F3F4F6] px-3 py-2 text-sm font-medium transition-colors rounded-md"
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
