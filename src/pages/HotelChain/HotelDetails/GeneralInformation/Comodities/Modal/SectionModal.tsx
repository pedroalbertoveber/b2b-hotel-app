import { B2BPattern } from '@/components'
import { Form } from '../Schema/schema'
import { FormComponents } from '@/components/FormComponents'
import SectionForm from '../form/form'

export default function SectionModal({
  open,
  setOpen,
  data,
}: {
  open: boolean
  setOpen: (open: boolean) => void
  data
}) {
  const { register, handleSubmit, errors, isSubmitting, getValues } =
    SectionForm({
      data,
    })

  const submit = async (formData: Form) => {
    const payload = {
      alphaId: data.alphaId,
      ...formData,
    }
    console.log(payload)
    setOpen(false)
    // await hotelChain.putHttp(hotelChain.putMethods['legal-info'], payload)

    // const mergedData = {
    //   ...hotelChain.hook.data,
    //   corporateName: payload.corporateName,
    //   taxpayerId: payload.taxPayerRegistryCode,
    //   stateCompanyRegNumber: payload.stateCompanyRegNumber,
    //   exemptedStateCompanyRegNumber: payload.exemptedStateCompanyRegNumber,
    // }

    // hotelChain.hook.setData(mergedData)
    // set(hotelChain.cachePath, mergedData)
  }
  return (
    <B2BPattern.Popups.Modal.Root open={open} setOpen={setOpen}>
      <B2BPattern.Popups.Modal.Content>
        <div className="flex flex-col gap-4">
          <FormComponents.Input label="teste"></FormComponents.Input>
        </div>
      </B2BPattern.Popups.Modal.Content>
    </B2BPattern.Popups.Modal.Root>
  )
}
