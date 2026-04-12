import { z } from "zod";

const envValidation = z.object({
    DATABASE_URL: z.string(),
    ELYSIA_SERVER_PORT: z.coerce.number()
})

const env = envValidation.parse(process.env)

export default env