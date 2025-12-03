const About = () => {
  return (
    <div className="max-w-6xl mx-auto text-gray-800">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 font-serif">About StayVista</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          StayVista is your trusted platform for discovering and booking
          exceptional stays worldwide. We connect travelers with hosts to create
          memorable experiences that feel like home — anywhere in the world.
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded with the vision of redefining hospitality, StayVista began as
          a small initiative to help people find unique accommodations easily.
          Over the years, we have grown into a global platform trusted by
          thousands of travelers and hosts.
          <br />
          <br />
          Our mission is simple: make travel accessible, reliable, and filled
          with comfort. Whether it’s a weekend getaway, a family vacation, or a
          business trip — StayVista ensures you find a place that fits your
          needs.
        </p>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">✨ Trust</h3>
            <p className="text-gray-600">
              We prioritize transparency and reliability, ensuring guests and
              hosts feel secure in every booking.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">🌍 Diversity</h3>
            <p className="text-gray-600">
              StayVista embraces cultural diversity and welcomes everyone to
              find comfort across different parts of the world.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">💡 Innovation</h3>
            <p className="text-gray-600">
              We continuously enhance our platform with technology and design to
              improve travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="CEO"
              className="mx-auto rounded-full w-32 h-32 mb-4"
            />
            <h3 className="text-lg font-bold">Ayesha Rahman</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="CTO"
              className="mx-auto rounded-full w-32 h-32 mb-4"
            />
            <h3 className="text-lg font-bold">Karim Ahmed</h3>
            <p className="text-gray-500">CTO</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="CMO"
              className="mx-auto rounded-full w-32 h-32 mb-4"
            />
            <h3 className="text-lg font-bold">Nusrat Jahan</h3>
            <p className="text-gray-500">Chief Marketing Officer</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-50 p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-3">Join Our Journey</h2>
        <p className="text-gray-600 mb-4">
          Whether you’re a traveler seeking memorable experiences or a host
          offering unique spaces, StayVista is here to connect you.
        </p>
        <a
          href="/career"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Explore Careers
        </a>
      </section>
    </div>
  );
};

export default About;
