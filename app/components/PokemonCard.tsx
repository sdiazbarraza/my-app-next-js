import { useEffect, useState } from "react";

import React from 'react';
import Image from "next/image";
import { getPicture } from "../utils/api/getPokemonDetails";


interface PokemonCardProps {
  pokemon: {
    name: string;
    url: string;
  };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [picture, setPicture] = useState("");

  useEffect(() => {
    const fetchPicture = async () => {
      const fetchedPicture = await getPicture(pokemon.name);
      setPicture(fetchedPicture);
    };
    fetchPicture();
    }, [pokemon.url]);
  return (
    <li>
      <a href={`/pokemon/${pokemon.name}/details`} target="_blank" rel="noopener noreferrer">
        {pokemon.name}
        {picture && <Image src={picture} alt={pokemon.name} width={100} height={100} />}        
      </a>
    </li>
  );
};

export default PokemonCard;

