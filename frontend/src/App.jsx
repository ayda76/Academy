import { Routes, Route, Navigate } from "react-router";
import AuthLayout from "./pages/auth/AuthLayout";
import SignInPage from "./pages/auth/signInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import UserPage from "./pages/dashboard/UserPage";
import CompleteProfilePage from "./pages/auth/CompleteProfilePage";
import NotFound from "./pages/NotFound";
import AboutusPage from "./pages/aboutus/AboutusPage";
import CoursesPage from "./pages/courses/CoursesPage";
import CourseProfilePage from "./pages/courses/CourseProfilePage";
import CartPage from "./pages/cart/CartPage";
import ChangePasswordPage from "./pages/dashboard/ChangePasswordPage";
import AppLayout from "./layout/AppLayout";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        {/* auth route */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to={"signin"} replace />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="complete-profile" element={<CompleteProfilePage />} />
        </Route>
        {/* dashboard route */}
        <Route path="dashboard" element={<DashboardPage />}>
          <Route index element={<Navigate to={"user"} replace />} />
          <Route path="user" element={<UserPage />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
          <Route path="course" element={<UserPage />} />
        </Route>
        {/* public routes */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="aboutus" element={<AboutusPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="courses" element={<CoursesPage />}>
            <Route path=":id" element={<CourseProfilePage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
