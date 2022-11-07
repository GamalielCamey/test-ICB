import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const productRouter = router({
  products: publicProcedure.query(async () => {
    const result = await prisma?.productModel.findMany();
    return result;
  }),

  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
