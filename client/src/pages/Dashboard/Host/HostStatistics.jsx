// import { Calendar } from 'react-date-range'
// import { FaDollarSign } from 'react-icons/fa'
// import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs'
// import { GiPlayerTime } from 'react-icons/gi'
// import useAxiosSecure from '../../../hooks/useAxiosSecure'
// import { useQuery } from '@tanstack/react-query'
// import LoadingSpinner from '../../../components/Shared/LoadingSpinner'
// import SalesLineChart from '../../../components/Dashboard/Chart/SalesLineChart'
// import { formatDistanceToNow } from "date-fns";
// import wave from "../../../assets/wave.svg";

// const HostStatistics = () => {
//   const axiosSecure = useAxiosSecure()
//   const {data : statData={}, isLoading } = useQuery( {
//     queryKey : ['statistics'],
//     queryFn : async()=> {
//       const {data} = await axiosSecure.get(`/host-stat`)
//       console.log(data);
//       return data
//     }
//   }) 
//   // Fetch Admin Stat Data here
//   if(isLoading) return <LoadingSpinner></LoadingSpinner>
//   return (
//     <div>
//       <div className='mt-12'>
//         {/* small cards */}
//         <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
//           {/* Sales Card */}
//           <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
//             <div
//               className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
//             >
//               <FaDollarSign className='w-6 h-6 text-white' />
//             </div>
//             <div className='p-4 text-right'>
//               <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
//                 Total Sales
//               </p>
//               <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
//                 ${statData?.totalPrice}
//               </h4>
//             </div>
//           </div>

//           {/* Total Bookings */}
//           <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
//             <div
//               className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
//             >
//               <BsFillCartPlusFill className='w-6 h-6 text-white' />
//             </div>
//             <div className='p-4 text-right'>
//               <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
//                 Total Bookings
//               </p>
//               <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
//                 {statData?.totalBookings}
//               </h4>
//             </div>
//           </div>
//           {/* Total Rooms */}
//           <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
//             <div
//               className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
//             >
//               <BsFillHouseDoorFill className='w-6 h-6 text-white' />
//             </div>
//             <div className='p-4 text-right'>
//               <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
//                 Total Rooms
//               </p>
//               <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
//                 {statData?.totalRooms}
//               </h4>
//             </div>
//           </div>

//           {/* Users Card */}
//           <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
//             <div
//               className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
//             >
//               <GiPlayerTime className='w-6 h-6 text-white' />
//             </div>
//             <div className='p-4 text-right'>
//               <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
//                 Host Since...
//               </p>
//               <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
//                 {statData?.hostSince && formatDistanceToNow(new Date(statData?.hostSince))}
//               </h4>
//             </div>
//           </div>
//         </div>

//         <div className='mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
//           {/* Total Sales Graph */}
//           <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2'>
//             {/* Render Chart Here */}
//             <SalesLineChart data={statData?.chartData}></SalesLineChart>
//           </div>
//           {/* Calender */}
//           <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden'>
//             <Calendar color='#F43F5E' />
//           </div>
//         </div>
//       </div>
//       <div>
//         <img className='w-full' src={wave} alt="" />
//       </div>
//     </div>
//   )
// }

// export default HostStatistics














import { Calendar } from 'react-date-range'
import { FaDollarSign } from 'react-icons/fa'
import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs'
import { GiPlayerTime } from 'react-icons/gi'
import { HiTrendingUp, HiSparkles, HiArrowRight } from "react-icons/hi";
import { BiStats } from "react-icons/bi";
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../../../components/Shared/LoadingSpinner'
import SalesLineChart from '../../../components/Dashboard/Chart/SalesLineChart'
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

const HostStatistics = () => {
  const axiosSecure = useAxiosSecure()
  const {data : statData={}, isLoading } = useQuery( {
    queryKey : ['statistics'],
    queryFn : async()=> {
      const {data} = await axiosSecure.get(`/host-stat`)
      console.log(data);
      return data
    }
  }) 

  if(isLoading) return <LoadingSpinner></LoadingSpinner>

  const statsCards = [
    {
      title: "Total Sales",
      value: `$${statData?.totalPrice?.toLocaleString() || 0}`,
      icon: FaDollarSign,
      gradient: "from-rose-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-rose-50 to-orange-50",
      iconBg: "bg-gradient-to-br from-rose-500 to-orange-500",
      textColor: "text-rose-600",
      trend: "up",
      description: "Total revenue earned"
    },
    {
      title: "Total Bookings",
      value: statData?.totalBookings || 0,
      icon: BsFillCartPlusFill,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      textColor: "text-blue-600",
      trend: "up",
      description: "Completed reservations"
    },
    {
      title: "Total Rooms",
      value: statData?.totalRooms || 0,
      icon: BsFillHouseDoorFill,
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
      textColor: "text-pink-600",
      percentage: statData?.totalRooms || 0,
      trend: "neutral",
      description: "Listed properties"
    },
    {
      title: "Host Since",
      value: statData?.hostSince ? formatDateDistance(statData?.hostSince) : "N/A",
      icon: GiPlayerTime,
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
      textColor: "text-emerald-600",
      percentage: "Active",
      trend: "neutral",
      description: "Hosting experience"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
                    Host Dashboard
                  </span>
                </div>
                <h1 className="text-2xl lg:text-4xl font-bold text-slate-800 mb-2">
                  Host Statistics
                </h1>
                <p className="text-slate-600 text-base lg:text-nd">
                  Manage your properties and track your hosting performance
                </p>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                  <div className={`relative ${card.bgColor} rounded-2xl p-2 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/50`}>
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
                        <p className="text-xs text-slate-500 mt-2">{card.description}</p>
                        <div className="pt-3 flex items-center gap-2">
                          <div className={`h-1.5 flex-1 bg-gradient-to-r ${card.gradient} rounded-full`}></div>
                          <span className="text-xs text-slate-500 font-medium">Live</span>
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
              {/* Sales Chart */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-2 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
              >
                <div className="p-6 border-b border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-1 flex items-center gap-2">
                        <BiStats className="w-6 h-6 text-violet-600" />
                        Sales Analytics
                      </h3>
                      <p className="text-slate-500 text-sm">Your revenue trends over time</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                  <SalesLineChart data={statData?.chartData} />
                </div>
              </motion.div>

              {/* Calendar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
              >
                <div className="p-6 border-b border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-800 mb-1">Calendar</h3>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                  <div className="rounded-xl overflow-hidden shadow-sm">
                    <Calendar color='#7C3AED' />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Footer */}
      <div className="relative z-10">
        <img className='w-full' src={wave} alt="" />
      </div>
    </div>
  );
};

export default HostStatistics;