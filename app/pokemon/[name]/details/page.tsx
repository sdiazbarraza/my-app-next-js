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

  return <h1>Details page {pokemon?.name}</h1>
}



