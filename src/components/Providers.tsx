"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  const queryClient = new QueryClient()

  return <SessionProvider>
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  </SessionProvider>;
};

export default Providers;