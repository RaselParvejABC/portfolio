import { useRouteError, Link } from "react-router-dom";
import notFoundImage from "../../assets/not-found.png";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold mb-8">Oh! Snap!</div>
          <img width={300} src={notFoundImage} alt="Not Found Image" />
          <p className="text-2xl md:text-3xl font-light leading-normal mt-8">
            Page Not Found.
          </p>
          <p className="my-8">
            But don't worry, you can find plenty of other things on my homepage.
          </p>

          <Link to="/">
            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              Back to Home
            </button>
          </Link>
        </div>
        <div className="max-w-lg"></div>
      </div>
    </div>
  );
}
