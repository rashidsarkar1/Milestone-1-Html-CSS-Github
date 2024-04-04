import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-indigo-500">
      <h1 className="mb-4 text-6xl font-extrabold text-white">404</h1>
      <p className="mb-8 text-2xl text-white">Page not found</p>
      <Link
        to="/"
        className="px-6 py-3 text-indigo-600 transition duration-300 ease-in-out bg-white rounded-full hover:bg-indigo-600 hover:text-white"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
