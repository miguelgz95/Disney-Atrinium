import useDisney from "../hooks/useDisney";

export default function CharacterFavs(){
  const favoritos = useDisney().getFavoritos();
  const deleteCharacterFromFavoritos = useDisney().deleteCharacterFromFavoritos;
  
  return(
    <>
    
    {favoritos.length > 0 && <>
        <h1>Favoritos</h1>
        {favoritos.map((el) => 
        <div key={el._id}>{el.name} <button onClick={ () => deleteCharacterFromFavoritos(el) }>X</button></div>
        )}
        <hr />
      </>}

    </>
  )
}