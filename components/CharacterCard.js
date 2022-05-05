import useDisney from "../hooks/useDisney";
import Link from "next/link";
import favorites from "../pages/favorites";

export default function CharacterCard({ character }) {
  const favorites = useDisney().getFavoritos();
  const isFavorited = favorites.filter((e) => e._id == character._id).length > 0;

  const viewed = useDisney().getHistorial();
  const isViewed = viewed.filter((e) => e._id == character._id).length > 0;

  return (
    <Link href={`/character/${character._id}`}>
      <div
        className="h-[130px] md:w-1/4 flex p-3 mx-4 my-2 md:mx-3 rounded-2xl border-2 border-blue-400 justify-between overflow-hidden hover:cursor-pointer hover:bg-gradient-to-t from-sky-700 to-sky-900 hover:border-sky-900 transition ease-in-out"
        key={character._id}
      >
        <div className="flex-col">
          <h2 className="text-2xl text-white">{character.name}</h2>
          <div className="w-full flex pl-1 space-x-2">
            {isViewed && (
              <img src="/ojo.png" width="28px" className="invert" />
            )}
            {isFavorited && (
              <img src="like (1).png" width="27px" className="invert" />
            )}
          </div>
        </div>
        <img
          src={character.imageUrl}
          width="90px"
          height="85px"
          className="rounded-2xl object-cover object-top"
        />
      </div>
    </Link>
  );
}
