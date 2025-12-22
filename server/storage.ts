import { type BlogPost, type InsertBlogPost } from "@shared/schema";
import fs from "fs/promises";
import path from "path";

export interface IStorage {
  getPosts(): Promise<BlogPost[]>;
  getPost(slug: string): Promise<BlogPost | undefined>;
  createPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class FileStorage implements IStorage {
  private dataPath: string;

  constructor() {
    // We store data in client/public so it's accessible as a static asset too if needed
    // or client/src/data to be bundled.
    // Let's use server side storage that writes to a file in the repo.
    this.dataPath = path.join(process.cwd(), "client", "public", "posts.json");
    this.ensureFile();
  }

  private async ensureFile() {
    try {
      await fs.access(this.dataPath);
    } catch {
      const dir = path.dirname(this.dataPath);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(this.dataPath, JSON.stringify([]));
    }
  }

  private async readData(): Promise<BlogPost[]> {
    await this.ensureFile();
    const content = await fs.readFile(this.dataPath, "utf-8");
    return JSON.parse(content);
  }

  private async writeData(posts: BlogPost[]) {
    await this.ensureFile();
    await fs.writeFile(this.dataPath, JSON.stringify(posts, null, 2));
  }

  async getPosts(): Promise<BlogPost[]> {
    return this.readData();
  }

  async getPost(slug: string): Promise<BlogPost | undefined> {
    const posts = await this.readData();
    return posts.find((p) => p.slug === slug);
  }

  async createPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const posts = await this.readData();
    const newPost: BlogPost = {
      ...insertPost,
      id: posts.length + 1,
      imageUrl: insertPost.imageUrl || null,
    };
    posts.push(newPost);
    await this.writeData(posts);
    return newPost;
  }
}

export const storage = new FileStorage();
