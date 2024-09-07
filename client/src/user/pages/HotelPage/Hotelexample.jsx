import { useState } from "react";

export const BusinessPage = () => {
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(
    "Are you passionate about animal welfare and eager to make a difference in the lives of sick and injured animals? At Animal rescue, we are dedicated to rescuing, rehabilitating, and rehoming animals in need. Our mission is to provide compassionate care and support to every animal that comes through our doors, helping them on their journey to recovery and a new life."
  );
  const [title, setTitle] = useState("Animal rescue");

  const [allTags, setAllTags] = useState([
    "animals",
    "ndhdh",
    "odkdmnd",
    "lfkfjfj",
    "fjkfjdn",
    "kkdk",
    "ndhdh",
    "odkdmnd",
    "lfkfjfj",
    "fjkfjdn",
    "kkdk",
  ]);

  const [selectedTags, setSelectedTags] = useState([
    "animals",
    "ndhdh",
    "odkdmnd",
  ]);

  const [unselectedTags, setUnselectedTags] = useState(
    allTags.filter((tag) => !selectedTags.includes(tag))
  );

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
      setUnselectedTags([...unselectedTags, tag]);
    } else {
      setSelectedTags([...selectedTags, tag]);
      setUnselectedTags(unselectedTags.filter((t) => t !== tag));
    }
  };

  const handleSave = () => {
    setEdit(false);
  };

  return (
    <div className="flex h-full w-full">
      <div className="items-center flex flex-col w-[25%] h-full bg-slate-400 gap-3 pt-32 overflow-y-scroll">
        <div className=" bg-white rounded-xl w-[90%] p-2 scale-95 hover:scale-100">
          <div className="items-center flex flex-col gap-1 pt-1 ">
            <h3 className="font-semibold text-md">Sharon Shakuri</h3>
            <span>sharon@gmail.com</span>
          </div>
          <div className="flex flex-col items-end">
            <button className="inset-0 bg-gradient-to-b from-white/0 via-gray-100/20 to-gray-300/0 shadow-2xl rounded-xl min-w-20 text-center inset-shadow bg-neutral-400/60 hover:font-semibold">
              Dismiss
            </button>
          </div>
        </div>
        <div className=" bg-white rounded-xl w-[90%] p-2 scale-95 hover:scale-100">
          <div className="items-center flex flex-col gap-1 pt-1 ">
            <h3 className="font-semibold text-md">Sharon Shakuri</h3>
            <span>sharon@gmail.com</span>
          </div>
          <div className="flex flex-col items-end">
            <button className="inset-0 bg-gradient-to-b from-white/0 via-gray-100/20 to-gray-300/0 shadow-2xl rounded-xl min-w-20 text-center inset-shadow bg-neutral-400/60 hover:font-semibold">
              Dismiss
            </button>
          </div>
        </div>
        <div className=" bg-white rounded-xl w-[90%] p-2 scale-95 hover:scale-100">
          <div className="items-center flex flex-col gap-1 pt-1 ">
            <h3 className="font-semibold text-md">Sharon Shakuri</h3>
            <span>sharon@gmail.com</span>
          </div>
          <div className="flex flex-col items-end">
            <button className="inset-0 bg-gradient-to-b from-white/0 via-gray-100/20 to-gray-300/0 shadow-2xl rounded-xl min-w-20 text-center inset-shadow bg-neutral-400/60 hover:font-semibold">
              Dismiss
            </button>
          </div>
        </div>
      </div>
      ;
      <div className="w-[65%] h-full flex flex-col items-center justify-start pt-28 ml-14">
        <div className="flex justify-between w-[96%] ml-14">
          {edit ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="font-bold text-4xl border p-2 rounded"
            />
          ) : (
            <h2 className="font-bold text-4xl">{title}</h2>
          )}
          <button
            onClick={() => (edit ? handleSave() : setEdit(true))}
            className="inset-0 bg-gradient-to-b from-white/0 via-gray-100/20 to-gray-300/0 shadow-2xl rounded-xl w-28 h-8 text-center inset-shadow bg-neutral-400/60 text-sm ml-3 mt-3 hover:font-semibold"
          >
            {edit ? "Save" : "Edit"}
          </button>
        </div>
        {edit ? (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-8 font-semibold text-2xl w-[90%] leading-10 border p-2 rounded"
            rows={5}
          />
        ) : (
          <p className="mt-8 font-semibold text-2xl w-[90%] leading-10">
            {description}
          </p>
        )}
        <div className="mt-10 flex flex-wrap gap-3 w-[70%]">
          {edit ? (
            <div className="flex flex-col w-full gap-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedTags.map((tag, index) => (
                  <span
                    key={index}
                    className="shadow-2xl rounded-xl min-w-20 text-center bg-gray-600 p-2 pl-2 pr-2 cursor-pointer"
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {unselectedTags.map((tag, index) => (
                  <span
                    key={index}
                    className="shadow-2xl rounded-xl min-w-20 text-center bg-gray-300 p-2 pl-2 pr-2 cursor-pointer"
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            selectedTags.map((tag, index) => (
              <span
                key={index}
                className="shadow-2xl rounded-xl min-w-20 text-center bg-gray-600 p-2 pl-2 pr-2"
              >
                {tag}
              </span>
            ))
          )}
        </div>
      </div>
        
    </div>
  );
};
