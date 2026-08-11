# CareLink HMS

**Hospital & Clinic Management Platform** — proprietary software.

Patients, doctors, appointments, EMR, lab, pharmacy, billing, and admin in one system.

## Prerequisites

- Node.js 18+
- npm 9+
- Docker (optional, for Postgres/Redis)

## Installation

```bash
cp env.example .env
npm install
```

## Run (development)

```bash
# API only
npm run dev:api

# Web UI only
npm run dev:web

# Both
npm run dev
```

API: http://localhost:4000  
Web: http://localhost:5173

## Docker

```bash
npm run docker:up
```

## Tests

```bash
npm test
```

## Project structure

```
carelink/
├── apps/web              React frontend
├── services/api          Express API
├── packages/shared       Shared constants & validators
├── tests/unit            Jest unit tests
├── docs/                 Architecture notes
└── docker-compose.yml
```

## Roles

Admin · Doctor · Nurse · Reception · Lab · Pharmacy · Patient

## License

Proprietary. All rights reserved. Not open source.


## Expanded HMS module pack
See `packages/generated-hms` for the large parameterized module set generated from the existing CareLink HMS architecture.
