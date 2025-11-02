import { Routes, Route, Navigate } from "react-router";
import AuthLayout from "./pages/auth/AuthLayout";
import SignInPage from "./pages/auth/signInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to={"signin"} replace />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
