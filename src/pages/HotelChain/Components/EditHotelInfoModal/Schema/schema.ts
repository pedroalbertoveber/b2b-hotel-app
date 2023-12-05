import { z } from 'zod'

export const Schema = z.object({
  logo: z.any(),
  name: z.string({
    required_error: 'Nome é obrigatório',
  }),
  site: z.string({
    required_error: 'Site é obrigatório',
  }),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  twitter: z.string().optional(),
})

export type Form = z.infer<typeof Schema>
