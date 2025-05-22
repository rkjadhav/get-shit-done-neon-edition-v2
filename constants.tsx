
import React from 'react';
import { Achievement, TaskTagColor, TaskTag, AppPage } from './types.ts';

export const MAX_DAILY_TASKS = 5;
export const DEFAULT_FOCUS_TIMER_MINUTES = 15;
export const XP_PER_SUBTASK = 10;
export const XP_PER_TASK = 50;
export const XP_LEVEL_UP_BASE = 100; // XP needed for level 2, then increases

// Updated for glassmorphic style: more vibrant, slightly translucent
export const TASK_TAG_COLORS: Record<TaskTagColor, string> = {
  [TaskTagColor.PURPLE]: 'bg-purple-500/70 text-purple-100 border border-purple-400/50 shadow-md',
  [TaskTagColor.PINK]: 'bg-pink-500/70 text-pink-100 border border-pink-400/50 shadow-md',
  [TaskTagColor.BLUE]: 'bg-blue-500/70 text-blue-100 border border-blue-400/50 shadow-md',
  [TaskTagColor.GREEN]: 'bg-green-500/70 text-green-100 border border-green-400/50 shadow-md',
  [TaskTagColor.YELLOW]: 'bg-yellow-500/70 text-yellow-900 border border-yellow-400/50 shadow-md', // Yellow needs darker text
};

export const AVAILABLE_TAGS: TaskTag[] = [
  { id: 'work', name: 'Work', color: TaskTagColor.BLUE },
  { id: 'personal', name: 'Personal', color: TaskTagColor.GREEN },
  { id: 'creative', name: 'Creative', color: TaskTagColor.PURPLE },
  { id: 'learning', name: 'Learning', color: TaskTagColor.YELLOW },
  { id: 'chores', name: 'Chores', color: TaskTagColor.PINK },
];

export const MOOD_OPTIONS: Array<'😊' | '😐' | '😞' | '🥳' | '🤯'> = ['😊', '😐', '😞', '🥳', '🤯'];


// SVG Icons - Base structure remains, color/stroke applied via className
export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const ListIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 17.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export const ChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h-1.5m1.5 0h16.5M3.75 16.5c0-1.242 1.008-2.25 2.25-2.25h13.5A2.25 2.25 0 0121 16.5v-4.875c0-.621-.504-1.125-1.125-1.125H4.875C4.254 10.5 3.75 10.004 3.75 9.375V3z" />
  </svg>
);

export const CogIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.008 1.119-1.242A9.023 9.023 0 0012 2.25c.995 0 1.951.233 2.836.648.559.234 1.03.7 1.119 1.242A9.003 9.003 0 0118 9.75c0 1.024-.186 2.006-.534 2.906-.09.542-.56 1.008-1.119 1.242A9.023 9.023 0 0012 14.25c-.995 0-1.951-.233-2.836-.648-.559.234-1.03-.7-1.119-1.242A9.003 9.003 0 016 9.75c0-1.024.186-2.006.534-2.906z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c1.76 0 3.374-.482 4.774-1.303m-9.548 0A9.003 9.003 0 0012 21.75zM4.599 16.036A8.975 8.975 0 012.25 12c0-1.76.482-3.374 1.303-4.774m15.194 0A8.975 8.975 0 0121.75 12c0 1.76-.482-3.374-1.303 4.774M12 6.75V2.25m0 19.5V14.25" />
  </svg>
);

export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}> {/* Thicker for impact */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}> {/* Filled version */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
  </svg>
);

export const PauseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}> {/* Filled version */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
  </svg>
);

export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 7.5l.813 2.846a4.5 4.5 0 01-3.09 3.09L12.154 15l2.846.813a4.5 4.5 0 013.09 3.09L18.25 21.75l.813-2.846a4.5 4.5 0 013.09-3.09L24.75 15l-2.846-.813a4.5 4.5 0 01-3.09-3.09L18.25 7.5z" />
  </svg>
);

export const ArrowPathIcon = (props: React.SVGProps<SVGSVGElement>) => ( // Shuffle Icon
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
);

export const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c1.153 0 2.24.032 3.287.082L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c1.153 0 2.24.032 3.287.082L9.26 9" />
  </svg>
);


export const TrophyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 9H11.25A3.375 3.375 0 007.5 12.375v4.125m9.75-3.75H7.5M12 15V9" />
    </svg>
);

