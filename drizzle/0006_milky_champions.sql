ALTER TABLE "newsletter" ALTER COLUMN "is_paid" SET DEFAULT false;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pricing_item" ADD CONSTRAINT "pricing_item_pricing_id_pricing_id_fk" FOREIGN KEY ("pricing_id") REFERENCES "public"."pricing"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
