import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/one.png";
import image2 from "../assets/two.png";
import image3 from "../assets/three.png";
import image4 from "../assets/four.png";

export default function About() {
  return (
    <div className="bg-[url('/bgia.png')] h-screen flex flex-col justify-center items-center bg-cover bg-center ">
      {/* Hero Section */}
      <div className=" text-white">
        <h1 className="text-5xl font-bold drop-shadow-lg pt-10">
          Connecting Farmers and Buyers
        </h1>
        <p className="mt-4 text-lg bg-black/40 px-4 py-2  text-center rounded-lg">
          Fresh, Sustainable, and Locally Grown Products
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h1 className="text-3xl font-bold text-green-100 mb-4">Our Mission</h1>
        <p className="text-xl font-semibold text-white leading-relaxed ">
          Our mission is to make it easy for local farmers to reach customers
          online and for everyone to buy fresh, organic agricultural products
          directly from trusted sources.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="h-full w-screen  opacity-80 rounded-xl py-22 mb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-3">
          {[
            { title: "Fresh & Organic", emoji: image1 },
            { title: "Direct from Farmers", emoji: image2 },
            { title: "Eco Friendly", emoji: image3 },
            { title: "Fair Prices", emoji: image4 },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-lime-50 shadow-lg p-10 rounded-xl text-center hover:scale-105 transition"
            >
              <img
                src={item.emoji}
                alt={item.title}
                className="w-28 h-30 mb-4"
              />
              <h3 className="font-semibold text-lg text-lime-700">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16">
        <h3 className="text-5xl font-bold mb-4 text-gray-700">
          Ready to Explore Our Fresh Products?
        </h3>
        <Link
          to="/login"
          className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
