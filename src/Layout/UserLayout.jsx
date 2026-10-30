import { Outlet } from "react-router-dom"

const UserLayout = () => {
  return (
    <div className="container directory-page">
        <h1>List of Users</h1>
        <p>Lerem ipsum dolor sit amet.</p>
        <Outlet />   
    </div>
  )
}

export default UserLayout