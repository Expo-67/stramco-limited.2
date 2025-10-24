
import React from "react";
export const metadata = {
  title: "Training and Development- Stramco Solutions",
  description: "Learn more about Stramco Solutions and our training and development."
}
const TrainingDevelopment = () => {
  const trainingFields = [
    "Training and Development Consultancy",
    "Team Management and Supervisory Skills",
    "Performance Management",
    "Strategic Management",
    "Customer Services",
    "Leadership and Management",
    "Business Communication Skills",
    "Sales and Management",
    "Financial Management",
    "Change Management",
    "Soft Skills",
    "Team Building",
    "Retirement Training",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 leading-relaxed">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#111827]">
        Training & Development
      </h2>

      <p className="mb-4">
        Firm performance is vital for competitiveness, yet many organizations
        struggle despite having good strategies. Training and development play a
        key role in improving employee competence, commitment, and overall
        performance.
      </p>

      <p className="mb-4">
        At Stramco Solutions Ltd, we begin with a training needs assessment to
        better understand employees and managers. This allows us to customize
        programs, maintain confidentiality, and ensure impactful outcomes that
        align both personal and organizational goals.
      </p>

      <p className="mb-6">
        Our goal is to enhance efficiency, effectiveness, and professionalism
        while equipping participants with skills that drive superior
        performance.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-[#111827]">
        Training Fields We Offer
      </h3>
      <ul className="list-disc list-inside space-y-2">
        {trainingFields.map((field, index) => (
          <li key={index} className="text-gray-700">
            {field}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingDevelopment;
