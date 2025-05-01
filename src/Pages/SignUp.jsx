import { FaTwitter, FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="h-screen flex md:items-center xl:items-stretch  justify-center bg-white dark:bg-[#1e2640] text-white font-sans">
      {/* Left Gradient Section */}
      <div className="hidden xl:flex items-start justify-center md:w-[50%] xl:w-[65%] p-10">
        <img className='w-full h-full object-contain' src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-login-illustration-dark.png" alt="" />
      </div>

      {/* Right Form Section */}
      <div className="bg-gray-100 flex flex-col justify-center md:block dark:bg-[#2e3655] p-5 md:p-10 w-full md:w-[50%] xl:w-[35%]">
        <h2 className="text-2xl text-black dark:text-white font-bold mb-2">
          Adventure starts here 🚀
        </h2>
        <p className="text-sm mb-6 text-gray-500 dark:text-gray-400">
          Make your app management easy and fun!
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-black dark:text-white text-sm ">Username</label>
            <input
              type="text"
              className="w-full text-black mt-1 dark:text-white px-4 py-2 rounded-md bg-transparent dark:bg-[#2a2f45] border focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#6c63ff]  border-[#3f4563]"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-sm text-black dark:text-white ">Email</label>
            <input
              type="email"
              className="w-full text-black mt-1 dark:text-white px-4 py-2 rounded-md bg-transparent dark:bg-[#2a2f45] border focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#6c63ff]  border-[#3f4563]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-black dark:text-white text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full text-black mt-1 dark:text-white px-4 py-2 rounded-md bg-transparent dark:bg-[#2a2f45] border focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#6c63ff]  border-[#3f4563]"
                placeholder="••••••••"
              />

            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree" className="text-sm text-black dark:text-white">
              I agree to{' '}
              <span className="text-purple-500">privacy policy & terms</span>
            </label>
          </div>

          <Link to="/">
            <button className="w-full bg-purple-600 hover:bg-purple-700 mt-4 text-white font-semibold py-2 rounded-xl transition duration-300">
              Sign up
            </button>
          </Link>

          <p className="text-center text-black dark:text-white text-sm mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-500">
              Sign in instead
            </Link>
          </p>

          <div className="flex items-center gap-4 justify-center py-2">
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

        {/* Dark Mode Toggle */}
      </div>
    </div>
  );
}
