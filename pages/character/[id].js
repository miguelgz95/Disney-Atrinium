import React from 'react';
import { useRouter } from "next/router"

import useFetchDisney from '../../hooks/useDisney';
import Link from 'next/link';
import { useEffect } from 'react';
import useDisney from '../../hooks/useDisney';
import CharacterSingle from '../../components/CharacterSingle';

const Character = () => {

    const { query } = useRouter()
    const { id } = query
    const { result, error } = useDisney().fetchCharacter(id)
    const addToHistorial = useDisney().addToHistorial;

    
    useEffect( () => {
        console.log("probando")
        if(result){
            addToHistorial(result);
        }
    }, [result])


    if (!result) {
        return <p> Cargando... </p>
    }


    
    return (
        <div className='bg-disney min-h-screen w-full'>
            
        <CharacterSingle result={result}></CharacterSingle>
        <Link href={"/characters"}>Volver atrás</Link>
    </div>
    );
};

export default Character;
