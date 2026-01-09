# Contributing to ShadowGame

First off, thanks for taking the time to contribute! ShadowGame is a community-driven platform, and we value your help in making systems engineering accessible to everyone.

## 🛠️ How to Contribute

### 1. Reporting Bugs
-   Check if the issue already exists in the "Issues" tab.
-   If not, create a new issue.
-   **Include**:
    -   Browser & OS version.
    -   Steps to reproduce.
    -   Expected vs. Actual behavior.
    -   Screenshots if possible.

### 2. Requesting Features
-   Open a new issue with the label `enhancement`.
-   Explain **why** this feature is needed and how it improves the learning experience.

### 3. Submitting Code
1.  **Fork** the repository.
2.  **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/ShadowGame.git`
3.  **Create a Branch**:
    -   `git checkout -b feat/new-mission-type` (for features)
    -   `git checkout -b fix/editor-crash` (for bugs)
4.  **Install Dependencies**: `npm install`
5.  **Make Changes**: Please follow the existing code style (Prettier/ESLint).
6.  **Commit**: Use [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat: add new rust level`).
7.  **Push**: `git push origin feat/new-mission-type`
8.  **Open a Pull Request (PR)**: Target the `main` branch.

## 💻 Development Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up Environment Variables
cp .env.example .env
# (Ask maintainers for local DB setup if needed, or use your own local Postgres)

# 3. specific database setup
npx prisma generate
npx prisma db push
npx prisma db seed

# 4. Run the development server
npm run dev
```

## 🎨 Code Style
-   We use **Tailwind CSS** for styling.
-   We use **TypeScript** for strict type safety.
-   Please ensure no linting errors before pushing.

## ⚖️ License
By contributing, you agree that your contributions will be licensed under the project's [LICENSE](LICENSE).
