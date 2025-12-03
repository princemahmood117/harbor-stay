

import Container from '../../components/Shared/Container'
import { Helmet } from 'react-helmet-async'
import RoomReservation from '../../components/RoomDetails/RoomReservation'
import Heading from '../../components/Shared/Heading'
import useAxiosCommon from '../../hooks/useAxiosCommon'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../../components/Shared/LoadingSpinner'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { differenceInCalendarDays } from 'date-fns'


const AMENITIES_MAP = {
  wifi: { label: "Free WiFi", icon: "📶" },
  ac: { label: "Air Conditioning", icon: "❄️" },
  tv: { label: "Television", icon: "📺" },
  closet: { label: "Closet", icon: "🚪" },
  heating: { label: "Heating", icon: "🔥" },
  kitchen: { label: "Kitchen", icon: "🍳" },
  parking: { label: "Free Parking", icon: "🅿️" },
  pool: { label: "Swimming Pool", icon: "🏊" },
  gym: { label: "Gym", icon: "💪" },
  pet: { label: "Pet Friendly", icon: "🐕" },
};

const RoomDetails = () => {
  const { id } = useParams()
  const axiosCommon = useAxiosCommon()
  const [mainImage, setMainImage] = useState("")

  const { data: room = {}, isLoading, refetch } = useQuery({
    queryKey: ['room', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/room/${id}`)
      return data
    }
  })

  if (isLoading) return <LoadingSpinner />

  // default main image
  const images = room?.images || []
  const activeImage = mainImage || images[0]

  // Calculate available days
  const availableDays = room?.from && room?.to 
    ? differenceInCalendarDays(new Date(room.to), new Date(room.from))
    : 0;

  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      {room && (
        <div className="max-w-screen-lg mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <div>
              <Heading title={room?.title} subtitle={room?.location} />
              
              {/* Image Gallery */}
              <div className="flex gap-4">
                {/* Main Image */}
                <div className="w-full md:h-[60vh] overflow-hidden rounded-xl flex-1 my-2 relative group">
                  <img
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    src={activeImage}
                    alt="Room main"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
                    {images.findIndex(img => img === activeImage) + 1} / {images.length}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex flex-col gap-2 w-32 my-2">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <img
                        src={img}
                        alt={`thumb-${idx}`}
                        className={`h-20 w-full object-cover rounded cursor-pointer border-2 transition-all duration-200 ${
                          img === activeImage 
                            ? "border-rose-500 scale-105 shadow-lg" 
                            : "border-gray-200 hover:border-rose-300"
                        }`}
                        onClick={() => setMainImage(img)}
                      />
                      {img === activeImage && (
                        <div className="absolute inset-0 bg-rose-500/10 rounded"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info + Reservation */}
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <div className="col-span-4 flex flex-col gap-8">
              {/* Host Info */}
              <div className="flex flex-col gap-2">
                <div className="text-xl font-semibold flex flex-row items-center gap-2">
                  <div>Hosted by {room?.host?.name}</div>
                  <img
                    className="rounded-full border-2 border-gray-200"
                    height="30"
                    width="30"
                    alt="Avatar"
                    src={room?.host?.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                  <div>👥 {room?.total_guest} guests</div>
                  <div>🚪 {room?.bedrooms} rooms</div>
                  <div>🚿 {room?.bathrooms} bathrooms</div>
                </div>
              </div>

              <hr />
              
              {/* Bed Type */}
              {room?.bed_type && (
                <div className="flex items-center gap-2 p-4 bg-rose-50 rounded-lg">
                  <span className="text-2xl">🛏️</span>
                  <div>
                    <p className="text-sm text-gray-600">Bed Type</p>
                    <p className="font-semibold text-rose-600">{room.bed_type}</p>
                  </div>
                </div>
              )}

              {/* ✅ Amenities Section */}
              {room?.amenities && room.amenities.length > 0 && (
                <>
                  <hr />
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="text-2xl">✨</span>
                      What this place offers
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {room.amenities.map((amenityId) => {
                        const amenity = AMENITIES_MAP[amenityId];
                        if (!amenity) return null;
                        return (
                          <div 
                            key={amenityId}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <span className="text-2xl">{amenity.icon}</span>
                            <span className="text-sm font-medium text-gray-700">
                              {amenity.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* Availability Info */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📅</span>
                  <div className="flex-1">
                    <p className="font-semibold text-blue-800 mb-1">Availability Period</p>
                    <div className="text-sm text-blue-700 space-y-1">
                      <p>
                        <span className="font-medium">From:</span> {new Date(room?.from).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p>
                        <span className="font-medium">To:</span> {new Date(room?.to).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="pt-2 font-semibold text-blue-900">
                        Total: {availableDays} {availableDays === 1 ? 'day' : 'days'} available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3">About this place</h3>
                <div className="text-md font-light text-neutral-600 leading-relaxed">
                  {room?.description}
                </div>
              </div>
              
              <hr />
            </div>

            {/* Reservation Card */}
            <div className="md:col-span-3 order-first md:order-last mb-10">
              <RoomReservation room={room} refetch={refetch} />
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

export default RoomDetails