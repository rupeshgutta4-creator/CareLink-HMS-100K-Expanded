# CareLink HMS Expanded Module Pack

This package extends the uploaded CareLink HMS with 118 domain modules. Every module includes:

- Explicit parameter schema and defaults
- Runtime validation
- Create/update operations
- CRUD service layer
- Express route factory
- Controller layer
- Unit tests

The module registry is at `src/config/moduleRegistry.js`. The generated package is intentionally framework-light so it can be connected to the existing in-memory store or a PostgreSQL repository.

## Parameters
All entity parameters are declared in `src/entities/*.js` and returned by each service's `metadata()` method.

## Scale
This is an expanded implementation scaffold designed for large-scale HMS functionality; it avoids fake filler lines and keeps generated code valid JavaScript.
