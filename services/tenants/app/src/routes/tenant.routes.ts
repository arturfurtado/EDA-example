import { app } from '../app'

app.get("/tenants", () => {
    return "Tenants"
})

app.post("/tenants", () => {
    return "Create Tenant"
})