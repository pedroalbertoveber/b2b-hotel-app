import { z } from 'zod'

export const editLegalInfoFormSchema = z.object({
  fullName: z
    .string({ required_error: 'O nome completo é obrigatório' })
    .min(2, 'O nome completo deve ter no mínimo 2 caracteres'),
  role: z
    .string({ required_error: 'O cargo é obrigatório' })
    .min(2, 'O cargo deve ter no mínimo 2 caracteres'),
  taxPayerCode: z
    .string({
      required_error: 'O CPF do responsável é obrigatório',
    })
    .min(11, 'O CPF do responsável deve ter no mínimo 11 caracteres'),
})

export type LegalInfoFormType = z.infer<typeof editLegalInfoFormSchema>
