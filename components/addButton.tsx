'use client'
import { useContext } from 'react';
import { TeamContext } from '../app/team-provider';

interface addButtonProps {
    pokemonName : string;
}

// This component is used to add or delete a pokemon from the team
// If add is true, it adds a pokemon to the team, given that the team has less than 6 pokemons
// If add is false, it deletes a pokemon from the team
export default function AddButton(params : addButtonProps) {
    // const { team, addTeam } = useContext(TeamContext);
    const { team, addTeam, deleteTeam } = useContext(TeamContext);

    const handleButtonClick = () => {
        addTeam(params.pokemonName);
    };

    return (
        <main className="w-full h-16 lg:px-10">
            <button
                onClick={handleButtonClick}
                className="w-full h-full px-4 py-2 text-xl md:text-2xl lg:text-3xl bg-indigo-500 text-white rounded hover:bg-indigo-400"
            >
                Add to team
            </button>
        </main>
    );
}
