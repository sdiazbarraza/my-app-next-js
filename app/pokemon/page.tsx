'use client'
import { useState, useEffect } from 'react';
import PokemonCard from "../components/PokemonCard"; // Import the 'PokemonCard' component
import { getPokemons } from '../utils/api/getPokemons';

export default  function Home() {
  const [pokemons, setPokemons] = useState<any[] | null>(null);

  
  useEffect(() => {
    async function fetchData() {
      let res = await getPokemons();
      setPokemons(res.results);
    }
    fetchData();
    
  }, []);

  if (!pokemons) return <div>Loading...</div>

  return (
    <ul>
      {pokemons.map((pokemon: any) => (
        <PokemonCard pokemon={pokemon} /> // Use the 'PokemonCard' component
      ))}
    </ul>
  );
}



