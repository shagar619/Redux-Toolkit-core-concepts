import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";


function Root() {
     return (
          <>

          <Navbar></Navbar>

          <Outlet></Outlet>

          </>
     );
};

export default Root;