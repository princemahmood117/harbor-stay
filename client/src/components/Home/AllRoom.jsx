import Card from './Card'
import Container from '../Shared/Container'
import Heading from '../Shared/Heading'
import LoadingSpinner from '../Shared/LoadingSpinner'
import { useQuery } from '@tanstack/react-query'
import useAxiosCommon from '../../hooks/useAxiosCommon'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const AllRoom = () => {
  const axiosCommon = useAxiosCommon()

  // Search inputs
  const [bedTypeInput, setBedTypeInput] = useState('')
  const [locationInput, setLocationInput] = useState('')
  const [filters, setFilters] = useState({ bedType: '', location: '' })

  const { data: rooms = [], isLoading, refetch } = useQuery({
    queryKey: ['all-rooms', filters],
    queryFn: async () => {
      const queryParams = new URLSearchParams()
      if (filters.bedType) queryParams.append('bed_type', filters.bedType)
      if (filters.location) queryParams.append('location', filters.location)

      const { data } = await axiosCommon.get(`/rooms?${queryParams.toString()}`)
      return data
    }
  })

  // Handle Enter key for location
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setFilters((prev) => ({ ...prev, location: locationInput }))
      refetch()
    }
  }

  const handleLocationSearch = () => {
    setFilters((prev) => ({ ...prev, location: locationInput }))
    refetch()
  }

  const handleBedTypeSearch = () => {
    setFilters((prev) => ({ ...prev, bedType: bedTypeInput }))
    refetch()
  }

  if (isLoading) return <LoadingSpinner />

  return (
    <Container>
      {/* Search Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-6">
        {/* Location */}
        <div className="flex w-full sm:w-1/2 gap-2">
          <input
            type="text"
            placeholder="Search by location..."
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            onKeyDown={handleEnterKey}
            className="border border-gray-300 rounded-md px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          <button
            onClick={handleLocationSearch}
            className="bg-rose-500 text-white rounded-md px-4 py-2 hover:bg-rose-600"
          >
            Search
          </button>
        </div>

        {/* Bed Type */}
        <div className="flex w-full sm:w-1/3 gap-2">
          <select
            value={bedTypeInput}
            onChange={(e) => setBedTypeInput(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            <option value="">All Bed Types</option>
            <option value="single bed">Single Bed</option>
            <option value="double bed">Double Bed</option>
          </select>
          <button
            onClick={handleBedTypeSearch}
            className="bg-rose-500 text-white rounded-md px-4 py-2 hover:bg-rose-600"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Rooms Grid */}
      {rooms && rooms.length > 0 ? (
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          <AnimatePresence>
            {rooms.map((room, index) => (
              <motion.div
                key={room._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <Card room={room} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Rooms Available!"
            subtitle="Try adjusting your search filters."
          />
        </div>
      )}
    </Container>
  )
}

export default AllRoom
