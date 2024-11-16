
import React, { useContext, useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaImage } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../providers/AuthProvider';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({})
  const navigate = useNavigate()

  const {createNewUser, setUser, userUpdateProfile} = useContext(AuthProviderContext)

  // handle image upload 
  const handleImageUpload = (e) => {
    const imageLink = e.target.files[0]
    const imageData = new FormData()
    imageData.append("image", imageLink)
    fetch("https://api.imgbb.com/1/upload?key=176775b308da684d8b761f7bdfe641cd", 
      {
        method: "POST",
        body: imageData
      })
      .then(res => res.json())
      .then(data => setImageUrl(data.data?.display_url))
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      setError({ ...error, matchPassword: "Your password don't match"})
    }
    createNewUser(email, password)
    .then ((result) => {
      setUser(result.user)
      userUpdateProfile({displayName: name, photoURL: imageUrl })
      .then(() => {
        navigate('/')
      }).catch(err => {
        console.log("profile updata error", err.message)
      })
    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <div className="flex items-center pb-20 justify-center ">
      <div className="w-full max-w-xl px-24 py-16 space-y-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register your account
        </h2>
        <div className='divider'></div>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block mb-2 text-lg font-semibold text-gray-600">
              Name
            </label>
            <div className="flex items-center bg-gray-200 rounded">
              <div className="p-4 bg-gray-300 rounded-l">
                <FaUser className="text-gray-500" />
              </div>
              <input
                type="text"
                id="name" required
                placeholder="Enter your name"
                className="w-full px-3 bg-gray-200 outline-none rounded-r"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* Image Upload Input */}
            <div>
                <label htmlFor="image" className="block mb-2 text-lg font-semibold text-gray-600">
                    Profile Image
                </label>
                <div className="flex items-center rounded">
                    <input onChange={handleImageUpload} type="file" className="file-input file-input-bordered bg-gray-200 w-full" />
                </div>
            </div>


          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-2 text-lg font-semibold text-gray-600">
              Email address
            </label>
            <div className="flex items-center bg-gray-200 rounded">
              <div className="p-4 rounded-l bg-gray-300">
                <FaEnvelope className="text-gray-500" />
              </div>
              <input
                type="email"
                id="email" required
                placeholder="Enter your email address"
                className="w-full px-3 bg-gray-200 outline-none rounded-r"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block mb-2 text-lg font-semibold text-gray-600">
              Password
            </label>
            <div className="flex items-center bg-gray-200 rounded">
              <div className="p-4 rounded-l bg-gray-300">
                <FaLock className="text-gray-500" />
              </div>
              <input
                type="password"
                id="password" required
                placeholder="Enter your password"
                className="w-full px-3 bg-gray-200 outline-none rounded-r"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-lg font-semibold text-gray-600">
              Confirm Password
            </label>
            <div className="flex items-center bg-gray-200 rounded">
              <div className="p-4 rounded-l bg-gray-300">
                <FaLock className="text-gray-500" />
              </div>
              <input
                type="password"
                id="confirmPassword" required
                placeholder="Confirm your password"
                className="w-full px-3 bg-gray-200 outline-none rounded-r"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {
              error?.matchPassword && <p className='text-red-600 text-xs'>{error.matchPassword}</p>
            }
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 font-semibold text-white bg-gray-800 rounded hover:bg-gray-700"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-base font-semibold text-center text-gray-600 mt-4">
            Already have an account?
            <Link to={"/auth/login"} className="text-red-500 font-semibold hover:underline duration-300 ml-1">
              Login
            </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
