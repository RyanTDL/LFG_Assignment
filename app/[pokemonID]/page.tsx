import NavBar from "@/components/navBar";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import AddButton from "@/components/addButton";

interface pokemonDisplayProps {
    params : {
        pokemonID : string;
    }
}

export default async function PokemonDisplay({params} : pokemonDisplayProps) {
    const pokemonName = params.pokemonID;
    async function getOnePokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        return data.sprites.front_default; // Returns a string path "https://../.png"
    }
    const imagePath = await getOnePokemon();

    return (
            <main className="container mx-auto h-screen flex flex-col justify-around items-center">
                <div className="fixed top-0 left-0 w-full h-1/6">
                    <NavBar />
                </div>
                <div className="w-full h-5/6 mt-44 flex flex-col justify-center items-center gap-4">
                    <p className="font-mono font-bold text-4xl">{pokemonName}</p>
                    <Image
                        src = {imagePath}
                        width={500}
                        height={500}
                        alt = {`Picture of ${pokemonName}`}
                        className="border-8 border-indigo-500 rounded-lg"
                    />
                    <div className="w-1/3 text-3xl">
                        <AddButton pokemonName={pokemonName}/>
                    </div>
                    <Link href={'/'} className="font-mono text-2xl italic underline">
                        Back
                    </Link>
                </div>
            </main>
    )
}