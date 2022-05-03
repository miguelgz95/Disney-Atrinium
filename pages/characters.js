import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import PaginatedCharacters from "../components/PaginatedCharacters";
import CharacterHistory from "../components/CharacterHistory";
import CharacterFavs from "../components/CharacterFavs";

export default function Home() {
  


  return (
    <div className="bg-disney">
        <header className="w-full flex justify-between px-4 pt-4">
            <img src="/Disney atrinium logo.png" alt="Disney by Atrinium" className="w-[100px] md:w-[100px]"/>
      <button className="px-2 pt-1">
        <Link href="/favorites">
          <img src="/like (1).png" alt="favoritos" width="28px" className="invert hover:cursor-pointer hover:animate-pulse"/>
        </Link>
        </button>
        </header>

        <main>
        <CharacterHistory></CharacterHistory>

        <CharacterFavs></CharacterFavs>
        
        <PaginatedCharacters></PaginatedCharacters>
        </main>
        </div>
  );
}
