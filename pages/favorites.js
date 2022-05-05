import CharacterFavs from "../components/CharacterFavs";
import Link from "next/link";
import Layout from "../components/Layout";

export default function favorites() {
  return (
    <Layout title={"Favoritos"}>
      <CharacterFavs></CharacterFavs>
    </Layout>
  );
}
