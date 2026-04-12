CREATE TABLE "tenant_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid,
	"name" text,
	"value" integer,
	"expense" integer,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "tenant_items_history" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_item_id" uuid,
	"value" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tenant_item_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"item_id" uuid,
	"old_value" integer,
	"new_value" integer,
	"old_expense" integer,
	"new_expense" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tenants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"description" text,
	"cpf_cnpj" text,
	CONSTRAINT "tenants_name_unique" UNIQUE("name")
);
--> statement-breakpoint
ALTER TABLE "tenant_items" ADD CONSTRAINT "tenant_items_tenant_id_tenants_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenants"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tenant_items_history" ADD CONSTRAINT "tenant_items_history_tenant_item_id_tenant_items_id_fk" FOREIGN KEY ("tenant_item_id") REFERENCES "public"."tenant_items"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tenant_item_logs" ADD CONSTRAINT "tenant_item_logs_item_id_tenant_items_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."tenant_items"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "tentant_id_idx" ON "tenant_items" USING btree ("tenant_id");--> statement-breakpoint
CREATE INDEX "item_id_idx" ON "tenant_item_logs" USING btree ("item_id");