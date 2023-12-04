import { z } from 'zod'

export const comoditiesFormSchema = z.object({
  amentities: z.array(
    z.object({
      amentityId: z.number(),
      includedInRate: z.boolean(),
    }),
  ),
})

export type ComoditiesFormSchemaType = z.infer<typeof comoditiesFormSchema>
