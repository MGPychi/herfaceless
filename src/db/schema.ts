import {  pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const newsLetter = pgTable("newsletter", {
  id: uuid("id").defaultRandom().primaryKey(), 
  name: varchar("name",{ length: 255 }),
  email: varchar("email",{ length: 255 }).notNull().unique(),
createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const insertNewsLetterSchema = createInsertSchema(newsLetter)
export const selectNewsLetterSchema = createSelectSchema(newsLetter)