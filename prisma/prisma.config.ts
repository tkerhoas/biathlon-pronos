import { defineConfig } from "@prisma/config";
import { createPostgresAdapter } from "@prisma/adapter-postgresql";

export default defineConfig({
  datasources: {
    db: {
      adapter: createPostgresAdapter({
        connectionString: process.env.DATABASE_URL!,
      }),
    },
  },
});
