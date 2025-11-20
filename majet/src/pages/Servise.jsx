import React from "react";

const services = [
  {
    title: "Client Services",
    description:
      "Browse and order fresh agricultural products online directly from trusted sources.",
    icon: "🛒",
  },
  {
    title: "Marketer Services",
    description:
      "List your products, manage inventory, and sell directly to clients.",
    icon: "📦",
  },
  {
    title: "Agent Services",
    description:
      "Help farmers register and upload products via Deyall Calling System.",
    icon: "📞",
  },
];

export default function Services() {
  return (
    <div className="bg-lime-100 min-h-screen py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700">Our Services</h1>
        <p className="mt-6 text-gray-600 max-w-xl mx-auto text-xl">
          Majet provides tailored services for clients, marketers, and field
          agents.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-lime-700 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-28">
        <a
          href="/login"
          className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-8 py-4 rounded-xl transition"
        >
          Start Shopping Now
        </a>
      </div>
    </div>
  );
}
