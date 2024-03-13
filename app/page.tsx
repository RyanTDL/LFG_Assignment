import ScrollableList from "@/components/scrollableList";
import PokemonDisplay from "@/app/pokemon/page";
import Link from "next/link";

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
            <div className="w-full h-1/2 p-4 border-4 rounded-3xl">
            <p className="w-full h-1/5 font-mono font-bold text-4xl">Introducing all our Pokemon:</p>
            <div className="w-full h-4/5 ">
                <ScrollableList pokemonData={pokemonData} />
                {/* <Link href="/pokemon">Click</Link> */}
            </div>
            </div>
            <div className="w-full h-1/2 p-4 border-4 rounded-3xl">
            </div>
        </div>
        <div className="w-5/12 h-full border-2">
            <h1 className="text-xl">Hiiiii</h1>
        </div>
        </main>
    )
}