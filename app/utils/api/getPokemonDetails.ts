export async function getPokemonDetails(url: string) {
    try {
        const response = await fetch(url);
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