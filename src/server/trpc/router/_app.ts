import { router } from "../trpc";
import { authRouter } from "./auth";
import { productRouter } from "./productRouter";
import { testRouter } from "./testRouter";

export const appRouter = router({
  testRouter: testRouter,
  example: productRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
