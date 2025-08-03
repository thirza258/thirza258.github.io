

export interface Project {
    name: string;
    description: string[];
    mainPhoto: string; // From the main Portfolio component
    "Programming language used or technology used": string[];
    organization?: string; // Optional property
    context?: string;      // Optional property
    links?: Record<string, string>; // Optional object with string keys/values
    highlightPhoto?: string[];    // Optional array of strings
  }