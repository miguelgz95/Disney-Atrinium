import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import PaginatedCharacters from "../components/PaginatedCharacters";
import CharacterHistory from "../components/CharacterHistory";
import CharacterFavs from "../components/CharacterFavs";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <CharacterHistory></CharacterHistory>

      <CharacterFavs></CharacterFavs>

      <PaginatedCharacters></PaginatedCharacters>
    </Layout>
  );
}
