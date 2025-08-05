import logo from "@/assets/redux.png";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
     return (
          <>

          <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5">
               <div className="flex items-center">
                    <img src={logo} alt="logo" />
                    <span className="font-bold ml-2">Task Master</span>
               </div>
               <Link to="/task">Task</Link>
               <Link to="/user">User</Link>
               <div className="ml-auto">
                    <ModeToggle></ModeToggle>
               </div>
          </nav>

          </>
     );
};