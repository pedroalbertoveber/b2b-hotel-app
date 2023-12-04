import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, Schema } from '../Schema/schema'
import { Responsible } from '@/entities/HotelChainEntity/@types/HotelChainEntityTypes'

export default function SectionForm(data: Responsible) {
  const defaultValues = {
    fullName: data?.fullName || '',
    role: data?.role || '',
    taxPayerCode: data?.taxPayerCode || '',
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
