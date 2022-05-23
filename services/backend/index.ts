import * as trcp from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { z } from "zod";
import express from "express";

const appRouter = trcp.router().query("hello", {
  input: z.object({
    name: z.string().min(4),
  }),
  resolve({ input, ctx }) {
    return `Hello ${input.name}!`;
  },
});

export type AppRouter = typeof appRouter;

async function main() {
  // express implementation
  const app = express();

  app.use((req, _res, next) => {
    // request logger
    console.log("⬅️ ", req.method, req.path, req.body ?? req.query);

    next();
  });

  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
    })
  );

  app.get("/", (_req, res) => res.send("hellow"));
  app.listen(2021, () => {
    console.log("listening on port 2021");
  });
}

main();
