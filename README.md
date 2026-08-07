# 🎮 Game Hub

Game Hub is a personal learning project focused on building a hub of small browser games from scratch, with an emphasis on understanding software architecture concepts step by step: clean domain logic, testing, UI/UX, backend, database, authentication, and security.

The first game being built is **Simon**, implemented independently of React for its core logic, then wired into a React UI.

## 🎯 Project goals

This project is built incrementally, phase by phase, following a personal roadmap. The guiding principle: **don't add a layer of architecture (repository, DTO, service, etc.) until there's an actual problem it solves.**

Planned phases include:

- Game Hub + routing between games
- Simon game core logic (framework-agnostic)
- Testing (Vitest + React Testing Library)
- UI/UX, animations, sound
- Backend + REST API
- Database with Prisma
- Users & authentication
- Cryptography fundamentals
- Score & leaderboard system
- Additional games

## 🛠️ Tech stack

- **Vite** — build tool / dev server
- **React** — UI library
- **TypeScript** (strict mode) — type safety
- **ESLint** — static code analysis
- **Prettier** — code formatting
- **pnpm** — package manager

## 📋 Requirements

Before installing, make sure you have:

- **Node.js** — [check the recommended version here](https://nodejs.org/)
- **pnpm** — this project uses pnpm as its package manager (not npm or yarn)

To install pnpm globally, if you don't have it yet:

\`\`\`bash
npm install -g pnpm
\`\`\`

## 🚀 Installation

1. Clone the repository:

\`\`\`bash
git clone <YOUR_REPO_URL>
cd game-hub
\`\`\`

2. Install dependencies:

\`\`\`bash
pnpm install
\`\`\`

3. Start the development server:

\`\`\`bash
pnpm dev
\`\`\`

4. Open your browser at the URL shown in the terminal (usually `http://localhost:5173`).

## 📜 Available scripts

| Script | Description |
|---|---|
| `pnpm dev` | Starts the development server with HMR |
| `pnpm build` | Builds the app for production |
| `pnpm lint` | Runs ESLint |

## 📁 Project structure

\`\`\`
src/
├── app/
├── components/
├── features/
│   └── simon/
├── pages/
├── routes/
├── utils/
└── main.tsx
\`\`\`

## 📌 Status

🚧 Work in progress — currently in early setup phase.\

