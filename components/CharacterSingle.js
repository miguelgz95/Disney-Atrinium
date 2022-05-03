import useDisney from "../hooks/useDisney";
import CharacterFavs from "./CharacterFavs";

export default function CharacterSingle({ result }) {
  const addToFavoritos = useDisney().addToFavoritos;
  const deleteCharacterFromFavoritos = useDisney().deleteCharacterFromFavoritos;

  return (
    <>
    <CharacterFavs></CharacterFavs>
      <div>{result.name}</div>
      <img src={result.imageUrl} />

      {!useDisney().getFavoritos().includes(result) && (
        <button onClick={() => addToFavoritos(result)}>
          Añadir a favoritos
        </button>
      )}
      {useDisney().getFavoritos().includes(result) && (
        <button onClick={() => deleteCharacterFromFavoritos(result)}>
          Eliminar de favoritos
        </button>
      )}

      {result.films.length > 0 && (
        <div>
          <h3>Películas</h3>
          {result.films.map((el) => (
            <div>{el}</div>
          ))}
        </div>
      )}

      {result.shortFilms.length > 0 && (
        <div>
          <h3>Cortos</h3>
          {result.shortFilms.map((el) => (
            <div>{el}</div>
          ))}
        </div>
      )}

    {result.tvShows.length > 0 && (
        <div>
          <h3>Series</h3>
          {result.tvShows.map((el) => (
            <div>{el}</div>
          ))}
        </div>
      )}

{result.videoGames.length > 0 && (
        <div>
          <h3>Videojuegos</h3>
          {result.videoGames.map((el) => (
            <div>{el}</div>
          ))}
        </div>
      )}

{result.parkAttractions.length > 0 && (
        <div>
          <h3>Parques de atracciones</h3>
          {result.parkAttractions.map((el) => (
            <div>{el}</div>
          ))}
        </div>
      )}

{result.allies.length > 0 && (
        <div>
          <h3>Aliados</h3>
          {result.allies.map((el) => (
            <div>{el}</div>
          ))}
        </div>
      )}

{result.enemies.length > 0 && (
        <div>
          <h3>Enemigos</h3>
          {result.enemies.map((el) => (
            <div>{el}</div>
          ))}
        </div>
      )}

    </>
  );
}