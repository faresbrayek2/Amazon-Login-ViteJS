import Logo from "./assets/amazonlogo.png";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="pb-4 flex">
        <div className="max-w-md w-full mx-auto">
          <div className="flex justify-center">
            <img src={Logo} alt="Amazon Logo" className="h-8 mt-3" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white rounded-md shadow-gray-400 shadow-sm w-3/4 p-4">
              <h1 className="text-2xl font-bold pb-2">Sign in</h1>
              <label htmlFor="email" className="text-xs font-bold">
                Email or mobile phone number
              </label>
              <input
                type="text"
                id="email"
                className="w-full border rounded-sm py-1 px-3 text-sm mt-1 mb-4"
              />
              <button className="bg-[#f1c65a] border-[#846a29] rounded-sm border-[0.5px] py-1 text-xs font-bold text-[#261111] w-full">
                Continue
              </button>

              <div className="text-xs text-gray-400 mt-4">
                By continuing, you agree to Amazon's{" "}
                <a className="text-blue-700 cursor-pointer">
                  Conditions of Use
                </a>{" "}
                and{" "}
                <a className="text-blue-700 cursor-pointer">Privacy Notice</a>.
              </div>
              <a href="/" className="text-blue-700 text-xs mt-2">
                Need help?
              </a>
            </div>
            <div className="flex justify-between w-3/4 items-center mt-4">
              <div className="border border-gray-300 w-[100px]"></div>
              <span className="text-gray-600 text-[11px]">New to Amazon?</span>
              <div className="border border-gray-300 w-[100px]"></div>
            </div>
            <button className="bg-gray-100 border w-3/4 border-gray-300 rounded-sm py-1 text-xs font-bold text-[#111111] w-full mt-4">
              Create your Amazon account
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 h-screen border-t-2 py-4">
        <div className="max-w-md mx-auto text-center text-xs text-gray-400">
          <a
            href="/"
            className="mr-4 text-[10px] text-blue-700 hover:underline"
          >
            Conditions of Use
          </a>
          <a
            href="/"
            className="mr-4 text-[10px] text-blue-700 hover:underline"
          >
            Privacy Notice
          </a>
          <a
            href="/"
            className="mr-4 text-[10px] text-blue-700 hover:underline"
          >
            Help
          </a>
          <p className="mt-4 text-gray-400 text-[10px]">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
