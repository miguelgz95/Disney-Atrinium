import CharacterFavs from "../components/CharacterFavs";    
import Link from "next/link";

export default function favorites(){
    return(
        <div>
            <Link href="/characters">Atrás</Link>
            <CharacterFavs></CharacterFavs>
        </div>
    )
}