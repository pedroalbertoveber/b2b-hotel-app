// Libs
import { useForm } from 'react-hook-form'

// Resolvers
import { zodResolver } from '@hookform/resolvers/zod'

// Schema
import {
  editLegalInfoFormSchema,
  type LegalInfoFormType,
} from '../Schema/schema'

export function useLegalInfoForm({ data }) {
  const defaultValues: LegalInfoFormType = {
    fullName: data?.fullName || '',
    role: data?.role || '',
    taxPayerCode: data?.taxPayerCode || '',
  }
  const hookform = useForm<LegalInfoFormType>({
    resolver: zodResolver(editLegalInfoFormSchema),
    defaultValues,
  })

  return {
    ...hookform,
  }
}
