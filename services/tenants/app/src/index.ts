import  { app }  from './app'
import './routes/tenant.routes'

const port = Number(process.env.ELYSIA_SERVER_PORT) || 3000

app.listen(port, () => console.log(`server running in port ${port}`))
