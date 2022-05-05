import PaginatedCharacters from "../components/PaginatedCharacters";
import CharacterFavs from "../components/CharacterFavs";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <PaginatedCharacters></PaginatedCharacters>
    </Layout>
  );
}
