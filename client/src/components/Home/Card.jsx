
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({ room }) => {
  return (
    <Link to={`/room/${room?._id}`} className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
          {/* Room Image */}
          <img 
            className='object-cover md:h-full h-[300px] w-full group-hover:scale-110 transition duration-700'
            src={room?.images?.[0] || '/fallback-image.jpg'}
            alt='Room'
          />

          {/* ✅ Booked Badge - Only shows if room.booked is true */}
          {room?.booked && (
            <div className='absolute top-2 right-3 bg-red-500 text-white px-3 py-1 rounded-lg shadow-lg font-semibold text-sm flex items-center gap-1.5'>
              <span className='w-2 h-2 bg-white rounded-full animate-pulse'></span>
              Booked
            </div>
          )}

          {/* Optional: Dimmed overlay for booked rooms */}
          {room?.booked && (
            <div className='absolute inset-0 bg-black/40 pointer-events-none'></div>
          )}
        </div>

        <div className='font-semibold text-lg'>{room?.title}</div>
        <div className='font-light text-neutral-500'>{room?.bed_type}</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ {room?.price}</div>
          <div className='font-light'>night</div>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  room: PropTypes.object,
}

export default Card