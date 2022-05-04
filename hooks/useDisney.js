import useSWR from "swr";
import { DisneyContext } from "./DisneyContext";
import { useContext } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = "https://api.disneyapi.dev/characters";
const PAGE_LIMIT = 10;

function useDisney() {
  const [state, setState] = useContext(DisneyContext);

  function fetchCharacter(id) {
    const uri = `${API_URL}/${id}`;
    const { data: result, error } = useSWR(uri, fetcher);

    return { result, error };
  }

  function fetchCharacters(page) {
    const uri = `${API_URL}?page=${page}`;
    const { data: result, error } = useSWR(uri, fetcher);

    return { result, error };
  }

  function getHistorial() {
    return state.historial;
  }

  function addToHistorial(character) {
    deleteCharacterFromHistorial(character);

    const newCharacter = character;

    setState((state) => ({
      ...state,
      historial: [...state.historial, newCharacter],
    }));
  }

  function deleteCharacterFromHistorial(character) {
    setState((state) => ({
      ...state,
      historial: state.historial.filter((el) => el._id != character._id),
    }));
  }

  function getFavoritos() {
    return state.favoritos;
  }

  function addToFavoritos(character) {
    deleteCharacterFromFavoritos(character);

    const newCharacter = character;

    setState((state) => ({
      ...state,
      favoritos: [...state.favoritos, newCharacter],
    }));
  }

  function deleteCharacterFromFavoritos(character) {
    setState((state) => ({
      ...state,
      favoritos: state.favoritos.filter((el) => el._id != character._id),
    }));
  }

  return {
    fetchCharacters,
    fetchCharacter,
    getHistorial,
    addToHistorial,
    getFavoritos,
    addToFavoritos,
    deleteCharacterFromFavoritos,
  };
}

export default useDisney;
