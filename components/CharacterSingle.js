import useDisney from "../hooks/useDisney";
import CharacterFavs from "./CharacterFavs";
import Dropdown from "./Dropdown";
import Layout from "./Layout";

export default function CharacterSingle({ result }) {
  const addToFavoritos = useDisney().addToFavoritos;
  const deleteCharacterFromFavoritos = useDisney().deleteCharacterFromFavoritos;

  function handleClick() {
    setShowOptions(!showOptions);
  }

  return (
    <Layout title={result.name}>
    <div className=" flex flex-col justify-center items-center mx-5">
      <div className="w-full flex flex-col md:flex-row p-5 mt-5 rounded-2xl md:max-w-3xl bg-gradient-to-t from-sky-700 to-sky-900 drop-shadow-lg overflow-hidden">
        <div className="md:w-[400px] md:flex-col">
          <div className="flex justify-center">
            <img
              src={result.imageUrl}
              width="200px"
              height="85px"
              className="rounded-xl object-cover h-64 object-top md:object-scale w-full"
            />
          </div>
          <div className="w-full pt-3 flex justify-center">
            {!useDisney().getFavoritos().includes(result) && (
              <button
                className="bg-green-600 w-full text-white px-9 py-2 rounded-xl hover:opacity-50 transition ease-in-out drop-shadow-md"
                onClick={() => addToFavoritos(result)}
              >
                Añadir a favoritos
              </button>
            )}
            {useDisney().getFavoritos().includes(result) && (
              <button
                className="bg-red-900 w-full text-white px-6 py-2 rounded-xl hover:opacity-50 transition ease-in-out drop-shadow-md"
                onClick={() => deleteCharacterFromFavoritos(result)}
              >
                Eliminar de favoritos
              </button>
            )}
          </div>
        </div>
        <div className="w-full">
          <div className="text-2xl md:text-4xl pt-2 md:pt-0 md:pl-5 tracking-wider text-white font-bold text-center md:text-left">
            {result.name}
          </div>

          <div className="md:pl-5 pt-2 text-center md:text-left">
            {result.films.length > 0 && (
                <Dropdown title="Películas" content={result.films}></Dropdown>
            )}

            {result.shortFilms.length > 0 && (
              <Dropdown title="Cortos" content={result.shortFilms}></Dropdown>
            )}

            {result.tvShows.length > 0 && (
              <Dropdown title="Series" content={result.tvShows}></Dropdown>
              
            )}

            {result.videoGames.length > 0 && (
              <Dropdown title="Videojuegos" content={result.videoGames}></Dropdown>
              
            )}

            {result.parkAttractions.length > 0 && (
              <Dropdown title="Parques de ocio" content={result.parkAttractions}></Dropdown>
              
            )}

            {result.allies.length > 0 && (
              <Dropdown title="Aliados" content={result.allies}></Dropdown>
             
            )}

            {result.enemies.length > 0 && (
              <Dropdown title="Enemigos" content={result.enemies}></Dropdown>
              
            )}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
