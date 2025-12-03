

import { Calendar } from "react-date-range";
import { FaDollarSign } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { GiPlayerTime } from "react-icons/gi";
import { HiTrendingUp, HiSparkles } from "react-icons/hi";
import { BiStats } from "react-icons/bi";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import BookingLineChart from "../../../components/Dashboard/Chart/BookingLineChart";
import wave from "../../../assets/wave.svg";
import { motion } from "framer-motion";

// Helper function to format date distance
const formatDateDistance = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 30) return `${diffDays} days ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};

const GuestStatistics = () => {
  const axiosSecure = useAxiosSecure();
  const { data: statData = {}, isLoading } = useQuery({
    queryKey: ["statistics"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/guest-stat`);
      console.log(data);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  const statsCards = [
    {
      title: "Total Spent",
      value: `$${statData?.totalPrice?.toLocaleString() || 0}`,
      icon: FaDollarSign,
      gradient: "from-rose-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-rose-50 to-orange-50",
      iconBg: "bg-gradient-to-br from-rose-500 to-orange-500",
      textColor: "text-rose-600",
      trend: "up"
    },
    {
      title: "Total Bookings",
      value: statData?.totalBookings || 0,
      icon: BsFillCartPlusFill,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      textColor: "text-blue-600",
      trend: "up"
    },
    {
      title: "Guest Since",
      value: statData?.guestSince ? formatDateDistance(statData?.guestSince) : "N/A",
      icon: GiPlayerTime,
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
      textColor: "text-emerald-600",
      percentage: "Active",
      trend: "neutral"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-500">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="px-6 lg:px-8 pt-10 pb-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between flex-wrap gap-4"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl shadow-lg">
                    <HiSparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 text-md font-semibold rounded-full">
                    Dashboard
                  </span>
                </div>
                <h1 className="text-2xl lg:text-4xl font-bold text-slate-800 mb-2">
                  Guest Statistics
                </h1>
                <p className="text-slate-600 text-base lg:text-lg">
                  Track your performance and manage your bookings efficiently
                </p>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {statsCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className={`relative ${card.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/50`}>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/30 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-start justify-between mb-5">
                        <div className={`p-3.5 ${card.iconBg} rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <card.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full ${
                          card.trend === 'up' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {card.trend === 'up' && <HiTrendingUp className="w-3.5 h-3.5" />}
                          <span className="text-xs font-bold">{card.percentage}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                          {card.title}
                        </p>
                        <h4 className={`text-4xl font-bold ${card.textColor}`}>
                          {card.value}
                        </h4>
                        <div className="pt-3 flex items-center gap-2">
                          <div className={`h-1.5 flex-1 bg-gradient-to-r ${card.gradient} rounded-full`}></div>
                          <span className="text-xs text-slate-500 font-medium">Live Data</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts & Calendar Section */}
        <div className="px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Analytics Chart */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
              >
                <div className="p-6 border-b border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-1 flex items-center gap-2">
                        <BiStats className="w-6 h-6 text-violet-600" />
                        Booking Analytics
                      </h3>
                      <p className="text-slate-500 text-sm">Your reservation trends over time</p>
                    </div>
          
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                  <BookingLineChart data={statData?.chartData} />
                </div>
              </motion.div>

              {/* Calendar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
              >
                <div className="p-6 border-b border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-800 mb-1">Calendar</h3>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                  <div className="rounded-xl overflow-hidden shadow-sm">
                    <Calendar color="#7C3AED" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Footer */}
      <div className="relative z-10">
        <img className="w-full" src={wave} alt="" />
      </div>
    </div>
  );
};

export default GuestStatistics;