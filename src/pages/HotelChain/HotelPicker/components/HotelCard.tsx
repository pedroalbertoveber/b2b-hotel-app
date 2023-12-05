import { useHotelEntityContext } from '@/context/HotelEntityContext'
import { FaPencil, FaTrashCan } from 'react-icons/fa6'

export default function HotelCard({ hotel }: { hotel: any }) {
  const {
    Hotel: {
      hook: { setCurrentHotel },
    },
  } = useHotelEntityContext()
  return (
    <div className="b-borderColor/20 mt-8 flex w-full cursor-pointer flex-col items-center gap-4 rounded-b2b bg-white">
      <div className="relative mt-[-2rem] h-[9rem] w-[85%] shadow-sm">
        <img
          className="h-full 
          w-full rounded-b2b
          transition
          delay-100 ease-in-out hover:-translate-y-12"
          src={`${import.meta.env.VITE_HOTEL_IMAGES_URL}${
            hotel.images.frontageImages[0].name
          }`}
          alt="hotel image"
        ></img>
      </div>
      <div className="mt-[-2.5rem] flex gap-8 py-2">
        <button
          type="button"
          onClick={() => {
            setCurrentHotel(hotel)
          }}
        >
          <FaPencil className="text-primary" />
        </button>
        <button type="button">
          <FaTrashCan className="text-secondary" />
        </button>
      </div>
      <div className="mb-4 flex flex-col gap-4">
        <div className="flex items-center justify-center border-b pb-4 text-small font-bold">
          {hotel.socialName}
        </div>
        <div className="flex items-center justify-center text-small font-bold text-primary">
          {hotel.address.location.cityName}
        </div>
      </div>
    </div>
  )
}
