import { z } from 'zod'

export const Schema = z.object({
  corporateName: z
    .string({
      required_error: 'Razão social é obrigatória',
    })
    .min(2),
  taxPayerRegistryCode: z.string(),
  stateCompanyRegNumber: z.string(),
  exemptedStateCompanyRegNumber: z.boolean(),
})

export type Form = z.infer<typeof Schema>
