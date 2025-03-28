import { 
  users, type User, type InsertUser,
  statistics, type Statistic, type InsertStatistic,
  resources, type Resource, type InsertResource,
  researchNews, type ResearchNews, type InsertResearchNews,
  subscribers, type Subscriber, type InsertSubscriber
} from "@shared/schema";

// Import sample data for development
import { healthDisparitiesData } from "../client/src/lib/statData";
import { allResources } from "../client/src/lib/resourcesData";
import { allResearchNews } from "../client/src/lib/researchData";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Statistics operations
  getAllStatistics(): Promise<Statistic[]>;
  getStatistic(id: number): Promise<Statistic | undefined>;
  createStatistic(statistic: InsertStatistic): Promise<Statistic>;

  // Resource operations
  getAllResources(): Promise<Resource[]>;
  getResource(id: number): Promise<Resource | undefined>;
  createResource(resource: InsertResource): Promise<Resource>;

  // Research news operations
  getAllResearchNews(): Promise<ResearchNews[]>;
  getResearchNews(id: number): Promise<ResearchNews | undefined>;
  createResearchNews(news: InsertResearchNews): Promise<ResearchNews>;

  // Subscriber operations
  getAllSubscribers(): Promise<Subscriber[]>;
  getSubscriber(id: number): Promise<Subscriber | undefined>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private stats: Map<number, Statistic>;
  private resourceList: Map<number, Resource>;
  private news: Map<number, ResearchNews>;
  private subscriberList: Map<number, Subscriber>;
  
  private userIdCounter: number;
  private statsIdCounter: number;
  private resourceIdCounter: number;
  private newsIdCounter: number;
  private subscriberIdCounter: number;

  constructor() {
    this.users = new Map();
    this.stats = new Map();
    this.resourceList = new Map();
    this.news = new Map();
    this.subscriberList = new Map();

    this.userIdCounter = 1;
    this.statsIdCounter = 1;
    this.resourceIdCounter = 1;
    this.newsIdCounter = 1;
    this.subscriberIdCounter = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Add statistics
    healthDisparitiesData.forEach(stat => {
      this.stats.set(stat.id, {
        ...stat,
        chartData: null // Sample data doesn't include actual chart data
      });
      if (stat.id >= this.statsIdCounter) {
        this.statsIdCounter = stat.id + 1;
      }
    });

    // Add resources
    allResources.forEach(resource => {
      this.resourceList.set(resource.id, {
        ...resource,
        description: resource.title // Using title as description since sample data doesn't have descriptions
      });
      if (resource.id >= this.resourceIdCounter) {
        this.resourceIdCounter = resource.id + 1;
      }
    });

    // Add research news
    allResearchNews.forEach(article => {
      this.news.set(article.id, {
        ...article,
        publishDate: new Date(article.publishDate)
      });
      if (article.id >= this.newsIdCounter) {
        this.newsIdCounter = article.id + 1;
      }
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Statistics methods
  async getAllStatistics(): Promise<Statistic[]> {
    return Array.from(this.stats.values());
  }

  async getStatistic(id: number): Promise<Statistic | undefined> {
    return this.stats.get(id);
  }

  async createStatistic(insertStatistic: InsertStatistic): Promise<Statistic> {
    const id = this.statsIdCounter++;
    const statistic: Statistic = { ...insertStatistic, id };
    this.stats.set(id, statistic);
    return statistic;
  }

  // Resource methods
  async getAllResources(): Promise<Resource[]> {
    return Array.from(this.resourceList.values());
  }

  async getResource(id: number): Promise<Resource | undefined> {
    return this.resourceList.get(id);
  }

  async createResource(insertResource: InsertResource): Promise<Resource> {
    const id = this.resourceIdCounter++;
    const resource: Resource = { ...insertResource, id };
    this.resourceList.set(id, resource);
    return resource;
  }

  // Research news methods
  async getAllResearchNews(): Promise<ResearchNews[]> {
    return Array.from(this.news.values());
  }

  async getResearchNews(id: number): Promise<ResearchNews | undefined> {
    return this.news.get(id);
  }

  async createResearchNews(insertNews: InsertResearchNews): Promise<ResearchNews> {
    const id = this.newsIdCounter++;
    const news: ResearchNews = { ...insertNews, id };
    this.news.set(id, news);
    return news;
  }

  // Subscriber methods
  async getAllSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscriberList.values());
  }

  async getSubscriber(id: number): Promise<Subscriber | undefined> {
    return this.subscriberList.get(id);
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscriberList.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.subscriberIdCounter++;
    const subscriber: Subscriber = { ...insertSubscriber, id };
    this.subscriberList.set(id, subscriber);
    return subscriber;
  }
}

export const storage = new MemStorage();
