import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./pages/auth/AuthLayout";
import SignInPage from "./pages/auth/signInPage";
import SignUpPage from "./pages/auth/SignUpPage";
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
import EditUserPage from "./pages/dashboard/EditUserPage";
import MyCoursePage from "./pages/dashboard/MyCoursePage";
import MyCourseDetailsPage from "./pages/dashboard/MyCourseDetailsPage";
// import { useEffect } from "react";
// import Cookies from "js-cookie";
// import api, { setAccessToken } from "./services/api";
// import { useCart } from "./context/CartContext";

function App() {
  // const queryClient = new QueryClient();
  // const _appSignging = localStorage.getItem("_appSignging");
  // const refresh = Cookies.get("refresh");
  // const { dispatch, test } = useCart();
  // useEffect(() => {
  //   const getToken = async () => {
  //     console.log(refresh);
  //     if (!refresh) {
  //       Cookies.remove("refresh");
  //       localStorage.removeItem("_appSignging");
  //       setAccessToken(null);
  //       console.log("no refresh");
  //       return;
  //     }
  //     try {
  //       const refreshResponse = await api.post(`/auth/jwt/refresh/`, {
  //         refresh: refresh,
  //       });
  //       console.log("44", refreshResponse);
  //       setAccessToken(refreshResponse.data.access);
  //       localStorage.setItem("_appSignging", true);
  //       dispatch({ type: "setTest", payload: refreshResponse.data.access });
  //     } catch (err) {
  //       console.log(err);
  //       Cookies.remove("refresh");
  //       localStorage.removeItem("_appSignging");
  //       setAccessToken(null);
  //       return Promise.reject(err);
  //     }
  //   };
  //   getToken();
  //   console.log("refresh app");
  // }, [refresh, _appSignging]);
  // console.log(test);
  return (
    <>
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
          <Route path="user/edit" element={<EditUserPage />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
          <Route path="course" element={<MyCoursePage />}>
            <Route path=":id" element={<MyCourseDetailsPage />} />
          </Route>
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
    </>
  );
}

export default App;
