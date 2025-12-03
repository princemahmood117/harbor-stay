
import Card from './Card'
import Container from '../Shared/Container'
import Heading from '../Shared/Heading'
import LoadingSpinner from '../Shared/LoadingSpinner'
import { useQuery } from '@tanstack/react-query'
import useAxiosCommon from '../../hooks/useAxiosCommon'
import { useSearchParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Rooms = () => {
  const axiosCommon = useAxiosCommon()
  const [params] = useSearchParams()
  const category = params.get('category')

  // Controlled state for filters
  const [bedTypeInput, setBedTypeInput] = useState('')
  const [locationInput, setLocationInput] = useState('')
  const [filters, setFilters] = useState({ bedType: '', location: '' }) // filters applied

  // Fetch rooms using filters only when search is triggered
  const { data: rooms = [], isLoading, refetch } = useQuery({
    queryKey: ['rooms', category, filters],
    queryFn: async () => {
      const queryParams = new URLSearchParams()
      if (category) queryParams.append('category', category)
      if (filters.bedType) queryParams.append('bed_type', filters.bedType)
      if (filters.location) queryParams.append('location', filters.location)

      const { data } = await axiosCommon.get(`/rooms?${queryParams.toString()}`)
      return data
    }
  })

  // Handle Enter Key Press for location input
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setFilters((prev) => ({ ...prev, location: locationInput }))
      refetch()
    }
  }

  // Trigger search by location
  const handleLocationSearch = () => {
    setFilters((prev) => ({ ...prev, location: locationInput }))
    refetch()
  }

  // Trigger search by bed type
  const handleBedTypeSearch = () => {
    setFilters((prev) => ({ ...prev, bedType: bedTypeInput }))
    refetch()
  }

  if (isLoading) return <LoadingSpinner />

  // Show only 10 rooms on homepage
  const displayedRooms = rooms.slice(0, 10)

  return (
    <Container>
      {/* Search Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-6">
        {/* Location Search + Button */}
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

        {/* Bed Type Dropdown + Button */}
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
      {displayedRooms && displayedRooms.length > 0 ? (
        <>
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            <AnimatePresence>
              {displayedRooms.map((room, index) => (
                <motion.div
                  key={room._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card room={room} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show All Rooms Button */}
          {rooms.length > 10 && (
            <div className="flex justify-center mt-6">
              <Link
                to="/all-rooms"
                className="bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600"
              >
                Show All Rooms
              </Link>
            </div>
          )}
        </>
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

export default Rooms
