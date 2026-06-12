# 🌍 Smart Travel Planner

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-13AA52?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

A full-stack travel planning application built with modern web technologies. Plan your dream trips with intelligent itinerary management, real-time collaboration, and beautiful UI components.

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [📦 Monorepo Setup](#-monorepo-setup)
- [🔧 Available Commands](#-available-commands)
- [🧪 Testing](#-testing)
- [🐳 Docker Setup](#-docker-setup)
- [📚 Project Details](#-project-details)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

- 🗺️ **Smart Trip Planning** - AI-powered itinerary generation and optimization
- 🤝 **Collaborative Planning** - Real-time collaboration with friends and travel companions
- 📍 **Location Intelligence** - Integrated maps and location-based recommendations
- 💰 **Budget Tracking** - Track expenses and split costs among travelers
- 🎒 **Packing Lists** - Smart packing recommendations based on destination and season
- 📱 **Responsive Design** - Works seamlessly across all devices
- 🔐 **Secure Authentication** - JWT-based auth with role-based access control
- 🌙 **Dark Mode Support** - Beautiful dark and light themes
- ⚡ **Real-time Updates** - GraphQL subscriptions for live collaboration

---

## 🏗️ Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────┐         ┌──────────────────────┐         │
│  │  Angular Frontend │         │  Material Design UI   │         │
│  │                  │         │  & Tailwind CSS      │         │
│  │  - Dashboard     │         │                      │         │
│  │  - Trip Manager  │         │  - Components Lib    │         │
│  │  - Map View      │         │  - Shared UI         │         │
│  └────────┬─────────┘         └──────┬───────────────┘         │
│           │                          │                         │
└───────────┼──────────────────────────┼─────────────────────────┘
            │                          │
            └──────────────┬───────────┘
                           │ GraphQL / REST
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API LAYER (NestJS)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────────────────────────────────┐         │
│  │  GraphQL Server (Apollo)                           │         │
│  │  - Authentication Module                           │         │
│  │  - Trip Service                                    │         │
│  │  - User Service                                    │         │
│  │  - Expense Tracking Service                        │         │
│  └────────────┬─────────────────────────────────────┘         │
│               │                                                │
│  ┌────────────▼─────────────────────────────────────┐         │
│  │  Shared Libraries                                │         │
│  │  - Types & Interfaces                            │         │
│  │  - Validators                                    │         │
│  │  - Utils & Helpers                               │         │
│  └────────────┬─────────────────────────────────────┘         │
│               │                                                │
└───────────────┼────────────────────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     DATA LAYER                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │
│  │  MongoDB         │  │  Mongoose ODM    │  │  Passport    │ │
│  │  Database        │  │  & Validation    │  │  JWT Auth    │ │
│  │                  │  │                  │  │              │ │
│  └──────────────────┘  └──────────────────┘  └──────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Data Flow Diagram

```
User Interaction (Client)
        │
        ▼
Angular Components
        │
        ├─► Apollo Client (GraphQL)
        │
        ▼
NestJS GraphQL Server
        │
        ├─► Request Validation
        │
        ├─► Authentication/Authorization
        │
        ├─► Business Logic
        │
        ▼
Mongoose Models
        │
        ▼
MongoDB Database
        │
        ├─► Query Results
        │
        ▼
Response to Client
        │
        ▼
UI Update
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|:-----------|:-------:|---------|
| ![Angular](https://img.shields.io/badge/Angular-21.2.9-DD0031?logo=angular) | 21.2.9 | Web Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?logo=typescript) | 5.9.2 | Language |
| ![Angular Material](https://img.shields.io/badge/Angular%20Material-21.2.14-FF6B6B?logo=material-design) | 21.2.14 | UI Components |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.19-06B6D4?logo=tailwindcss) | 3.4.19 | Styling |
| ![RxJS](https://img.shields.io/badge/RxJS-7.8.0-B81D13?logo=reactivex) | 7.8.0 | Reactive Programming |
| ![Apollo Client](https://img.shields.io/badge/Apollo%20Client-14.0.0-311C87?logo=apollographql) | 14.0.0 | GraphQL Client |

### Backend
| Technology | Version | Purpose |
|:-----------|:-------:|---------|
| ![NestJS](https://img.shields.io/badge/NestJS-11.1.26-E0234E?logo=nestjs) | 11.1.26 | Backend Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?logo=typescript) | 5.9.2 | Language |
| ![GraphQL](https://img.shields.io/badge/GraphQL-16.14.1-E10098?logo=graphql) | 16.14.1 | API Query Language |
| ![Apollo Server](https://img.shields.io/badge/Apollo%20Server-5.5.1-311C87?logo=apollographql) | 5.5.1 | GraphQL Server |
| ![Express](https://img.shields.io/badge/Express-5.2.1-90C53F?logo=express) | 5.2.1 | HTTP Server |

### Database & ORM
| Technology | Version | Purpose |
|:-----------|:-------:|---------|
| ![MongoDB](https://img.shields.io/badge/MongoDB-9.6.3-13AA52?logo=mongodb) | 9.6.3 | NoSQL Database |
| ![Mongoose](https://img.shields.io/badge/Mongoose-9.6.3-880000) | 9.6.3 | ODM |

### Authentication
| Technology | Version | Purpose |
|:-----------|:-------:|---------|
| ![JWT](https://img.shields.io/badge/JWT-4.0.1-000000?logo=json-web-tokens) | 4.0.1 | Token-based Auth |
| ![Passport](https://img.shields.io/badge/Passport-0.7.0-34E27A?logo=passport) | 0.7.0 | Authentication Middleware |
| ![bcrypt](https://img.shields.io/badge/bcrypt-6.0.0-CC342D) | 6.0.0 | Password Hashing |

### Build & Development Tools
| Technology | Version | Purpose |
|:-----------|:-------:|---------|
| ![Nx](https://img.shields.io/badge/Nx-22.7.5-143055?logo=nx) | 22.7.5 | Monorepo Management |
| ![Vite](https://img.shields.io/badge/Vite-7.3.2-646CFF?logo=vite) | 7.3.2 | Build Tool |
| ![Jest](https://img.shields.io/badge/Jest-30.3.0-C21325?logo=jest) | 30.3.0 | Testing Framework |
| ![Vitest](https://img.shields.io/badge/Vitest-4.0.9-6E9F18?logo=vitest) | 4.0.9 | Unit Testing |
| ![Playwright](https://img.shields.io/badge/Playwright-1.36.0-2EAD33?logo=playwright) | 1.36.0 | E2E Testing |
| ![ESLint](https://img.shields.io/badge/ESLint-9.8.0-4B3BE5?logo=eslint) | 9.8.0 | Linting |
| ![Prettier](https://img.shields.io/badge/Prettier-3.8.1-F7B93E?logo=prettier) | 3.8.1 | Code Formatting |

### DevOps & Containerization
| Technology | Version | Purpose |
|:-----------|:-------:|---------|
| ![Docker](https://img.shields.io/badge/Docker-latest-2496ED?logo=docker) | Latest | Containerization |
| ![Docker Compose](https://img.shields.io/badge/Docker%20Compose-latest-2496ED?logo=docker) | Latest | Multi-container Setup |

---

## 📁 Project Structure

```
smart-travel-planner/
│
├── 📂 apps/                                  # Applications
│   ├── 📁 client/                           # Angular Frontend App
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   ├── services/
│   │   │   │   ├── guards/
│   │   │   │   └── app.module.ts
│   │   │   ├── assets/
│   │   │   ├── styles/
│   │   │   ├── main.ts
│   │   │   └── styles.scss
│   │   ├── angular.json
│   │   └── tsconfig.json
│   │
│   └── 📁 api/                              # NestJS Backend API
│       ├── src/
│       │   ├── app/
│       │   │   ├── auth/
│       │   │   ├── trips/
│       │   │   ├── users/
│       │   │   ├── expenses/
│       │   │   ├── graphql/
│       │   │   │   ├── resolvers/
│       │   │   │   └── schemas/
│       │   │   └── app.module.ts
│       │   ├── config/
│       │   ├── database/
│       │   │   ├── models/
│       │   │   └── migrations/
│       │   └── main.ts
│       ├── Dockerfile
│       └── tsconfig.json
│
├── 📂 libs/                                 # Shared Libraries
│   ├── 📁 shared/
│   │   ├── 📁 types/                       # Shared TypeScript Types
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── models/
│   │   │   │   │   ├── enums/
│   │   │   │   │   └── interfaces/
│   │   │   │   └── index.ts
│   │   │   └── package.json
│   │   │
│   │   ├── 📁 ui/                         # Shared UI Components
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── buttons/
│   │   │   │   │   ├── cards/
│   │   │   │   │   ├── modals/
│   │   │   │   │   ├── forms/
│   │   │   │   │   └── layout/
│   │   │   │   └── index.ts
│   │   │   └── package.json
│   │   │
│   │   └── 📁 utils/                      # Utility Functions
│   │       ├── src/
│   │       │   ├── lib/
│   │       │   │   ├── validators/
│   │       │   │   ├── formatters/
│   │       │   │   └── helpers/
│   │       │   └── index.ts
│   │       └── package.json
│   │
│   └── 📁 api/
│       └── 📁 products/                    # API Product Service Library
│           ├── src/
│           └── package.json
│
├── 🔧 Configuration Files
│   ├── package.json                        # Dependencies
│   ├── package-lock.json
│   ├── tsconfig.base.json                  # TypeScript Configuration
│   ├── nx.json                             # Nx Workspace Configuration
│   ├── angular.json
│   ├── jest.config.ts                      # Jest Configuration
│   ├── jest.preset.js
│   ├── vitest.workspace.ts                 # Vitest Configuration
│   ├── eslint.config.mjs                   # ESLint Configuration
│   ├── prettier.rc                         # Prettier Configuration
│   ├── tailwind.config.js                  # Tailwind Configuration
│   ├── postcss.config.js                   # PostCSS Configuration
│   └── schema.gql                          # GraphQL Schema
│
├── 📦 Docker
│   ├── docker-compose.yml                  # Multi-container Setup
│   └── Dockerfile
│
├── 📚 Documentation
│   ├── README.md                           # This file
│   ├── CONTRIBUTING.md
│   ├── AGENTS.md
│   ├── CLAUDE.md
│   └── .github/workflows/                  # CI/CD Workflows
│
└── 🔒 Hidden Configs
    ├── .git/
    ├── .vscode/
    ├── .editorconfig
    └── .gitignore
```

### Directory Purposes

| Directory | Purpose |
|:----------|---------|
| `apps/client` | Angular frontend application with all UI components and pages |
| `apps/api` | NestJS backend with GraphQL API, database models, and business logic |
| `libs/shared/types` | TypeScript types, interfaces, and enums shared across monorepo |
| `libs/shared/ui` | Reusable UI components used by frontend and applications |
| `libs/shared/utils` | Utility functions and helpers shared across projects |
| `libs/api/products` | API-specific product service library |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x or **yarn** >= 3.x
- **MongoDB** >= 5.0 (or use Docker)
- **Docker** & **Docker Compose** (optional, for containerized setup)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deroso2017/smart-travel-planner.git
   cd smart-travel-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or if you encounter peer dependency issues
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in apps/api
   cp apps/api/.env.example apps/api/.env
   
   # Create .env file in apps/client
   cp apps/client/.env.example apps/client/.env
   ```

4. **Start development servers**
   ```bash
   # Option 1: Start both frontend and backend together
   npm run start:all
   
   # Option 2: Start them separately in different terminals
   # Terminal 1: Frontend
   npm run start:client
   
   # Terminal 2: Backend
   npm run start:api
   ```

5. **Open in browser**
   ```
   Client: http://localhost:4200
   API: http://localhost:3333/graphql
   ```

---

## 📦 Monorepo Setup

This project uses **Nx** for monorepo management, which provides:

- 🚀 **Fast incremental builds** - Only rebuild affected packages
- 📊 **Dependency graph visualization** - Understand project relationships
- 🔄 **Task distribution** - Run tasks in parallel across projects
- 📦 **Shared libraries** - Reuse code across applications
- 🧪 **Integrated testing** - Run tests for affected projects

### Monorepo Architecture

```
smart-travel-planner (Nx Workspace)
│
├── apps/
│   ├── client (Angular App)
│   └── api (NestJS App)
│
├── libs/
│   ├── shared/
│   │   ├── types (Shared Types)
│   │   ├── ui (UI Components)
│   │   └── utils (Utilities)
│   └── api/
│       └── products (Product Service)
│
└── Configuration (nx.json, tsconfig.base.json, etc.)
```

---

## 🔧 Available Commands

### Development

```bash
# Serve Angular frontend
npm run start:client
# or
npx nx serve client

# Serve NestJS backend API
npm run start:api
# or
npx nx serve api

# Serve both simultaneously
npm run start:all
```

### Building

```bash
# Build all projects
npm run build
# or
npx nx run-many -t build

# Build specific project
npx nx build client
npx nx build api

# Build affected projects only
npx nx affected -t build
```

### Testing

```bash
# Run all tests
npm test
# or
npx nx run-many -t test

# Run tests for specific project
npx nx test client
npx nx test api
npx nx test shared-types

# Run tests in watch mode
npx nx test client --watch

# Run tests with coverage
npx nx test client --coverage
```

### Linting & Code Quality

```bash
# Lint all projects
npx nx run-many -t lint

# Lint specific project
npx nx lint client
npx nx lint api

# Fix linting issues
npx nx lint client --fix
npx nx lint api --fix

# Format code with Prettier
npx prettier --write "apps/**/*.ts" "libs/**/*.ts"
```

### Code Generation

```bash
# Generate a new Angular component
npx nx g @nx/angular:component my-component --project=client

# Generate a new Angular service
npx nx g @nx/angular:service my-service --project=client

# Generate a new NestJS service
npx nx g @nx/nest:service my-service --project=api

# Generate a new library
npx nx g @nx/angular:lib shared-lib
```

### Project Graph & Analysis

```bash
# View interactive project dependency graph
npx nx graph

# View project details
npx nx show project client --web

# List all installed plugins
npx nx list

# Show affected projects
npx nx affected:graph
```

---

## 🧪 Testing

### Unit Testing

The project uses **Jest** and **Vitest** for unit testing:

```bash
# Run all unit tests
npm test

# Run tests for specific project
npx nx test client
npx nx test api
npx nx test shared-types

# Run tests in watch mode
npx nx test client --watch

# Generate coverage report
npx nx test client --coverage
```

### E2E Testing

End-to-end testing with **Playwright**:

```bash
# Run all E2E tests
npx nx run-many -t e2e

# Run E2E tests for specific project
npx nx e2e client-e2e

# Run E2E tests in CI mode
npx nx e2e-ci client-e2e

# Run specific test file
npx nx e2e client-e2e --spec="apps/client-e2e/src/e2e/home.cy.ts"
```

### Test Structure

```
apps/
├── client/
│   ├── src/
│   └── jest.config.ts
│
└── api/
    ├── src/
    └── jest.config.ts

libs/
├── shared/
│   ├── types/
│   │   └── jest.config.ts
│   ├── ui/
│   │   └── jest.config.ts
│   └── utils/
│       └── jest.config.ts
```

---

## 🐳 Docker Setup

### Using Docker Compose

The project includes a `docker-compose.yml` for easy containerization:

```bash
# Start all services (frontend, backend, MongoDB)
docker-compose up

# Start in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Remove all containers and volumes
docker-compose down -v
```

### Building Docker Images

```bash
# Build API Docker image
npx nx docker:build api

# Run Docker container
npx nx docker:run api

# Build production-ready image
docker build -f apps/api/Dockerfile -t travel-planner-api:latest .
```

### Docker Configuration

**docker-compose.yml structure:**
```yaml
services:
  api:
    build: ./apps/api
    ports:
      - "3333:3333"
    environment:
      - MONGODB_URI=mongodb://mongo:27017/travel-planner
    depends_on:
      - mongo
  
  mongo:
    image: mongo:6.0
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
```

---

## 📚 Project Details

### Frontend Application (`apps/client`)

**Technologies:** Angular 21, TypeScript, Material Design, Tailwind CSS, RxJS

**Key Features:**
- Dashboard with trip overview
- Trip creation and management UI
- Interactive map view for destinations
- Real-time notifications
- User profile and settings
- Responsive design for all devices

**File Structure:**
```
apps/client/src/app/
├── components/        # Reusable components
├── pages/            # Page components
├── services/         # API services
├── guards/           # Route guards
├── models/           # Data models
├── resolvers/        # Route resolvers
└── app.module.ts     # Main module
```

### Backend API (`apps/api`)

**Technologies:** NestJS, GraphQL, Apollo Server, MongoDB, Mongoose

**Key Modules:**
- **Auth Module** - JWT authentication, user registration/login
- **Users Module** - User profile management
- **Trips Module** - Trip CRUD operations
- **Expenses Module** - Expense tracking and splitting
- **GraphQL Module** - API schema and resolvers

**GraphQL Schema:**
```graphql
type User {
  id: ID!
  email: String!
  firstName: String!
  lastName: String!
  trips: [Trip!]!
}

type Trip {
  id: ID!
  title: String!
  destination: String!
  startDate: DateTime!
  endDate: DateTime!
  participants: [User!]!
  expenses: [Expense!]!
}

type Expense {
  id: ID!
  trip: Trip!
  amount: Float!
  description: String!
  paidBy: User!
  splitWith: [User!]!
}
```

### Shared Libraries

#### `libs/shared/types`
Centralized TypeScript types and interfaces:
```typescript
// Models
export interface User { ... }
export interface Trip { ... }
export interface Expense { ... }

// Enums
export enum TripStatus { ... }
export enum ExpenseCategory { ... }

// DTOs
export interface CreateTripDTO { ... }
export interface UpdateTripDTO { ... }
```

#### `libs/shared/ui`
Reusable UI components:
```typescript
// Material Design Components
- Button
- Card
- Modal
- Form Controls

// Custom Components
- TripCard
- ExpenseList
- MapViewer
- NotificationCenter
```

#### `libs/shared/utils`
Utility functions:
```typescript
// Validators
- validateEmail()
- validatePhoneNumber()
- validateTripDates()

// Formatters
- formatCurrency()
- formatDate()
- formatAddress()

// Helpers
- calculateExpenseSplit()
- groupExpensesByCategory()
- getDistanceBetweenLocations()
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/smart-travel-planner.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**
   - Provide clear description of changes
   - Ensure all tests pass
   - Follow the code style guidelines

### Code Style Guidelines

- Use **TypeScript** for all code
- Follow **ESLint** rules (run `npm run lint`)
- Format with **Prettier** (run `npm run format`)
- Write descriptive commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Useful Resources

### Documentation
- [Nx Documentation](https://nx.dev)
- [Angular Documentation](https://angular.io/docs)
- [NestJS Documentation](https://docs.nestjs.com)
- [GraphQL Documentation](https://graphql.org/learn)
- [MongoDB Documentation](https://docs.mongodb.com)

### Tutorials
- [Angular Monorepo Tutorial](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial)
- [NestJS Getting Started](https://docs.nestjs.com/first-steps)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices)

### Tools
- [Apollo Studio](https://www.apollographql.com/studio) - GraphQL IDE
- [MongoDB Compass](https://www.mongodb.com/products/compass) - MongoDB GUI
- [Postman](https://www.postman.com) - API Testing

---

## 💬 Community & Support

- 📧 **Email:** [your-email@example.com](mailto:your-email@example.com)
- 🐙 **GitHub Issues:** [Report a bug](https://github.com/deroso2017/smart-travel-planner/issues)
- 💡 **Discussions:** [Share ideas](https://github.com/deroso2017/smart-travel-planner/discussions)
- 🐦 **Twitter:** [@SmartTravelApp](https://twitter.com)

---

## 🎉 Acknowledgments

- [Nx](https://nx.dev) - Amazing monorepo management tool
- [Angular](https://angular.io) - Progressive web framework
- [NestJS](https://nestjs.com) - Scalable Node.js framework
- [GraphQL](https://graphql.org) - Query language for APIs
- [MongoDB](https://mongodb.com) - NoSQL database
- All contributors and supporters

---

<div align="center">

**[⬆ back to top](#-smart-travel-planner)**

Made with ❤️ by [deroso2017](https://github.com/deroso2017)

</div>
