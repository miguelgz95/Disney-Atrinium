import useDisney from "../hooks/useDisney";
import Link from "next/link";

export default function CharacterCard({ character }) {
  const favorites = useDisney().getFavoritos();
  const isFavorited =
    favorites.filter((e) => e._id == character._id).length > 0;

  const viewed = useDisney().getHistorial();
  const isViewed = viewed.filter((e) => e._id == character._id).length > 0;

  return (
    <Link href={`/character/${character._id}`}>
      <div
        className="h-[130px] md:w-1/4 flex p-3 mx-4 my-2 md:mx-3 rounded-2xl border-2 border-blue-400 justify-between overflow-hidden hover:cursor-pointer hover:bg-gradient-to-t from-sky-700 to-sky-900 hover:border-sky-900 transition ease-in-out"
        key={character._id}
      >
        <div className="flex-col">
          <h2 className="text-xl text-white tracking-wide">{character.name}</h2>
          <div className="pt-2 flex space-x-3">
            {character.films.length > 0 && (
              <img src="/images/clapperboard.png" width="20" className="invert" />
            )}
            {character.tvShows.length > 0 && (
              <img src="/images/television.png" width="20" className="invert" />
            )}
            {character.videoGames.length > 0 && (
              <img src="/images/games.png" width="20" className="invert" />
            )}
            {character.parkAttractions.length > 0 && (
              <img src="/images/roller-coaster.png" width="20" className="invert" />
            )}
            {character.allies.length > 0 && (
              <img src="/images/hand-shake.png" width="20" className="invert" />
            )}
            {character.enemies.length > 0 && (
              <img src="/images/ghost.png" width="20" className="invert" />
            )}
          </div>
          <div className="w-full flex pt-2 space-x-2">
            {isViewed && <img src="/images/ojo.png" width="30px" className="invert" />}
            {isFavorited && (
              <img src="/images/like (1).png" width="28px" className="invert" />
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
