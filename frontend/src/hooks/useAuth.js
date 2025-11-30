import useUser from "./auth/useUser";
import useCourseMe from "./courses/useCourseMe";

export default function useAuth() {
  const { user, isLoadingUser } = useUser();
  const { myCourse, isLoadingCourse } = useCourseMe();

  return { user, isLoadingUser, myCourse, isLoadingCourse };
}
