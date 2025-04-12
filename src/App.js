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
            image="https://images.pexels.com/photos/1063991/pexels-photo-1063991.jpeg" 
            alt="Cleaning" 
          />
          <ServiceCard 
            title="Rideshare" 
            description="Reliable, safe rides to your destinations." 
            image="https://images.pexels.com/photos/1048284/pexels-photo-1048284.jpeg" 
            alt="Rideshare" 
          />
          <ServiceCard 
            title="Furniture Assembly" 
            description="From IKEA to custom builds — assembled fast and correctly." 
            image="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg" 
            alt="Furniture Assembly" 
          />
          <ServiceCard 
            title="Laundry Pickup & Delivery" 
            description="We pick it up, wash, dry, fold, and bring it back fresh." 
            image="https://images.pexels.com/photos/1063991/pexels-photo-1063991.jpeg" 
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
    <div className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300">
      <img 
        src={image} 
        alt={alt} 
        className="w-40 h-40 object-cover rounded-t-xl mb-4" 
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

