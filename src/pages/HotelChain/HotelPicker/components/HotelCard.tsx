import { FaPencil, FaTrashCan } from 'react-icons/fa6'

export default function HotelCard({ hotel }: { hotel: any }) {
  return (
    <div className="rounded-b2b b-borderColor/20 mt-8 flex w-full cursor-pointer flex-col items-center gap-4 bg-white">
      <div className="relative mt-[-2rem] h-[9rem] w-[85%] shadow-sm">
        <img
          className="rounded-b2b 
          h-full w-full
          transition
          delay-100 ease-in-out hover:-translate-y-12"
          src={`${import.meta.env.VITE_HOTEL_IMAGES_URL}${
            hotel.images.frontageImages[0].name
          }`}
          alt="hotel image"
        ></img>
      </div>
      <div className="mt-[-2.5rem] flex gap-8 py-2">
        <FaPencil className="text-primary" />
        <FaTrashCan className="text-secondary" />
      </div>
      <div className="mb-4 flex flex-col gap-4">
        <div className="text-small flex items-center justify-center border-b pb-4 font-bold">
          {hotel.socialName}
        </div>
        <div className="text-small flex items-center justify-center font-bold text-primary">
          {hotel.address.location.cityName}
        </div>
      </div>
    </div>
  )
}
