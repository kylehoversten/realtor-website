import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// We're using a JSON file for storage, but we define the shape here for consistency
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  date: text("date").notNull(),
  imageUrl: text("image_url"), // Optional image URL
  slug: text("slug").notNull().unique(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({ id: true });

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
