import { useEffect, useState } from "react";

import React from 'react';
import Image from "next/image";
import { getPokemonDetails } from "../utils/api/getPokemonDetails";


interface PokemonCardProps {
  pokemon: {
    name: string;
    url: string;
  };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getPokemonDetails(pokemon.url);
      setData(fetchedData);
    };
    fetchData();
    }, [pokemon.url]);
  return (
    <li>
      <a href="/details" target="_blank" rel="noopener noreferrer">
        {pokemon.name}
        <Image src={data?.sprites.front_default} alt={pokemon.name} width={100} height={100} />
      </a>
    </li>
  );
};

export default PokemonCard;

