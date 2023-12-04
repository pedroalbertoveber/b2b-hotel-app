// Libs
import { useForm } from 'react-hook-form'

// Resolvers
import { zodResolver } from '@hookform/resolvers/zod'

// Schema
import {
  comoditiesFormSchema,
  type ComoditiesFormSchemaType,
} from '../Schema/schema'

export type UseComoditiesFormProps = {
  amentities: {
    amentityId: number
    includedInRate: boolean
  }[]
}

export function useComoditiesForm(data?: UseComoditiesFormProps) {
  const defaultValues: ComoditiesFormSchemaType = {
    amentities: data?.amentities || [],
  }
  const hookform = useForm<ComoditiesFormSchemaType>({
    resolver: zodResolver(comoditiesFormSchema),
    defaultValues,
  })

  return {
    ...hookform,
  }
}
