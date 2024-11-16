import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthProviderContext } from "../providers/AuthProvider";

const Navbar = () => {
    const {user, userLogOut} = useContext(AuthProviderContext)

    const handleLogOut = () => {
        userLogOut().then(() => {
            console.log("User log out")
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
            <div>
                <p className="font-medium text-black/75">Crrent user : {user? user?.displayName : "N/A"}</p>
            </div>
            <div className="space-x-5 text-lg text-[#706F6F]">
                <Link to={"/"}>Home</Link>
                <Link>About</Link>
                <Link>Career</Link>
            </div>
            <div className="flex items-center gap-3">
               {
                user ? user?.photoURL && <img src={user?.photoURL} alt="User Pictures" className="w-10 h-10 rounded-full"/> : <img src={userIcon} alt="" className="w-10 h-10 rounded-full"/>
               }
                {
                    user? <button onClick={handleLogOut} className="p-8 py-2 text-xl font-semibold text-white bg-[#403F3F]">LOGOUT</button> : <Link to={"/auth"} className="p-8 py-2 text-xl font-semibold text-white bg-[#403F3F]">LOGIN</Link>
                }
            </div>         
        </div>
    );
};

export default Navbar;