import { B2BPattern } from '@/components'
import PageHeader from '../Components/PageHeader'
import Hotelinfo from '../Components/Hotelinfo'
import { FaPlus } from 'react-icons/fa6'
import { useHotelChainEntityContext } from '@/context/HotelChainEntityContext'
import PolicyItem from './components/PolicyItem'

export function HotelChainPolicy() {
  const {
    HotelChain: {
      hook: { policies },
    },
  } = useHotelChainEntityContext()
  return (
    <>
      {/* Page header */}
      <PageHeader />
      <Hotelinfo />

      <B2BPattern.Containers.Container className="overflow-visible md:mt-8">
        <B2BPattern.Texts.Title title="Minhas Políticas" />
        <button
          type="button"
          className="mb-4 flex w-full items-center justify-end gap-2 text-secondary"
          onClick={() => {}}
        >
          <FaPlus className="h-4 w-4" />
          <p className="text-small font-[700] uppercase">Nova Política</p>
        </button>
        <div className="flex w-full flex-col gap-4">
          {policies &&
            policies.length > 0 &&
            policies.map((item: any, index: number) => {
              return (
                <B2BPattern.Containers.Whitebox
                  key={index}
                  className="bg-primary px-6 py-4 text-white"
                >
                  <PolicyItem policy={item} />
                </B2BPattern.Containers.Whitebox>
              )
            })}
        </div>

        {/* <Modal
          open={open}
          handleClose={() => {
            setOpen(false)
          }}
          title="Nova Política"
        >
          <ModalDescription>
            <div className="flex w-full flex-col"></div>
          </ModalDescription>
        </Modal> */}
      </B2BPattern.Containers.Container>
    </>
  )
}
