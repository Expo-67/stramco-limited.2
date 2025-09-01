import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp, Briefcase } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Target,
      title: "Strategic Management",
      description:
        "Comprehensive strategic planning and management consulting to drive your business forward with clear objectives and actionable plans.",
      features: [
        "Strategic Plan Development",
        "Strategic Plan Audit",
        "Business Process Optimization",
        "Performance Management",
      ],
    },
    {
      icon: Users,
      title: "Human Resource Services",
      description:
        "Complete HR solutions including recruitment, talent management, and organizational development to build strong teams.",
      features: [
        "Talent Acquisition",
        "HR Policy Development",
        "Employee Relations",
        "Compensation & Benefits",
      ],
    },
    {
      icon: TrendingUp,
      title: "Training and Development",
      description:
        "Professional development programs and training solutions to enhance skills and capabilities across your organization.",
      features: [
        "Leadership Development",
        "Skills Training",
        "Team Building",
        "Professional Coaching",
      ],
    },
    {
      icon: Briefcase,
      title: "Careers",
      description:
        "Career guidance and job placement services connecting talented professionals with the right opportunities.",
      features: [
        "Career Counseling",
        "Job Placement",
        "Resume Development",
        "Interview Preparation",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive business solutions designed to transform
            your organization and drive sustainable growth through strategic
            expertise and innovative approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-gray-700 flex items-center"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
