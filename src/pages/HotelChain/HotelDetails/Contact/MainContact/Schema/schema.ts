import { z } from 'zod'

export const Schema = z.object({
  name: z.string({
    required_error: 'Nome é obrigatório',
  }),
  country: z.string({
    required_error: 'País é obrigatório',
  }),
  cep: z.string({
    required_error: 'CEP é obrigatório',
  }),
  state: z.string({
    required_error: 'Estado é obrigatório',
  }),
  city: z.string({
    required_error: 'Cidade é obrigatória',
  }),
  neighborhood: z.string({
    required_error: 'Bairro é obrigatório',
  }),
  street: z.string({
    required_error: 'Rua é obrigatória',
  }),
  number: z.string({
    required_error: 'Número é obrigatório',
  }),
  complement: z.string().optional(),
  cellphone: z.string({
    required_error: 'Telefone é obrigatório',
  }),
  email: z.string({
    required_error: 'Email é obrigatório',
  }),
})

export type Form = z.infer<typeof Schema>