export const FireIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048l2.472-2.472A1.499 1.499 0 0110.414 4.5h3.172c.53 0 1.011.203 1.379.562l.397.397zM10.414 4.5L9.75 3.836A2.25 2.25 0 007.964 3H6.75a2.25 2.25 0 00-2.25 2.25v.964C4.5 7.036 5.214 8.25 6.75 8.25H7.5m3.375 0h1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.125V8.25zm-3.375 0H7.5m3.375 0L9.75 7.164M12 21v-1.5M12 21a8.222 8.222 0 003.962-1.038 8.197 8.197 0 002.038-2.89M12 21a8.222 8.222 0 01-3.962-1.038 8.197 8.197 0 01-2.038-2.89M12 21c-.33 0-.653-.017-.968-.05L9.75 18.6M12 21c.33 0 .653-.017.968-.05l1.282 2.35" />
    </svg>
);

export const ZapIcon = (props: React.SVGProps<SVGSVGElement>) => ( // For "Boss Fight" / Challenge
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

export const LeafIcon = (props: React.SVGProps<SVGSVGElement>) => ( // For virtual plant
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> {/* Slightly thinner for delicacy */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.132 10.816c.058-.094.12-.183.184-.268.064-.086.128-.17.194-.255.065-.085.132-.167.2-.248.068-.082.132-.16.2-.235.068-.074.133-.145.2-.212.067-.068.133-.133.2-.195.067-.063.133-.122.2-.18.066-.058.132-.112.2-.164.067-.052.133-.1.2-.145.067-.044.133-.084.2-.12.067-.037.133-.07.2-.1.067-.03.133-.054.2-.074.067-.02.133-.037.2-.048.067-.012.133-.02.2-.023.067-.004.133-.004.2-.004h.4c.067 0 .133 0 .2.004.067.003.133.01.2.022.067.012.133.025.2.048.067.023.133.045.2.074.067.028.133.057.2.1.067.035.133.072.2.118.067.046.133.093.2.146.067.052.133.107.2.164.067.058.133.118.2.18.067.063.133.127.2.195.067.067.133.138.2.212.067.075.132.153.2.235.068.082.132.16.2.248.066.085.13.17.194.255.063.085.126.174.184.268.29.472.545.95.756 1.444.216.495.38 1.004.48 1.522A8.04 8.04 0 0112 21a8.04 8.04 0 01-3.052-6.218c.1-.518.264-1.027.48-1.522.21-.494.465-.972.756-1.444zM6.11 8.693c.632-1.23 1.466-2.332 2.496-3.293.968-.902 2.046-1.66 3.236-2.25a13.46 13.46 0 013.918-.356c1.425.173 2.78.662 3.996 1.435M4.5 15.75A8.04 8.04 0 0012 21a8.04 8.04 0 007.5-5.25" />
    </svg>
);

const iconSize = "w-7 h-7"; // Standardized icon size for nav

export const NAV_ITEMS: Array<{ name: AppPage; icon: React.ReactNode }> = [
  { name: AppPage.Today, icon: <HomeIcon className={iconSize} /> },
  { name: AppPage.Activity, icon: <ListIcon className={iconSize} /> },
  { name: AppPage.Dashboard, icon: <ChartIcon className={iconSize} /> },
  { name: AppPage.Settings, icon: <CogIcon className={iconSize} /> },
];

export const ACHIEVEMENTS_LIST: Achievement[] = [
    {
        id: 'first_focus_wizard',
        name: 'Focus Wizard',
        description: 'Complete your first 5 micro tasks in a day.',
        icon: <SparklesIcon className="w-8 h-8 text-[var(--text-accent)]" style={{ filter: 'drop-shadow(0 0 5px currentColor)'}} />,
        condition: (tasks, progress) => {
            const today = new Date().toISOString().split('T')[0];
            const todayTasks = tasks.filter(t => new Date(t.createdAt).toISOString().split('T')[0] === today);
            const completedSubtasksToday = todayTasks.reduce((acc, task) => acc + task.subtasks.filter(st => st.completed).length, 0);
            return completedSubtasksToday >= 5;
        }
    },
    {
        id: 'consistency_goblin',
        name: 'Consistency Goblin',
        description: 'Maintain a 3-day streak.',
        icon: <FireIcon className="w-8 h-8 text-orange-400" style={{ filter: 'drop-shadow(0 0 5px currentColor)'}} />,
        condition: (tasks, progress) => progress.dailyStreak >= 3
    },
    {
        id: 'task_slayer',
        name: 'Task Slayer',
        description: 'Complete all 5 daily tasks.',
        icon: <TrophyIcon className="w-8 h-8 text-yellow-400" style={{ filter: 'drop-shadow(0 0 5px currentColor)'}} />,
        condition: (tasks) => {
            const today = new Date().toISOString().split('T')[0];
            const todayTasks = tasks.filter(t => new Date(t.createdAt).toISOString().split('T')[0] === today);
            return todayTasks.length === MAX_DAILY_TASKS && todayTasks.every(t => t.completed);
        }
    }
];

export const WEEKLY_BOSS_FIGHT_GOAL = 20; // Complete 20 microtasks in a week