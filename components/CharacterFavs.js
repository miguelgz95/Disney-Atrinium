import Link from "next/link";
import useDisney from "../hooks/useDisney";

export default function CharacterFavs() {
  const favoritos = useDisney().getFavoritos();
  const deleteCharacterFromFavoritos = useDisney().deleteCharacterFromFavoritos;

  return (
    <>
      {favoritos.length == 0 && (
        <div className="w-full flex flex-col justify-center items-center pt-20 md:pt-24">
          <img src="/images/sadness.png" width="200px" />
          <h2 className="text-xl text-center pt-2 md:text-2xl text-white font-semibold">
            Aún no tienes ningún personaje en favoritos :(
          </h2>
          <div className=" flex bg-sky-700 text-white mt-4 px-9 py-2 mb-4 rounded-xl hover:opacity-50 transition ease-in-out drop-shadow-lg justify-center hover:cursor-pointer">
            <Link href={"/characters"}>Volver atrás</Link>
          </div>
        </div>
      )}
      {favoritos.length > 0 && (
        <>
          <h1 className="text-white text-2xl text-center pt-2 pb-2">
            Favoritos
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-1">
            {favoritos.map((el) => (
              <div key={el._id}>
                <Link href={`/character/${el._id}`}>
                  <div
                    className="h-[130px] flex p-3 mx-4 my-2 space-x-4 md:mx-3 rounded-2xl border-2 border-blue-400 justify-between overflow-hidden hover:cursor-pointer hover:bg-gradient-to-t from-sky-700 to-sky-900 hover:border-sky-900 transition ease-in-out"
                    key={el._id}
                  >
                    <div className="flex-col">
                      <h2 className="text-xl text-white tracking-wide">
                        {el.name}
                      </h2>
                      <div className="pt-2 flex space-x-3">
                        {el.films.length > 0 && (
                          <img
                            src="/images/clapperboard.png"
                            width="20"
                            className="invert"
                          />
                        )}
                        {el.tvShows.length > 0 && (
                          <img
                            src="/images/television.png"
                            width="20"
                            className="invert"
                          />
                        )}
                        {el.videoGames.length > 0 && (
                          <img src="/images/games.png" width="20" className="invert" />
                        )}
                        {el.parkAttractions.length > 0 && (
                          <img
                            src="/images/roller-coaster.png"
                            width="20"
                            className="invert"
                          />
                        )}
                        {el.allies.length > 0 && (
                          <img
                            src="/images/hand-shake.png"
                            width="20"
                            className="invert"
                          />
                        )}
                        {el.enemies.length > 0 && (
                          <img src="/images/ghost.png" width="20" className="invert" />
                        )}
                      </div>
                    </div>
                    <img
                      src={el.imageUrl}
                      width="90px"
                      height="85px"
                      className="rounded-2xl object-cover object-top"
                    />
                  </div>
                </Link>
                <div className="w-full flex justify-center">
                  <button
                    className="bg-red-900 w-full text-white px-8 py-2 mx-4 rounded-2xl hover:opacity-50 transition ease-in-out"
                    onClick={() => deleteCharacterFromFavoritos(el)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
