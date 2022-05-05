import React from "react";
import { useRouter } from "next/router";

import useFetchDisney from "../../hooks/useDisney";

import { useEffect } from "react";
import useDisney from "../../hooks/useDisney";
import CharacterSingle from "../../components/CharacterSingle";

const Character = () => {
  const { query } = useRouter();
  const { id } = query;
  const { result, error } = useDisney().fetchCharacter(id);
  const addToHistorial = useDisney().addToHistorial;

  useEffect(() => {
    console.log("probando");
    if (result) {
      addToHistorial(result);
    }
  }, [result]);

  if (!result) {
    return (
      <div className="bg-disney w-full min-h-screen flex flex-col items-center pt-20 md:pt-24">
        <img src="/images/campanilla.png" width="100px" />
        <h1 className="text-2xl md:text-3xl text-white tracking-wide font-semibold">
          Cargando magia...
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-disney min-h-screen w-full">
      <div className="flex-col justify-center">
        <CharacterSingle result={result}></CharacterSingle>
      </div>
    </div>
  );
};

export default Character;
