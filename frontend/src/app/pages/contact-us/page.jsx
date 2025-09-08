"use client";

import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ContactForm } from "../../components/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="max-w-3xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Contact Us
          </h1>
          <p className="mb-6 text-gray-700 text-center">
            Have questions or want to work with us? Fill out the form below and
            we’ll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
