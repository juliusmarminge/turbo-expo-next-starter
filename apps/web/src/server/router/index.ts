// src/server/router/index.ts
import { createRouter } from "./context";

import { exampleRouter } from "./example";

export const appRouter = createRouter().merge("example.", exampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
