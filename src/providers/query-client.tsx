"use client";

import { ReactNode } from "react";
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { addMessage } from "@/lib";

type Props = {
  locale: string;
  children: ReactNode;
};

export const Query = ({ locale, children }: Props) => {
  const queryClient = new QueryClient({
    mutationCache: new MutationCache({
      onError: (error) => addMessage({ error, locale }),
    }),
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, refetchInterval: 30000 },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
