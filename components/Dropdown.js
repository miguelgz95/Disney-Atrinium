import { useState } from "react";

export default function Dropdown({title, content}) {

    const [showContent, setShowContent] = useState();

    function handleClick() {
        setShowContent(!showContent);
      }

    return (
        <div className="w-full flex-col py-1">
        <div onClick={handleClick} className={`md:w-[310px] flex justify-center md:justify-start bg-sky-600 rounded-xl px-3 py-2 hover:cursor-pointer hover:opacity-50 transition ease-in-out` }>
            <p className="text-xl text-white tracking-wider">{title}</p>
            <div className="pt-[2px] ml-3 px-3 font-bold bg-gradient-to-r from-sky-300 to-sky-400 text-blue-900 rounded-full">{content.length}</div>
            <div className="pt-[8px]">
            {!showContent ? <img src="/down-arrow.png" width="15px" className="ml-3"/> : <img src="/up-arrow.png" width="15px" className="ml-3"/>}
            </div>
        </div>

        {showContent && (
            content.map((el) => (
                <p className="md:w-[310px] text-white tracking-wide py-[2px] bg-sky-400">· {el}</p>
            ))
        )}
        </div>
    )
}