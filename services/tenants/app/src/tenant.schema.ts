import zod, { z } from 'zod'

export const createTenantSchema = z.object({
    name: z.string().max(50),
    description: z.string().max(99),
    cpfCnpj: z.string()
})
