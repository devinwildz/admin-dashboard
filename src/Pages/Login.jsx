import { FaTwitter, FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex md:items-center xl:items-stretch  justify-center bg-white dark:bg-[#1e2640] text-white font-sans">
      {/* Left Section - 3D Model & Stats */}
      <div className=" hidden xl:flex items-start justify-center md:w-[50%] xl:w-[65%] p-10">
        <img src="/images/login.png" alt="" className='w-auto h-auto object-contain' />
      </div>

      {/* Right Section - Form */}
      <div className="bg-gray-100 flex flex-col justify-center md:block dark:bg-[#2e3655] p-5 md:p-10 w-full md:w-[50%] xl:w-[35%]">
        <h2 className="text-2xl text-black dark:text-white font-bold mb-2">
          Welcome to My DashBoard <span className="ml-2">👋</span>
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Please sign-in to your account and start the adventure
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-black dark:text-gray-400 text-sm mb-1">Email or Username</label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="w-full text-black dark:text-white px-4 py-2 rounded-md bg-transparent dark:bg-[#2a2f45] border focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#6c63ff]  border-[#3f4563]"
            />
          </div>

          <div>
            <label className="block text-black dark:text-gray-400 text-sm mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full dark:text-white text-black px-4 py-2 rounded-md bg-transparent dark:bg-[#2a2f45] border focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#6c63ff]  border-[#3f4563]"
              />
              
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex text-black dark:text-white items-center gap-2">
              <input type="checkbox" /> Remember Me
            </label>
            <Link to="/forgot-password" className="text-purple-500">
              Forgot Password?
            </Link>
          </div>

          <Link to="/">
            <button className="w-full bg-purple-600 hover:bg-purple-700 mt-4 transition-colors py-2 rounded-md font-semibold">
              Sign in
            </button>
          </Link>

          <p className="text-center text-black dark:text-white text-sm">
            New on our platform?{' '}
            <Link to="/signup" className="text-purple-500">
              Create an account
            </Link>
          </p>

          <div className="flex items-center gap-4 justify-center py-4">
            <div className="h-px bg-gray-600 w-1/2"></div>
            <span className="text-lg text-gray-400">or</span>
            <div className="h-px bg-gray-600 w-1/2"></div>
          </div>

          <div className="flex justify-center space-x-4 pt-4">
            <button className="hover:scale-110 transition transform duration-200 text-black dark:text-white">
              <FaFacebookF className="text-xl" />
            </button>
            <button className="hover:scale-110 transition transform duration-200 text-black dark:text-white">
              <FaTwitter className="text-xl" />
            </button>
            <button className="hover:scale-110 transition transform duration-200 text-black dark:text-white">
              <FaGithub className="text-xl" />
            </button>
            <button className="hover:scale-110 transition transform duration-200 text-black dark:text-white">
              <FaGoogle className="text-xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
