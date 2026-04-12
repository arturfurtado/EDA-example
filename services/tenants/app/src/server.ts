import Elysia from 'elysia';
import env from './env';
import './routes/tenant.routes'

const port = Number(env.ELYSIA_SERVER_PORT) || 3000

new Elysia().listen(port, () => console.log(`server running in port ${port}`))
