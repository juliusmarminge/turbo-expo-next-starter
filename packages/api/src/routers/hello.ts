import { createRouter } from "../create-router";
import { z } from "zod";

export const helloRouter = createRouter().query("greeting", {
  input: z.object({
    name: z.string().min(4),
  }),
  resolve({ input, ctx }) {
    return `Hello ${input.name}!`;
  },
});
