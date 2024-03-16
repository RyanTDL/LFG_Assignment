'use client'
import { useContext } from 'react';
import { TeamContext } from '../app/team-provider';

interface addOrDeleteButtonProps {
    add : boolean;
    pokemonName : string;
}

// This component is used to add or delete a pokemon from the team
// If add is true, it adds a pokemon to the team, given that the team has less than 6 pokemons
// If add is false, it deletes a pokemon from the team
export default function AddOrDeleteButton(params : addOrDeleteButtonProps) {
    // const { team, addTeam } = useContext(TeamContext);
    const { team, addTeam, deleteTeam } = useContext(TeamContext);

    const handleButtonClick = () => {
        if (params.add) {
            addTeam(params.pokemonName);
        } else {
            deleteTeam(params.pokemonName);
        }
    };

    return (
        <main className="w-full h-16 px-10">
            <button
                onClick={handleButtonClick}
                className="w-full h-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-400"
            >
                {params.add ? "Add to team" : "Remove"}
            </button>
        </main>
    );
}
