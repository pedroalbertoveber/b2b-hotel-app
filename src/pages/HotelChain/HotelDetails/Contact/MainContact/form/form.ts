import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, Schema } from '../Schema/schema'

export default function SectionForm({ data }) {
  const defaultValues = {
    corporateName: data.corporateName,
    taxPayerRegistryCode: data.taxpayerId,
    stateCompanyRegNumber: data.stateCompanyRegNumber || '',
    exemptedStateCompanyRegNumber: data.exemptedStateCompanyRegNumber,
  }
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Form>({
    resolver: zodResolver(Schema),
    defaultValues,
  })

  return {
    register,
    handleSubmit,
    getValues,
    setValue,
    errors,
    isSubmitting,
  }
}
