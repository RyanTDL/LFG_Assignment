'use client'
import { useState } from 'react';
import ScrollableList from './scrollableList';

interface searchBarProps {
    pokemonData : Array<{ name: string, url : string}>;
}

export default function SearchBar(params : searchBarProps) {
    const [name, setName] = useState('');
    const [filteredPokemon, setfilteredPokemon] = useState(params.pokemonData);

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleButtonClick = () => {
        // console.log(name);
        const filtered = params.pokemonData.filter((pokemon) => pokemon.name.includes(name));
        setfilteredPokemon(filtered);
        console.log(filtered);
    };

    return (
        <main className="w-full h-full flex flex-col justify-start items-center p-2 gap-2">
            <p className="w-full font-mono font-bold text-4xl"> Search for a pokemon:</p>
            <div className="flex justify-start items-start w-full h-1/6 gap-4">
                <input
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    className="w-3/5 border-2 border-gray-200 p-2"
                    placeholder="Enter your pokemon name here..."
                />
                <button
                    onClick={handleButtonClick}
                    className="w-1/5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </div>
            <div className="w-full h-2/3 border-4">
                <ScrollableList pokemonData={filteredPokemon} />
            </div>
        </main>
    );
}
