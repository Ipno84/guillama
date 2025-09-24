import { QueryClient } from "@tanstack/react-query";
import { defaultQueryOptions } from "./config";

export const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        ...defaultQueryOptions,
      },
    },
  });
