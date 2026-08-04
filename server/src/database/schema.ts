import {
  pgTable,
  uuid,
  text,
  timestamp,
  boolean
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),

  username: text("username").notNull().unique(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull()
});

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),

  senderId: uuid("sender_id")
    .notNull(),

  recipientId: uuid("recipient_id")
    .notNull(),

  ciphertext: text("ciphertext")
    .notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  read: boolean("read")
    .default(false)
    .notNull()
});
