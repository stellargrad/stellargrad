# StellarGrad 🎓⛓️

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Stars](https://img.shields.io/github/stars/stellargrad/stellargrad?style=social)](https://github.com/stellargrad/stellargrad)

**StellarGrad** is an open-source educational platform for learning blockchain development on Stellar. Students progress through interactive courses, write and deploy Soroban smart contracts, collaborate on projects, and earn blockchain-verified certificates.

---

## Live App

- **Frontend** — [https://stellargrad.vercel.app](https://stellargrad.vercel.app)
- **Backend** — Hosted on Render with PostgreSQL, Redis, and Stellar/Soroban Testnet

---

## Core Modules

| Module | Description |
|--------|-------------|
| Blockchain Learning Simulator | Visualize transactions, block mining, and hash chaining |
| Smart Contract Playground | Write, run, and test Soroban (Rust) contracts in-browser |
| Web3 Learning Roadmap | Guided path from basics through full Web3 applications |
| Hackathon Idea Generator | Generate project ideas by technology and sector |
| Open Source Contribution Trainer | Git workflows, PR exercises, and DID-backed contributor verification |
| Certificate System | Earn NFT-minted, blockchain-verified completion certificates |

---

## Tech Stack

**Frontend**
- Next.js 16 / React 19
- Tailwind CSS
- Monaco Editor
- Stellar SDK

**Backend**
- Node.js / Express / TypeScript
- PostgreSQL + Prisma
- Redis
- JWT + Passkey (WebAuthn)

**Blockchain**
- Stellar Network
- Soroban Smart Contracts (Rust)

---

## Project Structure

```
stellargrad/
├── frontend/       # Next.js app
├── backend/        # Express API
├── contracts/      # Soroban Cargo workspace
├── indexer/        # Off-chain Soroban event indexer (Rust)
├── scripts/        # Dev automation
└── docs/           # Architecture and API docs
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- Docker + Docker Compose
- Rust toolchain (for contracts)
- Stellar CLI

### Run Frontend Locally

```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
# Open http://localhost:3000
```

### Run Backend Locally

```bash
# Start database and Redis
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

cd backend
cp .env.example .env   # fill in your values
npm install
npm run dev
```

### Environment Variables

Copy `.env.example` at the root and in `backend/` to `.env` and fill in:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |
| `JWT_SECRET` | Secret for JWT signing |
| `STELLAR_NETWORK` | `testnet` or `mainnet` |
| `ISSUER_NAME` | Name shown on certificates |

---

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-feature`
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/)
4. Open a Pull Request

Check [open issues](https://github.com/stellargrad/stellargrad/issues) for good first contributions, or look for the `good first issue` label.

---

## License

MIT — see [LICENSE](LICENSE) for details.
