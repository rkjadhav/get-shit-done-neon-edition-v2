
export enum TaskTagColor {
  PURPLE = 'purple',
  PINK = 'pink',
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
}

export interface TaskTag {
  id: string;
  name: string;
  color: TaskTagColor;
}

export interface Subtask {
  id: string;
  text: string;
  completed: boolean;
}

export interface Task {
  id: string;
  title: string;
  subtasks: Subtask[];
  tags: TaskTag[];
  estimatedEffort?: '5 min' | '15 min' | '30 min' | '1 hour' | '2 hours+';
  completed: boolean;
  createdAt: number; // timestamp
}

export interface JournalEntry {
  id: string;
  date: string; // YYYY-MM-DD
  text: string;
  mood: '😊' | '😐' | '😞' | '🥳' | '🤯' | ''; // Emoji mood
}

export interface UserProgress {
  xp: number;
  level: number;
  dailyStreak: number;
  lastActivityDate?: string; // YYYY-MM-DD
  achievements: string[]; // Achievement IDs
  // Simplified virtual pet/plant
  virtualPetProgress: number; // 0-100, for growth stages
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  condition: (tasks: Task[], progress: UserProgress, allJournalEntries: JournalEntry[]) => boolean;
}

export enum AppPage {
  Today = 'Today',
  Activity = 'Activity',
  Dashboard = 'Dashboard',
  Settings = 'Settings',
}
    