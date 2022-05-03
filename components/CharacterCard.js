import useDisney from "../hooks/useDisney";
import Link from "next/link";
import favorites from "../pages/favorites";

export default function CharacterCard({character}){
    
    const favoritos = useDisney().getFavoritos();
    const isFavorited = favoritos.filter(e => e._id == character._id).length > 0;

    return(
        <Link href={`/character/${character._id}`}>
         <div className="h-[130px] md:w-1/4 flex p-3 mx-4 my-2 md:mx-3 rounded-2xl border-2 border-blue-400 justify-between overflow-hidden hover:cursor-pointer hover:bg-sky-800 hover:border-sky-800 transition ease-in-out" key={character._id}>
             <div className="flex-col">
         <p className="text-2xl text-white">{character.name}</p>
         <div className="w-full flex">
             {isFavorited && <img src="like (1).png" width="28px" className="invert"/>}
        
           
            
         </div>
         </div>
             <img src={character.imageUrl} width="90px" height="85px" className="rounded-2xl object-cover object-top"/>
         </div>
        </Link>
    )
}