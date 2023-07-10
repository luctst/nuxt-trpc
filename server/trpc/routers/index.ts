import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      }
    }),
  user: publicProcedure
    .query(() => {
      return {
        name: 'test',
      }
    }),
  getPost: publicProcedure
    .input(z.number().gte(0))
    .query(async ({ input }) => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${input}`);
        const json = await res.json();
        return json;
      } catch (error) {
        return error;
      }
    })
})

// export type definition of API
export type AppRouter = typeof appRouter
