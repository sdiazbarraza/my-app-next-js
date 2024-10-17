'use client'
import { useState, useEffect } from 'react';
import PokemonCard from "../components/PokemonCard"; // Import the 'PokemonCard' component

export default  function Home() {
  const [pokemons, setPokemons] = useState<any[] | null>(null);

  
  useEffect(() => {
    async function fetchData() {
      let res = await fetch('https://pokeapi.co/api/v2/pokemon/');
      let data = await res.json();
      setPokemons(data.results);
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



