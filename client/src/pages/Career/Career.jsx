const Career = () => {
  return (
    <div className="max-w-6xl mx-auto  text-gray-800">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 font-serif">Careers at StayVista</h1>
        <p className="text-lg text-gray-600">
          Join our team and help redefine the way people find and book stays.
        </p>
      </header>

      {/* Why Work With Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Be part of an innovative and growing company.</li>
          <li>Collaborate with a diverse and passionate team.</li>
          <li>Enjoy flexible work culture and growth opportunities.</li>
          <li>Make an impact on travelers and hosts worldwide.</li>
        </ul>
      </section>

      {/* Open Positions */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Example Job Card */}
          <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
            <p className="text-gray-600 mb-3">
              Build engaging user interfaces using React.js and modern frontend
              technologies.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              📍 Location: Remote | 🕒 Full-time
            </p>
            <a
              href="mailto:careers@stayvista.com?subject=Frontend Developer Application"
              className="text-blue-600 font-semibold hover:underline"
            >
              Apply Now →
            </a>
          </div>

          <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Backend Developer</h3>
            <p className="text-gray-600 mb-3">
              Work on scalable APIs, databases, and backend systems using
              Node.js and MongoDB.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              📍 Location: Dhaka, Bangladesh | 🕒 Full-time
            </p>
            <a
              href="mailto:careers@stayvista.com?subject=Backend Developer Application"
              className="text-blue-600 font-semibold hover:underline"
            >
              Apply Now →
            </a>
          </div>

          <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">UI/UX Designer</h3>
            <p className="text-gray-600 mb-3">
              Design beautiful, user-friendly experiences for our platform.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              📍 Location: Remote | 🕒 Contract
            </p>
            <a
              href="mailto:careers@stayvista.com?subject=UI/UX Designer Application"
              className="text-blue-600 font-semibold hover:underline"
            >
              Apply Now →
            </a>
          </div>

          <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Marketing Specialist</h3>
            <p className="text-gray-600 mb-3">
              Help us grow through creative campaigns and brand strategy.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              📍 Location: Dhaka, Bangladesh | 🕒 Part-time
            </p>
            <a
              href="mailto:careers@stayvista.com?subject=Marketing Specialist Application"
              className="text-blue-600 font-semibold hover:underline"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-blue-50 p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-3">Didn’t find your role?</h2>
        <p className="text-gray-600 mb-4">
          We’re always looking for talented people. Send us your resume and
          we’ll keep you in mind for future opportunities.
        </p>
        <a
          href="mailto:careers@stayvista.com?subject=General Application"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Submit Resume
        </a>
      </section>
    </div>
  );
};

export default Career;
