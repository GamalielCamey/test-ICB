import { publicProcedure, router } from "../trpc";
import { z } from "zod";

const generateSlugFromName = (name: string) =>
  name
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "-and-")
    .replace(/[\s\W-]+/g, "-")
    .replace(/-$/, "");

export const testRouter = router({
  products: publicProcedure.query(async () => {
    const result = await prisma?.productModel.findMany();
    return result;
  }),

  product_create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        inventory: z.number(),
        price: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      await prisma?.productModel.create({
        data: {
          name: input.name,
          slug: generateSlugFromName(input.name),
          description: input.description,
          inventory: input.inventory,
          price: input.price,
        },
      });

      return {
        success: "Product succesfully created",
      };
    }),
});
