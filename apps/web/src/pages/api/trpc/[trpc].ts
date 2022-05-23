import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@tens/api/src/routers";
import { createContext } from "@tens/api/src/create-context";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
