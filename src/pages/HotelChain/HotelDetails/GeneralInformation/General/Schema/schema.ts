import { z } from 'zod'

export const editGeneralInfoFormSchema = z
  .object({
    corporateName: z
      .string({
        required_error: 'Razão social é obrigatória',
      })
      .min(2, 'Razão social deve ter no mínimo 2 caracteres'),
    taxPayerRegistryCode: z
      .string({ required_error: 'CNPJ é obrigatório' })
      .min(11, 'CNPJ deve ter 11 caracteres'),
    exemptedStateCompanyRegNumber: z.boolean().default(false),
    stateCompanyRegNumber: z.string().optional(),
    type: z.string({ required_error: 'Tipo de hotel é obrigatório' }),
  })
  .superRefine((data, context) => {
    const isHotelExempted = data.exemptedStateCompanyRegNumber
    const isStateCompanyRegNumberFilled = data.stateCompanyRegNumber !== ''

    if (!isHotelExempted && !isStateCompanyRegNumberFilled) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Inscrição estadual é obrigatória',
        path: ['stateCompanyRegNumber'],
      })
    }
  })

export type GeranalInfoFormType = z.infer<typeof editGeneralInfoFormSchema>
