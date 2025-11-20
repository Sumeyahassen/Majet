import React from "react";

function HomeContant() {
  return (
    <div className="bg-[url('/bgi.png')] bg-no-repeat bg-cover bg-center  h-[78vh] ">
      <section className="text-center pt-32 px-6">
        <h2 className="text-4xl font-bold text-white mb-4">
          Smart Agro-Market Connection System
        </h2>
        <p className="text-gray-100  text-[1.3rem] max-w-xl mx-auto mb-6 pt-10 font-semibold">
          Majet connects farmers, marketers, and clients into one powerful
          ecosystem. Farmers share their products via agents, marketers bring
          them online, and clients buy fresh produce directly — digitally and
          easily.
        </p>
        <a
          href="/Signup"
          className="bg-lime-600 text-white px-6 py-4 mt-5 font-semibold rounded-xl hover:bg-green-400 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}

export default HomeContant;
