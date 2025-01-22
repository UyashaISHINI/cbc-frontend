import { Link } from "react-router-dom";

export default function ProductNotFound() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center bg-white p-8">
            {/* Icon */}
            <div className="mb-6">
                <svg
                    className="w-16 h-16 text-accent animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18.364 5.636a9 9 0 11-12.728 0M15 11v4m-3-4v4m3-8h.01M9 11h.01"
                    />
                </svg>
            </div>
            {/* Title */}
            <h1 className="text-5xl font-extrabold text-accent mb-4">
                Product Not Found
            </h1>
            {/* Description */}
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
                Oops! The product you’re looking for doesn’t exist or might have been removed. Please check the ID or try again later.
            </p>
            {/* Button */}
            <Link
                to="/"
                className="px-8 py-3 bg-secondary text-accent font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-accent"
            >
                Go Back to Home
            </Link>
        </div>
    );
}


  