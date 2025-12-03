import { Shield, AlertTriangle, PhoneCall, Info } from "lucide-react";

const SafetyInformation = () => {
  const safetyMeasures = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Secure Bookings",
      description:
        "All reservations are processed securely, ensuring your personal and payment information is always protected.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
      title: "Emergency Support",
      description:
        "Our 24/7 support team is available to assist in case of emergencies during your stay.",
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
      title: "Verified Hosts",
      description:
        "We carefully verify hosts and their properties to ensure a safe and reliable experience for all guests.",
    },
    {
      icon: <Info className="w-8 h-8 text-purple-600" />,
      title: "Health & Safety Guidelines",
      description:
        "All listings follow strict hygiene and safety protocols to provide you with a comfortable and worry-free stay.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Safety Information
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          At StayVista, your safety is our top priority. We have implemented a
          set of safety measures to ensure you enjoy a secure and worry-free
          stay every time you book with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {safetyMeasures.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyInformation;
