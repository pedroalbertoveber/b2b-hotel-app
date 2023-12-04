import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, Schema } from '../Schema/schema'
import { HotelChain } from '@/entities/HotelChainEntity/@types/HotelChainEntityTypes'

export default function SectionForm(data: HotelChain) {
  const defaultValues = {
    name: data?.name || '',
    country: data?.address.location.countryName || '',
    cep: data?.address.location.cityCode || '',
    state: data?.address.location.stateSymbol || '',
    city: data?.address.location.cityName || '',
    neighborhood: data?.address.district || '',
    street: data?.address.addressLine.split(',')[0].trim() || '',
    number: data?.address.addressLine.split(',')[1].trim() || '',
    complement: '',
    cellphone: data?.phone || '',
    email: data?.mail || '',
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
