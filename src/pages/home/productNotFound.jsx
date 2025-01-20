export default function productNotFound(){
    return( 
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-800">Product Not Found</h1>
          <p className="text-lg text-gray-600 mt-4">
            The product you're looking for doesn't exist or might have been removed.
          </p>
          <button
            onClick={() => window.location.href = "/"}
            className="mt-6 px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary-dark transition duration-300"
          >
            Go Back to Homepage
          </button>
        </div>
      )
   
  }
  