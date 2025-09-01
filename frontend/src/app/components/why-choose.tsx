import { CheckCircle, Users, Target, Award } from "lucide-react";

export function WhyChoose() {
  const features = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description:
        "Over 23 Kenyan companies trust us with their strategic management and HR needs",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our experienced consultants bring deep industry knowledge and practical solutions",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description:
        "We customize our approach to meet your specific business objectives and challenges",
    },
    {
      icon: Award,
      title: "Quality Results",
      description:
        "140+ professionals successfully placed with measurable impact on business growth",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Stramco Solutions?
          </h2>
          <p className="text-lg text-gray-600">
            We deliver exceptional results through strategic expertise and
            personalized service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
