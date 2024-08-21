import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Left Half - Image */}
      <div className="md:w-1/2 w-full h-1/2 md:h-full">
        <img
          src="/src/assets/loginPageImg.jpeg"
          alt="icon"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Half - Login Form */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-gray-800 p-8">
        {/* Logo and Title */}
        <div className="flex items-center mb-8">
          <img
            src="/src/assets/MLSALogo.jpeg"
            alt="AtlasGPT Logo"
            className="h-12 w-12 mr-3"
          />
          <span className="text-white text-3xl font-Inter">AtlasGPT</span>
        </div>

        {/* Input Fields */}
        <div className="w-full max-w-xs font-Inter">
          <h1 className="text-gray-300 font-bold text-2xl mb-4">
            Nice to see you again
          </h1>
          <span className="text-white mb-4 block">Login</span>
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-full mb-4 p-3 rounded-md text-black"
          />

          <span className="text-white mb-4 block">Password</span>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full mb-4 p-3 rounded-md text-black"
          />

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="hidden peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors">
                <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform peer-checked:transform translate-x-full"></div>
              </div>
              <span className="ml-3 text-sm font-small text-gray-300">
                Remember me
              </span>
            </label>

            <a href="#" className="text-blue-500 hover:underline ml-2">
              Forgot password?
            </a>
          </div>

          <button className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign in
          </button>

          {/* Gray Line */}
          <div className="w-full border-t border-gray-500 my-4"></div>

          {/* Sign In with Google Button */}
          <button className="w-full p-2 bg-white text-black rounded-md hover:bg-gray-200 flex items-center justify-center">
            <img
              src="/src/assets/google-logo.png"
              alt="Google Logo"
              className="h-5 w-5 mr-2"
            />
            Sign In using Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
