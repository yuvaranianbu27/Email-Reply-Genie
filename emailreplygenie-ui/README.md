# Email Reply Genie UI

The React frontend for [Email Reply Genie](../README.md). It lets a user enter email text, select an optional tone, request a draft reply from the Spring Boot API, and copy the result.

## Requirements

- Node.js and npm.
- The Spring Boot backend running at `http://localhost:8080`.

## Start the development server

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). The current UI posts to `http://localhost:8080/api/email/generate`; run the backend separately.

## Other commands

```powershell
npm run lint
npm run build
npm run preview
```

The repository-level README documents backend configuration, the API request shape, and screenshots.
