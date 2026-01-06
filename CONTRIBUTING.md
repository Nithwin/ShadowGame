# Contributing to ShadowGame

Welcome, Operative. 
We appreciate your interest in upgrading the ShadowGame system. To ensure the integrity of the simulation, please follow the protocols below.

## ⚠️ Important Protocol
**ShadowGame is Source-Available Software.** 
You are encouraged to read the code, find bugs, and submit improvements. However, you may **NOT** deploy, host, or sell this application independently. All contributions become the property of ShadowGame Systems upon submission.

---

## 🛠️ How to Contribute

### 1. Fork & Clone
Fork the repository to your own GitHub account, then clone it locally:
```bash
git clone https://github.com/YOUR_USERNAME/shadow-game.git
cd shadow-game
```

### 2. Initialize Environment
Install dependencies (Node.js 18+ required):
```bash
npm install
```

### 3. Create a Branch
Always create a new branch for your specific feature or fix. Use the format `type/feature-name`:
- `feat/new-mission-ui`
- `fix/navbar-glitch`
- `docs/update-readme`

```bash
git checkout -b feat/your-feature-name
```

### 4. Develop & Test
Run the development server:
```bash
npm run dev
```
Ensure your changes do not break the "Deep Space Cyber-Luxe" theme. 
- **Light Mode**: Must be CLEAN (Gray/White/Deep Violet).
- **Dark Mode**: Must be IMMERSIVE (Black/Neon/Purple).

### 5. Commit Standards
We use Conventional Commits. Your commit message should look like this:
- `feat: added new magnetic button component`
- `fix: corrected footer alignment in mobile`
- `style: refined hero gradient colors`

### 6. Submit Pull Request (PR)
Push your branch and open a PR against the `main` branch of the original repository.
- Provide a clear description of what you changed.
- Attach screenshots if UI changes were made.
- Wait for code review from Mission Control.

---

## 🎨 Coding Standards
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS v4 (No custom CSS files unless necessary).
- **Icons**: Lucide React only.
- **Language**: TypeScript (Strict mode). No `any` types allowed.

## 🤝 Community
Join our Discord [link-to-discord] to discuss features before building. 

**Happy Hacking.**
