import {cache} from "react";
 async function fetchPokemonDetails(name: string) {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_URL_POKEMON_BASE + name);
        if (!response.ok) {
          throw new Error("failed to fetch");
        }
        const fetchedData =  await response.json();
        return fetchedData;
      } catch (error) {
        console.log(error);
        return null;
      }
}

export const getPokemonDetails = cache(fetchPokemonDetails);

export const getPicture = async (name: string)=>{
  let data = await getPokemonDetails(name);
  return data.sprites.front_default;
} 