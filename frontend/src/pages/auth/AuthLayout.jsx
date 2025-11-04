import {Outlet} from "react-router"
const AuthLayout = () => {
  return (
    <div className="pt-10 flex justify-center">
        <Outlet />
    </div>
  )
}

export default AuthLayout