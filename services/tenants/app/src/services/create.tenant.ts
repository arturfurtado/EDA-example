import { db } from "../db/connection";
import { tenants } from "../db/database.schema";

export class CreateTenant {
    public execute(name: string, description: string, cpfCnpj: string) {
        const createTenant =  db.insert(tenants).values({name, description, cpfCnpj})
    
        return createTenant
}
}

