import { relations } from "drizzle-orm";
import {  integer, pgEnum, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from "zod"

export const newsletter = pgTable("newsletter", {
  id: uuid("id").defaultRandom().primaryKey(), 
  name: varchar("name",{ length: 255 }),
  email: varchar("email",{ length: 255 }).notNull().unique(),
createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});
export const rolesEnum = pgEnum("roles", ["admin"]);

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name",{length:100}).notNull(),
  password: varchar("password",{length:225}).notNull(),
  email: varchar("email",{length:100}).notNull().unique(),
  role: rolesEnum().default("admin").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});


export const reviews = pgTable("reviews", {
  id: uuid("id").defaultRandom().primaryKey(),
  client: varchar("name",{length:100}).notNull(),
  value: varchar("value",{length:100}).notNull(),
  body: text("body").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export const pricing = pgTable("pricing",{
  id: uuid("id").defaultRandom().primaryKey(),
  stripeUrl:text("stripe_url").notNull(),
  title:varchar("title").notNull(),
  price:integer("price").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
})
export const pricingItem = pgTable("pricing_item",{
  id: uuid("id").defaultRandom().primaryKey(),
  body:varchar("body").notNull(),
  pricingId:uuid("pricing_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
  
})
export const pricingRelations = relations(pricing,({many})=>({
  pricingItems:many(pricingItem),
}))
export const pricingItemRelation = relations(pricingItem,({one})=>({
  pricing:one(pricing,{
    fields:[pricingItem.pricingId],
    references:[pricing.id]
  })
}))


export const insertNewsLetterSchema = createInsertSchema(newsletter,{
    email:z.string().email()
})
export const selectNewsLetterSchema = createSelectSchema(newsletter)
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
export const insertReviewSchema = createInsertSchema(reviews,{
  body:z.string().min(1).max(255),
})
export const selectReviewSchema = createSelectSchema(reviews)
export const insertPricingSchema = createInsertSchema(pricing,{
  title:z.string().min(1).max(255),
  price:z.number().int().positive(),
  stripeUrl:z.string().url(),
}).extend({
  pricingItems:z.array(z.object({
    body:z.string().min(1).max(255)
  }))
})
export const selectPricingSchema = createSelectSchema(pricing)