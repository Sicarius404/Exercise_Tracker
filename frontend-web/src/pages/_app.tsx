import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { QueryClient } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
