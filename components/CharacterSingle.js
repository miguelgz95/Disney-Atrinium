import useDisney from "../hooks/useDisney";
import CharacterFavs from "./CharacterFavs";

export default function CharacterSingle({ result }) {
  const addToFavoritos = useDisney().addToFavoritos;
  const deleteCharacterFromFavoritos = useDisney().deleteCharacterFromFavoritos;

  return (
    <div className=" flex flex-col justify-center items-center mx-5 md:mx-0">
    <div className="w-full flex flex-col md:flex-row p-5 mt-5 rounded-2xl md:max-w-4xl bg-gradient-to-t from-sky-700 to-sky-900 drop-shadow-lg overflow-hidden">
      
  <div className="md:flex-col">
      <div className="flex justify-center">
      <img src={result.imageUrl} width="200px" height="85px" className="rounded-xl object-cover h-64 object-top w-full" />
      </div>
      <div className="w-full pt-3 flex justify-center">
      {!useDisney().getFavoritos().includes(result) && (
        <button className="bg-sky-600 w-full text-white px-9 py-2 rounded-xl hover:opacity-50 transition ease-in-out drop-shadow-md" onClick={() => addToFavoritos(result)}>
          Añadir a favoritos
        </button>
      )}
      {useDisney().getFavoritos().includes(result) && (
        <button className="bg-red-900 w-full text-white px-6 py-2 rounded-xl hover:opacity-50 transition ease-in-out drop-shadow-md" onClick={() => deleteCharacterFromFavoritos(result)}>
          Eliminar de favoritos
        </button>
      )}
      </div>
      </div>
      <div className="">
        
        <div className="text-2xl md:text-4xl pt-2 md:pt-0 md:pl-5 tracking-wider text-white font-bold text-center md:text-left">
      {result.name}
      </div>
      
      

      <div className="md:pl-5 pt-2 text-center md:text-left">
      {result.films.length > 0 && (
        <div className="">
          <h3 className="text-lg pb-1 font-semibold tracking-wide text-white underline-offset-2 underline">Películas</h3>
          {result.films.map((el) => (
            <div className="text-white">{el}</div>
          ))}
        </div>
      )}

{result.shortFilms.length > 0 && (
        <div>
          <h3 className="text-lg pb-1 font-semibold tracking-wide text-white underline-offset-2 underline">Cortos</h3>
          {result.shortFilms.map((el) => (
            <div className="text-white">{el}</div>
          ))}
        </div>
      )}

{result.tvShows.length > 0 && (
        <div className="pt-2">
          <h3 className="text-lg pb-1 font-semibold tracking-wide text-white underline-offset-2 underline">Series</h3>
          {result.tvShows.map((el) => (
            <div className="text-white">{el}</div>
          ))}
        </div>
      )}

{result.videoGames.length > 0 && (
        <div className="pt-2">
          <h3 className="text-lg pb-1 font-semibold tracking-wide text-white underline-offset-2 underline">Videojuegos</h3>
          {result.videoGames.map((el) => (
            <div className="text-white">{el}</div>
          ))}
        </div>
      )}

{result.parkAttractions.length > 0 && (
        <div className="pt-2">
          <h3 className="text-lg pb-1 font-semibold tracking-wide text-white underline-offset-2 underline">Parques de atracciones</h3>
          {result.parkAttractions.map((el) => (
            <div className="text-white">{el}</div>
          ))}
        </div>
      )}

{result.allies.length > 0 && (
        <div>
          <h3 className="text-lg pb-1 font-semibold tracking-wide text-white underline-offset-2 underline">Aliados</h3>
          {result.allies.map((el) => (
            <div className="text-white">{el}</div>
          ))}
        </div>
      )}

{result.enemies.length > 0 && (
        <div>
          <h3 className="text-lg pb-1 font-semibold tracking-wide text-white underline-offset-2 underline">Enemigos</h3>
          {result.enemies.map((el) => (
            <div className="text-white">{el}</div>
          ))}
        </div>
      )}
      </div>
      </div>
      
      
      </div>

      

      

      

    

    </div>
  );
}