# 🎮 Game Hub

**Live demo:** https://6a83acdb41e937749bf85b4f--zitrohub.netlify.app/

Game Hub is a personal learning project where I build small browser games while learning software architecture, testing, UI/UX, backend development, databases, authentication, and security.

The first game is **Simon**, with its core logic implemented independently from React and then connected to a React UI.

## 🎯 Goals

The project is built step by step. The idea is to introduce new layers only when they solve a real problem.

Planned features:

* Game Hub and routing
* Simon game
* Testing
* UI/UX, animations, and sound
* Backend and REST API
* Database with Prisma
* Authentication
* Security fundamentals
* Scores and leaderboards
* More games

## 🛠️ Tech stack

* **Vite** — build tool
* **React** — UI
* **TypeScript** — type safety
* **ESLint** — linting
* **Prettier** — formatting
* **pnpm** — package manager

## 📋 Requirements

* **Node.js**
* **pnpm**

Install pnpm if needed:

```bash
npm install -g pnpm
```

## 🚀 Installation

Clone the repository:

```bash
git clone <YOUR_REPO_URL>
cd game-hub
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Then open the URL shown in the terminal, usually `http://localhost:5173`.

## 📜 Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start development server |
| `pnpm build` | Build for production     |
| `pnpm lint`  | Run ESLint               |

## 📁 Structure

```text
src/
├── app/
├── components/
├── features/
│   └── simon/
├── pages/
├── routes/
├── utils/
└── main.tsx
```

## 📌 Status

🚧 **Work in progress**

Currently in the early development phase.
