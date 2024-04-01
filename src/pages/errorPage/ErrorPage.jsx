import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="2xl:px-48 xl:px-32 md:px-20 px-10 w-full h-screen flex justify-center items-center">
      <div className="text-center flex flex-col justify-center space-y-4 items-center">
        <img
          src="https://i.ibb.co/mCqHbbH/326-3264023-picture-freeuse-explosion-like-text-bubbles-transprent-oops-removebg-preview.png"
          alt=""
          className="w-1/2"
        />
        <h2 className="text-red-600 md:text-5xl font-bold">
          404 - Page not found!
        </h2>
        <p></p>
        <Link
          to={"/"}
          className="py-2 px-3 bgColor text-white cursor-pointer rounded-md hover:bg-black transition-all duration-300 text-sm"
        >
          Back Home Page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
