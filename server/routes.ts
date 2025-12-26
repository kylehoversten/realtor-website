import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // app.get(api.posts.list.path, async (_req, res) => {
  //   const posts = await storage.getPosts();
  //   res.json(posts);
  // });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPost(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  });

  app.post(api.posts.create.path, async (req, res) => {
    try {
      const input = api.posts.create.input.parse(req.body);
      const post = await storage.createPost(input);
      res.status(201).json(post);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}

// Seed function not really needed as file storage persists, but we can check if empty
async function seedDatabase() {
  const posts = await storage.getPosts();
  if (posts.length === 0) {
    await storage.createPost({
      title: "Welcome — About Kyle Hoversten",
      content: "Hi, I’m Kyle. I bought my first rental at 19 and have been investing ever since. This blog shares market insights, renovation lessons, and practical strategies for investors and homeowners. Stay tuned for updates on local market trends and investment tips.",
      excerpt: "Welcome — About Kyle Hoversten",
      date: new Date().toISOString().split('T')[0],
      slug: "welcome-post",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    });
  }
}

// Run seed
seedDatabase().catch(console.error);
