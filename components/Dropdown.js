import { useState } from "react";

export default function Dropdown({ title, content }) {
  const [showContent, setShowContent] = useState();

  function handleClick() {
    setShowContent(!showContent);
  }

  return (
    <div className="w-full flex-col pb-2">
      <div
        onClick={handleClick}
        className={`md:w-[310px] flex justify-start bg-sky-600 rounded-xl px-4 py-2 hover:cursor-pointer hover:opacity-50 transition ease-in-out ${
          showContent && "rounded-t-xl rounded-b-none"
        }`}
      >
        <div className="w-full flex">
          <h2 className="text-lg text-white font-semibold tracking-wider">
            {title}
          </h2>
          <div className="pt-[2px] ml-3 px-3 font-bold bg-gradient-to-r from-sky-300 to-sky-400 text-blue-900 rounded-full">
            {content.length}
          </div>
        </div>
        <div className="pt-[8px]">
          {!showContent ? (
            <img src="/images/down-arrow.png" width="15px" className="ml-3" />
          ) : (
            <img src="/images/up-arrow.png" width="15px" className="ml-3" />
          )}
        </div>
      </div>

      {showContent && (
        <div className="w-full md:w-[310px] pb-2 rounded-b-xl bg-sky-600 ">
          {content.map((el) => (
            <h3 className=" text-zinc-800 font-bold tracking-wide py-1 px-4 text-left">
              {el}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
}
