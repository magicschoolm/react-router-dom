import {NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="logo">
        DHARSAN</div>
      <ul>
        <NavLink to="/">
        <li>
          Home</li>
          </NavLink>
        <NavLink to="/Products">
        <li>
          Products</li>
          </NavLink>
        <NavLink to="/About">
        <li>
          About</li>
         </NavLink> 
        <NavLink to="/Contact">
        <li>
          Contact</li>
          </NavLink>
        <NavLink to="/Users">
        <li>
          Users</li>
          </NavLink>
      </ul>
      <button onClick={()=>navigate("/login", {replace: true})}>LogIn</button>
    </div>
  )
}

export default Navbar
