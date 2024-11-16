import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const SocialLogin = () => {
    const {loginWithSocial, setUser, setLoading} = useContext(AuthProviderContext)
    const googleProvider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider;
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleLogin = (ProviderName) => {
        loginWithSocial(ProviderName)
        .then((result) => {
            setLoading(true)
            setUser(result.user)
            console.log(result.user)
            setTimeout(() => {
              setLoading(false)
              navigate(location?.state? location.state : "/")
            }, 500);
          }).catch(err => {
            console.log(err)
          })
    }
    return (
        <div className="">
            <h3 className="my-5 text-xl font-semibold text-[#403F3F]">Login With</h3>
            <div className="flex flex-col items-center">
                <button onClick={() => handleGoogleLogin(googleProvider)} className="flex items-center border w-full justify-center py-2 rounded-md gap-2 text-sm mb-2 hover:border-blue-600 hover:text-blue-500 duration-300 focus:text-blue-500 focus:border-blue-500">
                    <FaGoogle/>
                    Login With Google
                </button>
                <button onClick={() => handleGoogleLogin(githubProvider)} className="flex items-center border w-full justify-center py-2 rounded-md gap-2 text-sm mb-2  hover:border-blue-600 hover:text-blue-500 duration-300 focus:text-blue-500 focus:border-blue-500">
                    <FaGithub/>
                    Login With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;