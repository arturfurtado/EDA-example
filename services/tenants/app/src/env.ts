import { t } from "elysia";

const envValidation = t.Object({
    DATABASE_URL: t.String(),
    ELYSIA_SERVER_PORT: t.Number()
})

const env = envValidation.parse(process.env)

export default env