import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Statistics API routes
  app.get("/api/statistics", async (_req, res) => {
    try {
      const statistics = await storage.getAllStatistics();
      res.json(statistics);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve statistics" });
    }
  });

  app.get("/api/statistics/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid statistic ID" });
      }
      
      const statistic = await storage.getStatistic(id);
      if (!statistic) {
        return res.status(404).json({ message: "Statistic not found" });
      }
      
      res.json(statistic);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve statistic" });
    }
  });

  // Resources API routes
  app.get("/api/resources", async (_req, res) => {
    try {
      const resources = await storage.getAllResources();
      res.json(resources);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve resources" });
    }
  });

  app.get("/api/resources/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid resource ID" });
      }
      
      const resource = await storage.getResource(id);
      if (!resource) {
        return res.status(404).json({ message: "Resource not found" });
      }
      
      res.json(resource);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve resource" });
    }
  });

  // Research News API routes
  app.get("/api/research", async (_req, res) => {
    try {
      const researchNews = await storage.getAllResearchNews();
      res.json(researchNews);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve research news" });
    }
  });

  app.get("/api/research/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid research article ID" });
      }
      
      const article = await storage.getResearchNews(id);
      if (!article) {
        return res.status(404).json({ message: "Research article not found" });
      }
      
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve research article" });
    }
  });

  // Newsletter subscription route
  app.post("/api/subscribe", async (req, res) => {
    try {
      // Validate the request body
      const validationResult = insertSubscriberSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: "Invalid subscription data", 
          errors: validationResult.error.errors 
        });
      }
      
      // Check if email is already subscribed
      const existingSubscriber = await storage.getSubscriberByEmail(validationResult.data.email);
      
      if (existingSubscriber) {
        return res.status(409).json({ message: "Email is already subscribed" });
      }
      
      // Create new subscriber
      const subscriber = await storage.createSubscriber(validationResult.data);
      
      res.status(201).json({
        message: "Successfully subscribed to newsletter",
        subscriber
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to process subscription" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
