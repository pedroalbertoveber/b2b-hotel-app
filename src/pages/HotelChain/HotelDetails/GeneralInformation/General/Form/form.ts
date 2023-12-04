import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, Schema } from '../Schema/schema'
import { HotelChain } from '@/entities/HotelChainEntity/@types/HotelChainEntityTypes'

export default function SectionForm(data: HotelChain) {
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
    watch,
    trigger,
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
    watch,
    trigger,
  }
}
