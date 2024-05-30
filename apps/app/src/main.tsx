import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GoogleOAuthProvider } from "@react-oauth/google";
import '@vitalut/design-system/web/global.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true, 
      retry: 1, 
      staleTime: 300000,
    },
  },
});

const { VITE_GOOGLE_CLIENT_ID } = import.meta.env;


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID} >
        <App />
      </GoogleOAuthProvider>
    </QueryClientProvider>,
  </React.StrictMode>,
)
