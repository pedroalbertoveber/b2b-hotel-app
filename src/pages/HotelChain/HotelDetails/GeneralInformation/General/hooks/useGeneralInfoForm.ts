// Hooks
import { useForm } from 'react-hook-form'

// Resolvers
import { zodResolver } from '@hookform/resolvers/zod'

// Form
import {
  type GeranalInfoFormType,
  editGeneralInfoFormSchema,
} from '../Schema/schema'

export type UseGeneralInfoFormType = {
  alphaId: string
  taxpayerId: string
  corporateName: string
  stateCompanyRegNumber?: string
  exemptedStateCompanyRegNumber: boolean
}

export function useGeneralInfoForm(data: UseGeneralInfoFormType) {
  const defaultValues = {
    corporateName: data.corporateName,
    taxPayerRegistryCode: data.taxpayerId ?? '',
    stateCompanyRegNumber: data.stateCompanyRegNumber ?? '',
    exemptedStateCompanyRegNumber: data.exemptedStateCompanyRegNumber ?? '',
  }
  const hookForm = useForm<GeranalInfoFormType>({
    defaultValues,
    resolver: zodResolver(editGeneralInfoFormSchema),
  })

  return {
    ...hookForm,
  }
}
