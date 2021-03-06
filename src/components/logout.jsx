import { useEffect } from "react";
import auth from "../services/auth";

const Logout = () => {
  useEffect( ()=>{
    auth.logout();
    window.location = "/";
  },[]);

  return null;
}

export default Logout;
