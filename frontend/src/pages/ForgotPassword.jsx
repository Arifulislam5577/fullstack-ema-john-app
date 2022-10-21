import React, { useState } from "react";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 mx-auto my-10">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Password</h1>
        {error ? (
          <p className="text-sm text-gray-100 bg-red-400 p-3 rounded capitalize">
            {error}
          </p>
        ) : (
          <p className="text-sm text-gray-400">Reset your account password</p>
        )}
      </div>
      <form
        className="space-y-12 ng-untouched ng-pristine ng-valid"
        onSubmit={handleSubmit}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 placeholder:text-sm dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            {loading ? (
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-orange-400 text-white"
              >
                <div className="w-7 h-7 border-2 border-dashed rounded-full animate-spin border-white mx-auto"></div>
              </button>
            ) : (
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-orange-400 text-white"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
