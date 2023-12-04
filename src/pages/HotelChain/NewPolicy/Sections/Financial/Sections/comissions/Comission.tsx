import { B2BPattern } from '@/components'
import UseComissionHook from './hook/UseComissionHook'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'
import { FormComponents } from '@/components/FormComponents'

export default function Comission({ policy }: { policy: any }) {
  const {
    data,
    parentChecked,
    handleParentToggle,
    handleChildToggle,
    childChecked,
    childValue,
    setChildValue,
    edit,
    setEdit,
    handleSubmit,
  } = UseComissionHook({ policy })

  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        title="Comissão"
        isEditing={edit}
        handle={() => {
          if (edit) handleSubmit()
          setEdit(!edit)
        }}
      />

      <div className="flex flex-col items-start justify-start">
        {data.map((e, i) => {
          return (
            <div className="flex flex-col gap-8" key={i}>
              <div className="flex gap-4">
                <FormComponents.Switch.Root>
                  <FormComponents.Switch.Thumb
                    disabled={!edit}
                    checked={parentChecked}
                    onCheckedChange={handleParentToggle}
                  />
                </FormComponents.Switch.Root>
                <p>{e.title}</p>
              </div>
              {e.child.length > 0 && (
                <div className="ml-8 flex flex-col gap-4">
                  {e.child.map((each, index) => {
                    return (
                      <div key={index} className="flex items-end gap-4">
                        <FormComponents.Switch.Root>
                          <FormComponents.Switch.Thumb
                            disabled={!edit || !parentChecked}
                            checked={childChecked[index]}
                            onCheckedChange={() => {
                              handleChildToggle(each)
                            }}
                          />
                        </FormComponents.Switch.Root>
                        <p>{each.title}</p>
                        {edit && childChecked[index] && (
                          <div>
                            {/* <TextFieldB2b
                              variant="standard"
                              type="number"
                              value={childValue}
                              onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                              ) => {
                                setChildValue(event.target.value)
                              }}
                            /> */}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
