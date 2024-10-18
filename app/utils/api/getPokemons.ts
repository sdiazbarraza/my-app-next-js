import {cache} from "react";
 async function fetchPokemons() {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_URL_POKEMON_BASE || "");
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

export const getPokemons = cache(fetchPokemons);
