const ShimmerUi = () => {
  return (
    <div className="shimmer-container flex flex-wrap justify-center gap-6 p-4">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4 w-64 animate-pulse"
        >
          <div className="w-full h-48 bg-gray-300"></div>
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            <div className="flex justify-between items-center mt-2">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
            <div className="h-2 bg-gray-300 rounded w-1/3 mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUi;
