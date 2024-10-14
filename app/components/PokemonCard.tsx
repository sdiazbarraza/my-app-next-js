import { useEffect, useState } from "react";

import React from 'react';
import Image from "next/image";

interface PokemonCardProps {
  pokemon: {
    name: string;
    url: string;
  };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
      const fetchPokemonData = async () => {
        try {
          const response = await fetch(pokemon.url);
          if (!response.ok) {
            throw new Error("failed to fetch");
          }
          const fetchedData =  await response.json();
          setData(fetchedData);
        } catch (error) {
          console.log(error);
          return null;
        }
      };
  
      fetchPokemonData();
     
    }, [pokemon.url]);
  return (
    <li>
      <a href={pokemon.url} target="_blank" rel="noopener noreferrer">
        {pokemon.name}
        <Image src={data?.sprites.front_default} alt={pokemon.name} width={100} height={100} />
      </a>
    </li>
  );
};

export default PokemonCard;