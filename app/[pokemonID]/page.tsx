import AddOrDeleteButton from "@/components/addOrDeleteButton";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";

export default async function PokemonDisplay({params}) {

    const pokemonName = params.pokemonID; // 'params' returns an object: {pokemonID : POKEMON_NAME}
    async function getOnePokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        return data.sprites.front_default; // Returns a string path "https://../.png"
    }
    const imagePath = await getOnePokemon();

    return (
            <main className="container mx-auto h-screen p-4 flex justify-around items-center border-2">
                <div className="flex flex-col justify-center items-center w-5/12 h-full border-2 gap-4">
                    <p className="font-mono font-bold text-4xl">{pokemonName}</p>
                    <Image
                        src = {imagePath}
                        width={500}
                        height={500}
                        alt = {`Picture of ${pokemonName}`}
                    />
                    <AddOrDeleteButton add={true} pokemonName={pokemonName} />
                    <Link href={'/'} className="font-mono text-2xl italic underline">
                        Back
                    </Link>
                </div>
            </main>
    )
}