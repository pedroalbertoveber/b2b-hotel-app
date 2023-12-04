import { CACHE_PATH } from '@/config/cache'
import { useHotelChainEntityContext } from '@/context/HotelChainEntityContext'
import { set } from '@/services/cache'
import { FaCopy, FaPencil } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function PolicyEdit({ policy }: { policy: any }) {
  const {
    HotelChain: {
      hook: { setCurrentPolicy },
    },
  } = useHotelChainEntityContext()
  const handleCachePolicy = () => {
    set(CACHE_PATH.HOTELS_CHAIN.CURRENT_POLICY, policy)
    setCurrentPolicy(policy)
  }
  return (
    <div>
      <Link onClick={handleCachePolicy} to={`/hotelChain/newPolicy`}>
        <div
          className="flex w-full cursor-pointer items-center justify-center gap-4 pb-4 
          transition delay-100
          ease-in-out
          hover:-translate-y-1"
        >
          <FaPencil className="text-textSecondary hover:text-primary" />
          <p className="text-black">Editar</p>
        </div>
      </Link>
      <Link to={`/profile/policy/${policy.id}`}>
        <div
          className="flex w-full cursor-pointer items-center justify-center gap-4
          transition delay-100
          ease-in-out
          hover:-translate-y-1"
        >
          <FaCopy className="text-textSecondary hover:text-primary" />
          <p className="text-black">Copiar</p>
        </div>
      </Link>
    </div>
  )
}
