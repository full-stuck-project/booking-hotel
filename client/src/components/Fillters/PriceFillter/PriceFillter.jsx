export const PriceFillter = () => {
  return (
    <div className="flex h-[100vh] w-auto justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-[400px] p-6 h-[350px]">
        <strong className="block text-lg mb-4">Set price range</strong>
        <div className="flex justify-between items-center mb-6">
          <div className="text-center">
            <p className="text-gray-600 text-sm">Min price</p>
            <input
              type="number"
              className="text-lg font-semibold py-2 px-4 border border-gray-300 rounded-md text-center w-[100px]"
            />
          </div>
          <span className="text-lg font-semibold">-</span>
          <div className="text-center">
            <p className="text-gray-600 text-sm">Max price</p>
            <input
              type="number"
              className="text-lg font-semibold py-2 px-4 border border-gray-300 rounded-md text-center w-[100px]"
            />
          </div>
        </div>
        <p className="text-gray-500 text-xs text-center mb-6">
          Prices exclude taxes and fees.
        </p>
        <div className="flex items-center justify-between mt-20">
          <button className="bg-gray-200 text-gray-400 py-2 px-8 rounded-md">
            Reset
          </button>
          <button className="bg-blue-600 text-white py-2 px-8 rounded-md">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
