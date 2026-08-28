# CareLink Architecture

## Layers

- **apps/web** — React SPA for staff and patient portals
- **services/api** — Express REST API with JWT auth and RBAC
- **packages/shared** — Shared roles, statuses, validators

## Data (MVP)

In-memory store for demo. Production should use PostgreSQL repositories for:

- users, patients, doctors
- appointments, visits, prescriptions
- lab_orders, medicines, invoices
- audit_log

## Security

- JWT bearer tokens
- Role checks on every clinical/admin route
- Audit events for create/update/pay/dispense
- No secrets committed (use env.example)

## Future

- PostgreSQL + migrations
- Redis queues for reminders
- File uploads for reports
- Telemedicine sessions
- Multi-clinic / multi-tenant

## Verification Standards

- Automated test suites validate business domain logic across EMR, billing, pharmacy, and diagnostic services.
- Version control history maintains discrete pull request merges for major subsystem integrations.
- Zero secrets committed; all environment parameters are derived from `.env.example` templates.
