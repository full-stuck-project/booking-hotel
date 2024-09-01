// export const Fillters = () => {
//   return (
//     <>
//       <div className="flex h-[100vh] w-auto justify-center items-center">
//         <div className="flex flex-col h-[500px] w-[600px] border-[2px] border-solid border-black overflow-auto">
//           <strong>Payment</strong>
//           <div className="flex justify-between ">
//             <div className="flex">
//               <input type="checkbox" />
//               <p>free cancellation</p>
//             </div>
//             <div className="flex">
//               <input type="checkbox" />
//               <p>Pay at the proparty</p>
//             </div>
//           </div>
//           <strong>Meal Option</strong>
//         </div>
//       </div>
//     </>
//   );
// };

export const Fillters = () => {
  return (
    <div className="flex h-[100vh] w-auto justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-[600px] p-6">
        <strong className="block text-lg mb-4">Payment</strong>
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">Free cancellation</p>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">Pay at the property</p>
          </div>
        </div>

        <strong className="block text-lg mb-4">Meal options</strong>
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">Breakfast included</p>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">All-inclusive</p>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">Half board</p>
            <p className="text-gray-400 text-sm">
              Breakfast and dinner included
            </p>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">Full board</p>
            <p className="text-gray-400 text-sm">
              Breakfast, lunch, and dinner included
            </p>
          </div>
        </div>

        <strong className="block text-lg mb-4">Property amenities</strong>
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">Pool</p>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">Parking</p>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">EV charger</p>
          </div>
        </div>

        <strong className="block text-lg mb-4">Room amenities</strong>
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">WiFi</p>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">Air conditioning</p>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">Kitchen</p>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">Non-smoking rooms</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
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
