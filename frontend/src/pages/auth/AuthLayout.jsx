import {Outlet} from "react-router"
const AuthLayout = () => {
  return (
    <div className="mx-auto pt-10 w-full md:max-w-[400px]">
        <Outlet />
    </div>
  )
}

export default AuthLayout