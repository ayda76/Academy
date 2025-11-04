import useUser from "../../hooks/auth/useUser";

const UserPage = () => {
  const { user, isLoadingUSer } = useUser();
  return <div>UserPage</div>;
};

export default UserPage;
