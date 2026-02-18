# Evidence CRM

A lightweight Customer Discovery Log (Mom-Test CRM) focused on tracking customer interviews, questions, quotes, pain points, and hypotheses.

## 🎯 Purpose

Evidence CRM helps startups and product teams conduct better customer discovery by organizing:
- **Contacts** - People you've interviewed
- **Interviews** - Questions asked and answers received
- **Tags** - Organize and filter discoveries
- **Insights Board** - Synthesize patterns from customer conversations

## 🛠️ Tech Stack

- **Frontend**: Next.js 16+ (App Router)
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development)

### Using Docker (Recommended)

```bash
# Start development environment
docker compose -f docker-compose.yml -f docker-compose.dev.yml up

# Or production build
docker compose up
```

The app will be available at `http://localhost:3000`

### Local Development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start PostgreSQL (via Docker)
docker compose up db -d

# Run development server
npm run dev
```

## 📁 Project Structure

```
evidence-crm/
├── src/
│   ├── app/          # Next.js App Router pages
│   ├── components/   # Reusable React components
│   ├── lib/          # Utilities and helpers
│   └── types/        # TypeScript type definitions
├── prisma/           # Database schema and migrations
├── public/           # Static assets
└── docker-compose.yml
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## 🐳 Docker Commands

```bash
# Build containers
docker compose build

# Start all services
docker compose up -d

# View logs
docker compose logs -f

# Stop all services
docker compose down

# Reset database
docker compose down -v
```

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
