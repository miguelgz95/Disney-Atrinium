import useDisney from "../hooks/useDisney";
import Link from "next/link";
import { useState } from "react";
import CharacterCard from "./CharacterCard";
import Layout from "./Layout";

function PaginatedCharacters() {
  const [page, setPage] = useState(1);
  const { result, error } = useDisney().fetchCharacters(page);

  function nextPage() {
    setPage(page + 1);
  }
  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  if (error)
    return (
      <h1 className="max-h-min bg-disney">
        Ups... Parece que algo no fue bien :(
      </h1>
    );

  if (!result) return <h1>Cargando...</h1>;

  return (
    <div className="w-full flex flex-col justify-center ">
      <div className=" flex flex-col md:flex-row flex-wrap justify-center">
        {result.data.map((character) => (
          <CharacterCard
            key={character._id}
            character={character}
          ></CharacterCard>
        ))}
      </div>

      <div className="w-full flex justify-center space-x-2 pb-5 pt-4">
        <button
          className="bg-sky-900 text-white px-8 py-2 rounded-full hover:opacity-50 transition ease-in-out"
          onClick={prevPage}
        >
          Anterior
        </button>
        <button
          className="bg-sky-900 text-white px-8 py-2 rounded-full hover:opacity-50 transition ease-in-out"
          onClick={nextPage}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
export default PaginatedCharacters;
