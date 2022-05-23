import { createRouter } from "../create-router";
import { z } from "zod";

export const postRouter = createRouter()
  .query("get-all", {
    async resolve({ ctx }) {
      return await ctx.prisma.post.findMany();
    },
  })
  .query("get-by-id", {
    input: z.object({
      id: z.string().uuid(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.post.findFirst({
        where: {
          id: input.id,
        },
      });
    },
  })
  .mutation("create", {
    input: z.object({
      authorId: z.number().int(),
      title: z.string(),
      content: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.post.create({
        data: {
          authorId: input.authorId,
          title: input.title,
          content: input.content,
        },
      });
    },
  });
