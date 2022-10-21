import React, { useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../authentication/firebase";
import { DataContext } from "../context/ContextApi";
import useRedirect from "../hooks/useRedirect";

const Login = () => {
  const redirect = useRedirect();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    } else {
      try {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
        setError("");
        setEmail("");
        setPassword("");
      } catch (error) {
        setLoading(false);
        const errorMessage = error.message
          .split("Firebase: Error ")[1]
          .replace("(", "")
          .replace(").", "");
        setError(errorMessage);
      }
    }
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, user]);
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 mx-auto my-10">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">LogIn</h1>
        {error ? (
          <p className="text-sm text-gray-100 bg-red-400 p-3 rounded capitalize">
            {error}
          </p>
        ) : (
          <p className="text-sm text-gray-400">Log in to access your account</p>
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
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-400"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="*****"
              className="placeholder:text-sm  w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
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
                Sign in
              </button>
            )}
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-400">
            Don't have an account yet?
            <Link
              to={`/signin?redirect=${redirect}`}
              className="hover:underline dark:text-violet-400"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
