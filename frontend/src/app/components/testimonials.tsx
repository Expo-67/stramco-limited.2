"use client";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      content:
        "Stramco Solutions transformed our HR processes completely. Their strategic approach helped us scale efficiently while maintaining our company culture.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "HR Director, InnovateLtd",
      content:
        "The recruitment services provided by Stramco are exceptional. They found us the perfect candidates who fit both our technical requirements and company values.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, StartupXYZ",
      content:
        "Their strategic management consultancy was exactly what we needed. The team provided actionable insights that drove real business results.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111827] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#60A5FA] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#9CA3AF] mb-4 text-pretty">
                  {testimonial.content}
                </p>
                <div>
                  <p className="font-semibold text-[#111827]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#9CA3AF]">
                    {testimonial.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
