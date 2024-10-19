'use client'

import { getPokemonDetails } from "@/app/utils/api/getPokemonDetails";
import { useEffect, useState } from "react";

interface PokemonParams {
  params: {
    name: string;    
  };
}

export default function Details({ params }: PokemonParams) {
  const [pokemon, setPokemon] = useState<any | null>(null);
  const pokemonName = params.name;

    useEffect(() => {
      async function fetchData() {
        let res = await getPokemonDetails(pokemonName);
        setPokemon(res);
      }
      fetchData();   
    }, [pokemonName]);

  return (
    <>
      {
        !pokemon && <div>Loading...</div>
      }
      {pokemon && (
        <>
          <h1>Detail's {pokemon.name}</h1>
          <h2>Weight: {pokemon.weight}</h2>          
          <h2>Abilities</h2>
          {pokemon.abilities.map((ability: any) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
          <h2>Type</h2>
          {pokemon.types.map((type: any) => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </>
      )}
    </>
  ); 
}



