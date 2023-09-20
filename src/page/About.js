import React from "react";
import Footer from "../component/Footer";

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center mb-8">
          About Our Company
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              risus auctor, gravida tortor eget, viverra ligula. Fusce posuere.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <h2 className="text-2xl font-semibold mb-4">Our Food</h2>
            <p className="text-gray-700">
              Nulla facilisi. Morbi tempus, neque eu egestas vehicula, turpis
              tortor semper felis, vel auctor libero nulla sit amet justo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <h2 className="text-2xl font-semibold mb-4">Our Policy</h2>
            <p className="text-gray-700">
              Integer rutrum justo a orci pretium, eu faucibus erat luctus. Sed
              bibendum, magna ut dignissim ultrices, justo tortor imperdiet
              dolor.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <h2 className="text-2xl font-semibold mb-4">Delivery Services</h2>
            <p className="text-gray-700">
              Vivamus non diam vel metus venenatis luctus. Nulla facilisi.
              Vivamus accumsan libero a arcu hendrerit tristique.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
            <p className="text-gray-700">
              Maecenas in lacus tempus, bibendum neque at, eleifend lorem. Nulla
              facilisi. Curabitur vestibulum quam ut justo facilisis.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              risus auctor, gravida tortor eget, viverra ligula. Fusce posuere.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
