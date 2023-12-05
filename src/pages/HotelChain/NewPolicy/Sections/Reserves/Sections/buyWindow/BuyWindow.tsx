import { B2BPattern } from '@/components'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'
import UseBuyWindowHook from './hooks/UseBuyWindowHook'
import { FormComponents } from '@/components/FormComponents'

export default function BuyWindow({ policy }: { policy: any }) {
  const { days, min, max, edit, setEdit, setMin, setMax, submit } =
    UseBuyWindowHook({
      policy,
    })
  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        title="Períodos Mínimos e Máximos de Estadia"
        isEditing={edit}
        handle={() => {
          if (edit) submit()
          setEdit(!edit)
        }}
      />

      <div
        className={`flex w-full flex-col items-start justify-start gap-8 ${
          !edit ? 'opacity-75' : ''
        }`}
      >
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex flex-col gap-4">
            <p>Estádia mínima (dias)</p>
            <div className="flex flex-col gap-4">
              {days.map((e: any, i: number) => {
                return (
                  <FormComponents.Input
                    disabled={!edit}
                    type="number"
                    key={i}
                    title={e.title}
                    value={min[i]}
                    onChange={(e: any) => {
                      const value = e.target.value
                      setMin((prev: any) => {
                        prev[i] = value
                        return [...prev]
                      })
                    }}
                    className="w-1/3"
                  />
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>Estádia Máxima (dias)</p>
            <div className="flex flex-col gap-4">
              {days.map((e: any, i: number) => {
                return (
                  <FormComponents.Input
                    disabled={!edit}
                    type="number"
                    key={i}
                    title={e.title}
                    value={max[i]}
                    onChange={(e: any) => {
                      const value = e.target.value
                      setMax((prev: any) => {
                        prev[i] = value
                        return [...prev]
                      })
                    }}
                    className="w-1/3"
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
