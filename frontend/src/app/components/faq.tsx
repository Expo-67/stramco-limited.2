"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What services does Stramco Solutions offer?",
      answer:
        "We offer comprehensive strategic management consultancy, strategic plan development and audit, human resource services, training and development programs, and job vacancy assistance.",
    },
    {
      question: "How long does a typical strategic management project take?",
      answer:
        "Project timelines vary depending on scope and complexity. Most strategic planning projects take 6-12 weeks, while ongoing consultancy arrangements can be tailored to your needs.",
    },
    {
      question: "Do you work with companies of all sizes?",
      answer:
        "Yes, we work with organizations ranging from startups to large enterprises. Our solutions are customized to fit the specific needs and scale of each client.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have experience across various industries including technology, healthcare, manufacturing, finance, and professional services. Our consultants adapt their expertise to your industry's unique challenges.",
    },
    {
      question: "How do you ensure the quality of candidates for recruitment?",
      answer:
        "We use a rigorous screening process including skills assessment, cultural fit evaluation, and thorough background checks. Our 140+ successful placements demonstrate our commitment to quality.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111827] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Get answers to common questions about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-[#111827] hover:text-[#3B82F6]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#9CA3AF]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
