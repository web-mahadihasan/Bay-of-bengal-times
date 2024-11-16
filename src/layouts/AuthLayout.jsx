import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthProviderContext } from "../providers/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";

const AuthLayout = () => {
    const {loading} = useContext(AuthProviderContext)
    return (
        <div className="W-full bg-base-200 min-h-screen font-popins">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                <nav className="py-12">
                    <Navbar/>
                </nav>
                {/* Login form  */}
                <section>
                    {
                        loading == true ? <LoadingSpinner/> : <Outlet/>
                    }
                </section>
            </div>
        </div>
    );
};

export default AuthLayout;