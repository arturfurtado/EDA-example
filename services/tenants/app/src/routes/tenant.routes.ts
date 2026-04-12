import Elysia, { t } from "elysia";
import { CreateTenant } from "../services/create.tenant";

const createTenant = new CreateTenant()

export const tenants = new Elysia({prefix: "/tenants"}).post("/", ({body}) => {
    const {name, description, cpfCnpj} = body
    return createTenant.execute(name, description, cpfCnpj)
}, 
{
    body: t.Object({
        name: t.String(),
        description: t.String(),
        cpfCnpj: t.String() //todo: create a cpfCnpj class with a regex validator 
    })
}
)