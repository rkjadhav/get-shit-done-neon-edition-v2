
# Get Shit Done v2

**An ADHD-friendly productivity app designed to help users prioritize, focus, and execute tasks through gamified micro-tasking, dynamic visuals, and dopamine-driven feedback loops.**

Created by Rutik Jadhav.

## Key Features

*   **ADHD-Friendly Design:** UI/UX tailored for focus and minimizing overwhelm.
*   **Gamified Micro-tasking:** Break down large tasks into smaller, manageable sub-tasks (micro-tasks).
*   **Dopamine-Driven Feedback:**
    *   Earn XP for completing sub-tasks and tasks.
    *   Level up your profile.
    *   Maintain daily streaks.
    *   Unlock achievements.
*   **Task Spinner:** A fun way to pick the next micro-task when feeling indecisive, combating choice paralysis.
*   **Focus Timer:** Integrated Pomodoro-like timer to dedicate focused sessions on specific micro-tasks.
*   **Dopamine Progress Bar:** Visualize daily micro-task completion.
*   **Journaling:** Daily journal entries with mood tracking.
*   **Activity Log:** Review past accomplishments and journal entries.
*   **Progress Dashboard:**
    *   Visualize task completion trends (daily, weekly).
    *   Track XP growth over time.
    *   See task category distribution (pie chart).
    *   View overall progress (level, streak, achievements).
*   **Achievements System:** Unlock badges for milestones and consistent effort.
*   **Virtual Focus Plant:** A small visual plant that grows as you accumulate XP, symbolizing your focus and growth.
*   **Modern Glassmorphic UI:** Aesthetically pleasing interface with blur effects, translucency, and subtle glows.
*   **Interactive Animations:** Smooth transitions and animations to enhance user experience.
*   **Local Storage Persistence:** All your tasks, progress, and journal entries are saved in your browser's local storage.
*   **Data Management:** Export and import your app data (tasks, journal, progress) as a JSON file.
*   **Responsive Design:** Works on desktop and mobile devices.

## Tech Stack

*   **React 19:** (Loaded via esm.sh CDN, no build step)
*   **TypeScript:** For type safety and better developer experience.
*   **Tailwind CSS:** (Loaded via CDN) For utility-first styling.
*   **Recharts:** (Loaded via esm.sh CDN) For rendering charts in the dashboard.
*   **HTML5 & Modern JavaScript (ES Modules):** Runs directly in modern browsers.
*   **No Build Step:** Designed for simplicity and direct browser execution.

## How to Run

This application is designed to run directly in a modern web browser that supports ES Modules and Import Maps.

1.  **Clone the repository (or download the files).**
2.  **Open `index.html` in your web browser.**

    *   If you encounter issues with `file:///` protocol (especially related to module loading or local storage access in some browsers), you can serve the files using a simple local HTTP server.
    *   One easy way is to use `npx serve` (Node.js required):
        ```bash
        npx serve .
        ```
        Then open the URL provided by the server (usually `http://localhost:3000` or `http://localhost:5000`).

## Project Structure

```
.
├── README.md               # This file
├── index.html              # Main HTML entry point, loads Tailwind, styles, import maps
├── index.tsx               # React application root and initialization
├── App.tsx                 # Main App component, handles page routing
├── metadata.json           # Application metadata
├── types.ts                # TypeScript type definitions for the application
├── constants.tsx           # Shared constants, SVG icons, and static configurations
├── hooks/
│   └── useLocalStorage.ts  # Custom hook for persisting state to local storage
├── contexts/
│   └── AppContext.tsx      # Global React context for state management
├── components/
│   ├── ui/                 # Reusable UI components (Button, GlassCard, Input, Modal)
│   ├── BottomNav.tsx       # Mobile bottom navigation
│   └── SideNav.tsx         # Desktop side navigation
└── pages/
    ├── TodayPage.tsx       # Page for managing daily tasks, spinner, focus timer
    ├── ActivityPage.tsx    # Page for daily journal and past activity log
    ├── DashboardPage.tsx   # Page for displaying progress charts and stats
    └── SettingsPage.tsx    # Page for app settings, data export/import, reset
```

## Customization

*   **Styling:** Primarily through Tailwind CSS classes in `.tsx` files and global CSS variables/styles in `index.html`.
*   **Task Logic:** Core task management logic is within `AppContext.tsx` and `TodayPage.tsx`.
*   **Constants:** Colors, default timers, XP values, etc., can be modified in `constants.tsx`.

---

Enjoy getting shit done! ✨🚀
