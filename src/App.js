export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-800">
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        {/* Header with background image */}
        <div className="bg-cover bg-center h-64 rounded-2xl mb-6" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1063991/pexels-photo-1063991.jpeg)' }}>
          <h1 className="text-4xl font-bold mb-4 text-center text-white pt-24">Nashville Helping Hands</h1>
        </div>

        {/* Main tagline */}
        <p className="text-center text-lg mb-6">Reliable, Friendly, and Fast — Your Go-To for Everyday Help</p>

        {/* Service cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard 
            title="Residential Cleaning" 
            description="Sparkling clean homes with flexible scheduling and affordable rates." 
            image="https://nextdaycleaning.com/wp-content/uploads/2020/02/Differences-between-Residential-Cleaning-and-Commercial-Cleaning-1024x683.jpg" 
            alt="Cleaning" 
          />
          <ServiceCard 
            title="Rideshare" 
            description="Reliable, safe rides to your destinations." 
            image="https://vanderbilthustler.com/wp-content/uploads/2024/01/3TR7Rk1pjVKmKFx6_ktEcsTa4cxug67WiClUvxnYo3jB8NtvzEO16yKkXL14m19xjy2FWzBGPDExhPlGQw_e4vZIWpMzMIjEV1o2cdn5yGgCOWuh5bZsF-bioii9.png"
            alt="Rideshare" 
          />
          <ServiceCard 
            title="Furniture Assembly" 
            description="From IKEA to custom builds — assembled fast and correctly." 
            image="data:image/jpeg;base64,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"            
            alt="Furniture Assembly" 
          />
          <ServiceCard 
            title="Laundry Pickup & Delivery" 
            description="We pick it up, wash, dry, fold, and bring it back fresh." 
            image="data:image/jpeg;base64,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" 
            alt="Laundry" 
          />
          <ServiceCard 
            title="Errand & Shopping Services" 
            description="Get your errands done and shopping picked up for you." 
            image="https://images.pexels.com/photos/1048284/pexels-photo-1048284.jpeg" 
            alt="Errand Services" 
          />
          <ServiceCard 
            title="Homework Help / Tutoring" 
            description="Math, English, and more — patient and clear guidance for students." 
            image="https://images.pexels.com/photos/4144238/pexels-photo-4144238.jpeg" 
            alt="Tutoring" 
          />
        </div>

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="mb-4">
            I'm a Nashville-based college student running <strong>Nashville Helping Hands</strong>, a small service business offering affordable help around the house and beyond. I provide <strong>cleaning</strong>, <strong>furniture assembly</strong>, <strong>laundry pickup and delivery</strong>, <strong>tutoring (including Python programming)</strong>, and <strong>rideshare and errand services</strong>. If you need help, I'm happy to assist — reliable, friendly, and fast.
          </p>
        </section>

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p className="mb-4">Call or text: <span className="font-bold">(615) 920-9793</span></p>
          <p>Email: <a className="text-blue-600 underline" href="mailto:Ahabdikadir3@gmail.com">Ahabdikadir3@gmail.com</a></p>

          {/* Contact Form */}
          <form className="mt-6 max-w-md mx-auto text-left space-y-4" action="https://formspree.io/f/myzelojr" method="POST">
            <input type="hidden" name="_replyto" value="Ahabdikadir3@gmail.com" />
            <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 border rounded-xl" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 border rounded-xl" />
            <input type="tel" name="phone" placeholder="Your Phone Number" required className="w-full px-4 py-2 border rounded-xl" />
            <select name="service" required className="w-full px-4 py-2 border rounded-xl">
              <option value="">Select a Service</option>
              <option value="Cleaning">Residential Cleaning</option>
              <option value="Rideshare">Rideshare</option>
              <option value="Furniture Assembly">Furniture Assembly</option>
              <option value="Laundry">Laundry Pickup & Delivery</option>
              <option value="Errand & Shopping Services">Errand & Shopping Services</option>
              <option value="Tutoring">Tutoring / Homework Help</option>
            </select>
            <input type="date" name="preferred_date" required className="w-full px-4 py-2 border rounded-xl" />
            <input type="time" name="preferred_time" required className="w-full px-4 py-2 border rounded-xl" />
            <textarea name="message" placeholder="Additional Details (Optional)" rows="4" className="w-full px-4 py-2 border rounded-xl"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">Send Message</button>
          </form>

          <p className="mt-4 text-sm text-gray-600">Thank you for reaching out — I’ll get back to you as soon as possible!</p>
        </section>
      </section>
    </main>
  );
}

// ServiceCard component updated to include images
function ServiceCard({ title, description, image, alt }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300 flex items-center">
      {/* Image on the left */}
      <div className="w-1/3">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-40 object-cover rounded-t-xl mb-4" 
        />
      </div>

      {/* Text on the right */}
      <div className="ml-4 w-2/3">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
