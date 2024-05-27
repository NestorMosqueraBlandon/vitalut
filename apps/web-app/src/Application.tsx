import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Private from './screens/Private';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 1,
      staleTime: 300000,
    },
  },
});

function Application() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Private />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default Application;
