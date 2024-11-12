# Assignment 8

## Project Overview
Assignment 8 is a backend project designed to handle API requests with various functionalities, leveraging Express.js and Prisma ORM for efficient database interactions. The project uses TypeScript for enhanced type safety and Zod for schema validation. The main objective is to provide a robust and scalable backend system that can handle requests efficiently while maintaining code quality and ease of debugging.

## Live URL
You can access the live deployment of this backend project [here](https://level-2-assignment-8.vercel.app/).

## Technology Stack & Packages

### Core Technologies
- **Node.js**: JavaScript runtime environment for building scalable network applications.
- **Express**: A minimal and flexible Node.js web application framework.
- **TypeScript**: Superset of JavaScript for type-safe coding.
- **Prisma**: An ORM for Node.js and TypeScript for database interaction.

### Packages
- **@prisma/client**: Prisma's client library for database queries.
- **cookie-parser**: Middleware to parse cookies attached to client requests.
- **cors**: Middleware to enable Cross-Origin Resource Sharing.
- **dotenv**: Loads environment variables from a `.env` file.
- **http-status**: Simplifies HTTP status code handling.
- **zod**: TypeScript-first schema validation.

### Development Dependencies
- **@types/cookie-parser**: TypeScript definitions for cookie-parser.
- **@types/cors**: TypeScript definitions for cors.
- **@types/express**: TypeScript definitions for Express.
- **@types/node**: TypeScript definitions for Node.js core modules.
- **ts-node-dev**: TypeScript execution and development environment.
- **tsx**: Execution of TypeScript files with enhanced speed.
- **typescript**: TypeScript compiler.

## Setup Instructions
### Prerequisites
- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)

### Installation
1. **Clone the repository**:
   ```bash
   git clone [here](https://github.com/enayetsyl/level-2-assignment-8.git)
   cd level-2-assignment-8
```

2. Install dependencies:

```bash
npm install
```

3. Environment Setup:

- Create a .env file in the root directory and add the required environment variables (e.g., database URL, port number, etc.).

4. Database Setup:

- Run the following command to generate Prisma client:

```bash
npx prisma generate
```

- Run migrations to set up the database schema:

```bash
npx prisma migrate dev
```

### Running the Application

- Development Mode:

```bash
npm run dev
```

This starts the server with TypeScript hot-reloading.

### Key Features & Functionality

- API Server: Provides a RESTful API for client applications to interact with.
- Schema Validation: Ensures request data integrity using Zod schemas.
- Database Integration: Uses Prisma ORM for secure and efficient database operations.
- Environment-Based Configuration: Switches configuration based on environment (development or production).
- Cross-Origin Resource Sharing: Enables CORS for API accessibility from different origins.

### License

This project is licensed under the ISC License.

Author
[Md Enayetur Rahman]


















