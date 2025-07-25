


const SignUp = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md relative">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold" onClick={() => window.history.back()}>&times;</button>
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 rounded-full p-3">
            <span className="text-green-600 text-3xl">$</span>
          </div>
        </div>
        <div className="flex justify-center gap-8 mb-6">
          <button className="text-gray-500 text-xl font-semibold pb-1" onClick={() => window.location.replace('/login')}>Log in</button>
          <button className="text-[#e91e63] text-xl font-semibold border-b-2 border-[#e91e63] pb-1">Sign up</button>
        </div>
        <button className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 flex items-center justify-center gap-2">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" /> Continue with Google
        </button>
        <div className="flex items-center my-4"><span className="flex-1 h-px bg-gray-300" /><span className="mx-2 text-gray-400">or</span><span className="flex-1 h-px bg-gray-300" /></div>
        <form className="flex flex-col gap-3">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 text-left">Name</label>
          <input id="name" type="text" required placeholder="Enter your name" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
          <label htmlFor="profession" className="text-sm font-medium text-gray-700 text-left">Profession</label>
          <select id="profession" required className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
            <option value="">Select profession</option>
            <option value="student">Student</option>
            <option value="job">Job</option>
            <option value="freelancer">Freelancer</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="email" className="text-sm font-medium text-gray-700 text-left">E-mail</label>
          <input id="email" type="email" required placeholder="Enter your email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
          <label htmlFor="password" className="text-sm font-medium text-gray-700 text-left">Password</label>
          <input id="password" type="password" required placeholder="Password" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
          <button type="submit" className="bg-[#347433] hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-2 mt-2">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;