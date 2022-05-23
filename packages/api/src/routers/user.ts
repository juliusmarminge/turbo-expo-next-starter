import { createRouter } from "../create-router";
import { z } from "zod";

export const userRouter = createRouter()
  .query("get-all", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  })
  .query("get-by-id", {
    input: z.object({
      id: z.number().int(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.user.findFirst({
        where: {
          id: input.id,
        },
      });
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.user.create({
        data: {
          name: input.name,
        },
      });
    },
  });
