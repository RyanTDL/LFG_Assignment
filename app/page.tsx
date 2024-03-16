import SearchBar from "@/components/searchBar";
import NavBar from "@/components/navBar";

async function getAllPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
    return response.json();
}

export default async function Home() {
    const data = await getAllPokemon(); // Returns list of pokemons
    const pokemonData = data.results;

    return (
        <main className="container mx-auto h-screen p-4 flex flex-col justify-around items-center border-2">
            <div className="fixed top-0 left-0 w-full h-1/6 border-4 border-red-300">
                <NavBar />
            </div>
            <div className="flex flex-col w-full h-5/6 mt-44 justify-around items-center border-8 border-blue-400 gap-4">
                <div className="w-full h-full p-4 border-4 rounded-3xl">
                    <SearchBar pokemonData={pokemonData} />
                </div>
            </div>
        </main>
    )
}