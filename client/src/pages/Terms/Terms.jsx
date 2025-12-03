
const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto  text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-6">
        <strong>Effective Date:</strong> 15-09-2025 <br />
        <strong>Last Updated:</strong> 18-09-2025
      </p>

      <p className="mb-6">
        Welcome to <strong>StayVista</strong>. By accessing or using our
        website, services, or applications (collectively, the “Platform”), you
        agree to be bound by these <strong>Terms and Conditions</strong>
        (“Terms”). Please read them carefully before using our services.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By registering, accessing, or using StayVista, you acknowledge that
          you have read, understood, and agreed to comply with these Terms and
          all applicable laws. If you do not agree, you must stop using the
          Platform immediately.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>You must be at least 18 years old to use our services.</li>
          <li>
            By using StayVista, you represent that you have the legal capacity
            to enter into these Terms.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Services Provided</h2>
        <p>StayVista offers an online platform for:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Browsing and booking accommodations.</li>
          <li>Listing properties for hosting.</li>
          <li>Providing relevant information, reviews, and tools.</li>
        </ul>
        <p>
          We act solely as an <strong>intermediary</strong> between hosts and
          guests and do not own, manage, or control the properties listed.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. User Accounts</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>You must create an account to access certain features.</li>
          <li>
            You are responsible for maintaining confidentiality of your login
            credentials.
          </li>
          <li>
            StayVista reserves the right to suspend or terminate accounts for
            unauthorized activities.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. User Obligations</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Provide accurate, up-to-date information.</li>
          <li>Use the Platform for lawful purposes only.</li>
          <li>Not engage in fraudulent or harmful behavior.</li>
          <li>Respect intellectual property rights and privacy of others.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Booking and Payments</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>All bookings are subject to host confirmation.</li>
          <li>Prices, fees, and taxes are displayed prior to booking.</li>
          <li>
            Payments are processed securely through third-party providers.
          </li>
          <li>
            Cancellations and refunds follow our{" "}
            <a href="/cancellation-policy" className="text-blue-600 underline">
              Cancellation Policy
            </a>
            .
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Host Responsibilities</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Provide accurate descriptions, photos, and pricing.</li>
          <li>Ensure the property complies with safety and legal standards.</li>
          <li>Handle guest inquiries and maintain service quality.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Intellectual Property</h2>
        <p>
          All content on StayVista (logos, designs, software, trademarks) is
          owned or licensed by us. Users may not copy, distribute, or exploit
          our intellectual property without prior written consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
        <p>
          StayVista is not responsible for disputes, errors in listings, service
          interruptions, or damages arising from the use of our Platform. Our
          liability is limited to the maximum extent permitted by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Privacy Policy</h2>
        <p>
          Your personal data is collected and stored in accordance with our{" "}
          <a href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Termination</h2>
        <p>
          StayVista may suspend or terminate accounts if users violate these
          Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">12. Governing Law</h2>
        <p>
          These Terms are governed by the laws of [Insert Jurisdiction].
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">13. Changes to Terms</h2>
        <p>
          StayVista may update these Terms at any time. Continued use of the
          Platform constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">14. Contact Information</h2>
        <p>
          For questions, please contact us at: <br />
          📧 Email: support@stayvista.com <br />
          {/* 📍 Address: [Insert Company Address] */}
        </p>
      </section>
    </div>
  );
};

export default Terms;
