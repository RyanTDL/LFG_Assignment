import ScrollableList from "@/components/scrollableList";
import SearchBar from "@/components/searchBar";

async function getAllPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
    return response.json();
}

export default async function Home() {
    const data = await getAllPokemon(); // Returns list of pokemons
    const pokemonData = data.results;

    return (
        <main className="container mx-auto h-screen p-4 flex justify-around items-center border-2">
        <div className="flex justify-around items-center flex-col w-6/12 h-full gap-4">
            <div className="w-full h-full p-4 border-4 rounded-3xl">
                    <SearchBar pokemonData={pokemonData} />
            </div>
        </div>
        <div className="w-5/12 h-full border-2">
            <h1 className="text-xl">Hiiiii</h1>
        </div>
        </main>
    )
}