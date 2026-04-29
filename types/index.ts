export interface LandingPage {
  id: number;
  title: string;
  description: string;
  vercelUrl: string;
  image?: string;
  technologies: string[];
  category: string;
}

export interface Dashboard {
  id: number;
  title: string;
  description: string;
  vercelUrl?: string;
  screenshots: string[];
  features: string[];
  technologies: string[];
}

export interface Workflow {
  id: number;
  title: string;
  description: string;
  screenshot: string;
  function: string;
  useCase: string;
  triggers: string[];
  actions: string[];
  integrations: string[];
}

export interface Portfolio {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  status: 'live' | 'in-progress' | 'concept';
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}
