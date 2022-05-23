import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";

import { trpc } from "./utils/trpc";
import Home from "./screens/Home";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: "http://localhost:3000/api/trpc",
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <Home />
          <StatusBar />
        </SafeAreaProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

registerRootComponent(App);
