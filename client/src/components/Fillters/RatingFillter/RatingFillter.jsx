export const RatingFillter = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="h-[350px] w-[300px] flex flex-col justify-between border-[2px] p-4 rounded-lg">
        <div className="flex">
          <div className="w-[50%] flex flex-col space-y-2">
            <strong className="rounded-full border-[2px] px-[10px] py-[5px] text-center">
              8.5+
            </strong>
            <strong className="rounded-full border-[2px] px-[10px] py-[5px] text-center">
              8.0+
            </strong>
            <strong className="rounded-full border-[2px] px-[10px] py-[5px] text-center">
              7.5+
            </strong>
            <strong className="rounded-full border-[2px] px-[10px] py-[5px] text-center">
              7.0+
            </strong>
          </div>
          <div className="w-[50%] flex flex-col space-y-5 justify-center ml-2">
            <p className="text-center">Excellent</p>
            <p className="text-center">Very Good</p>
            <p className="text-center">Good</p>
            <p className="text-center">Fair</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-md">
            Reset
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
