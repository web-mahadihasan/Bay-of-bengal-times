import { useContext, useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../providers/AuthProvider';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser,loginUser, setLoading} = useContext(AuthProviderContext)
    const location = useLocation()
    const navigate = useNavigate()
  
    const handleLogin = (e) => {
      e.preventDefault();
      loginUser(email, password)
      .then((result) => {
        setLoading(true)
        setUser(result.user)
        setTimeout(() => {
          setLoading(false)
          navigate(location?.state? location.state : "/")
        }, 500);
        console.log(result.user)
      }).catch(err => {
        console.log(err)
      })

    };
  
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-xl px-24 py-16 space-y-6 bg-white rounded shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Login your account
          </h2>
          <div className='divider'></div>
          <form onSubmit={handleLogin} className="space-y-7">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-semibold text-[#403F3F]"
              >
                Email address
              </label>
              <div className="flex items-center bg-gray-200 rounded">
                <div className="p-4 bg-gray-300 rounded-l">
                  <FaEnvelope className="text-gray-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 bg-gray-200 outline-none rounded-r"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-semibold text-[#403F3F]"
              >
                Password
              </label>
              <div className="flex items-center bg-gray-200 rounded">
                <div className="p-4 bg-gray-300 rounded-l">
                  <FaLock className="text-gray-500" />
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-3 bg-gray-200 outline-none rounded-r"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Link className='text-base text-gray-600 hover:text-blue-600 duration-300'>Forgot Password?</Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 mt-4 font-semibold text-white bg-gray-800 rounded hover:bg-gray-700"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-base font-semibold text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to={"/auth/register"} className="text-red-500 font-semibold hover:underline duration-300">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
