import Link from "next/link";

interface scrollableListProps {
    pokemonData : Array<{ name: string, url : string}>;
}

export default function ScrollableList(
    props: scrollableListProps
) {
    const handleClick = (pokemonName : string) => {
        console.log(pokemonName);
    }

    return (
        <div className="w-full h-full overflow-y-auto flex flex-col items-center">
            {props.pokemonData.map((pokemon : any, index : any) => (
                <div key={index} className="w-11/12 h-24 flex flex-col justify-center items-center p-2 border-2 rounded-lg my-2 hover:scale-105">
                    <p className="font-mono text-4xl">{pokemon.name}</p>
                    <Link href={`/${pokemon.name}`} className="font-mono text-md italic underline">
                        Click to find out more
                    </Link>
                </div>
            ))}
        </div>
    )
}