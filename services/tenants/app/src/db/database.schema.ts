import { index, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const tenants = pgTable("tenants", {
    id: uuid().defaultRandom().primaryKey(),
    name: text().unique().notNull(),
    description: text(),
    cpfCnpj: text("cpf_cnpj").notNull()
})

export const tenantItems = pgTable("tenant_items", {
    id: uuid().defaultRandom().primaryKey(),
    tenantId: uuid("tenant_id").references(() => tenants.id),
    name: text(),
    value: integer(), // .00 as decimal
    expense: integer(), // .00 as decimal
    description: text(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow()
}, (table)=> [
    index('tentant_id_idx').on(table.tenantId)
])

export const tenantItemsLogs = pgTable("tenant_item_logs", {
    id: uuid().defaultRandom().primaryKey(),
    itemId: uuid("item_id").references(() => tenantItems.id),
    oldValue: integer("old_value"),
    newValue: integer("new_value"),
    oldExpense: integer("old_expense"),
    newExpense: integer("new_expense"),
    createdAt: timestamp('created_at').notNull().defaultNow(),
}, (table) => [
    index('item_id_idx').on(table.itemId)
])

export const tenantItemsHistory = pgTable("tenant_items_history", {
    id: uuid().defaultRandom().primaryKey(),
    tenantItemId: uuid("tenant_item_id").references(() => tenantItems.id),
    value: integer(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
})