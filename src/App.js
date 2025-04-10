
import React from "react";

function ServiceCard({ title, description }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-800">
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-4xl font-bold mb-4 text-center">Nashville Helping Hands</h1>
        <p className="text-center text-lg mb-6">Reliable, Friendly, and Fast — Your Go-To for Everyday Help</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard title="Residential Cleaning" description="Sparkling clean homes with flexible scheduling and affordable rates." />
          <ServiceCard title="Dog Walking & Pet Sitting" description="Caring, trustworthy, and always on time for your furry friends." />
          <ServiceCard title="Furniture Assembly" description="From IKEA to custom builds — assembled fast and correctly." />
          <ServiceCard title="Laundry Pickup & Delivery" description="We pick it up, wash, dry, fold, and bring it back fresh." />
          <ServiceCard title="Homework Help / Tutoring" description="Math, English, and more — patient and clear guidance for students." />
        </div>

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p className="mb-4">Call or text: <span className="font-bold">(615) 555-1234</span></p>
          <p>Email: <a className="text-blue-600 underline" href="mailto:nashvillehelpinghands@example.com">nashvillehelpinghands@example.com</a></p>
        </section>
      </section>
    </main>
  );
}
