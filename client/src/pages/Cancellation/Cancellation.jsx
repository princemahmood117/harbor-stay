// Cancellation.jsx
import { Mail } from "lucide-react";

const Cancellation = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 ">
      <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">
        Cancellation Options
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mb-8">
        We understand that plans can change. If you need to cancel your booking,
        please contact our manager directly for assistance. All cancellations
        are handled personally to ensure a smooth process.
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md text-center">
        <div className="flex flex-col items-center gap-3">
          <Mail className="w-10 h-10 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-700">Contact Manager</h3>
          <p className="text-gray-500 text-sm">
            To cancel your booking, please email our manager using the address below:
          </p>
          <a
            href="mailto:manager@stayvista.com"
            className="mt-3 inline-block bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            manager@stayvista.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cancellation;
