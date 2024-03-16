'use client'
import { useContext } from 'react';
import { TeamContext } from '../app/team-provider';

interface deleteButtonProps {
    pokemonName : string;
}

// This component is used to add or delete a pokemon from the team
// If add is true, it adds a pokemon to the team, given that the team has less than 6 pokemons
// If add is false, it deletes a pokemon from the team
export default function DeleteButton(params : deleteButtonProps) {
    // const { team, addTeam } = useContext(TeamContext);
    const { team, addTeam, deleteTeam } = useContext(TeamContext);

    const handleButtonClick = () => {
        deleteTeam(params.pokemonName);
    };

    return (
        <main className="w-5/6 h-10">
                <button
                    onClick={handleButtonClick}
                    className="w-full h-full flex justify-center items-center text-sm lg:text-lg bg-indigo-500 text-white rounded-full hover:bg-indigo-400"
                >
                    Remove
                </button>
        </main>
    );
}
