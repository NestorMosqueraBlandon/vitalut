import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './Application.js'
import '@vitalut/design-system/web/global.css'
import "./styles/general.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GoogleOAuthProvider } from "@react-oauth/google";

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
        <Application />
      </GoogleOAuthProvider>
    </QueryClientProvider>,
  </React.StrictMode>,
)
