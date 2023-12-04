import { z } from 'zod'

export const Schema = z.object({
  policyName: z.string({
    required_error: 'Nome da Política é Obrigatória',
  }),
})

export type Form = z.infer<typeof Schema>
