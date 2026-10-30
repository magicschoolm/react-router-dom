import { Outlet } from "react-router-dom";
import Contact from "../pages/Contact";

const ContactLoayout = () => {
  return (
    <div>
        <Contact />
        <Outlet />
    </div>
  )
}

export default ContactLoayout