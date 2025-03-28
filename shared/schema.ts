import { pgTable, text, serial, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const statistics = pgTable("statistics", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  value: text("value").notNull(),
  description: text("description").notNull(),
  source: text("source").notNull(),
  sourceUrl: text("source_url"),
  chartData: jsonb("chart_data")
});

export const insertStatisticsSchema = createInsertSchema(statistics).omit({
  id: true
});

export type InsertStatistic = z.infer<typeof insertStatisticsSchema>;
export type Statistic = typeof statistics.$inferSelect;

export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  url: text("url").notNull(),
  description: text("description")
});

export const insertResourceSchema = createInsertSchema(resources).omit({
  id: true
});

export type InsertResource = z.infer<typeof insertResourceSchema>;
export type Resource = typeof resources.$inferSelect;

export const researchNews = pgTable("research_news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
  publishDate: timestamp("publish_date").notNull(),
  source: text("source").notNull(),
  sourceUrl: text("source_url")
});

export const insertResearchNewsSchema = createInsertSchema(researchNews).omit({
  id: true
});

export type InsertResearchNews = z.infer<typeof insertResearchNewsSchema>;
export type ResearchNews = typeof researchNews.$inferSelect;

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique()
});

export const insertSubscriberSchema = createInsertSchema(subscribers).omit({
  id: true
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;
