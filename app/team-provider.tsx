'use client'
import { createContext, useState, ReactNode } from 'react';

export const TeamContext = createContext({
    team: [] as string[],
    addTeam: (newPokemon: string) => {},
    deleteTeam: (pokemonToRemove: string) => {}
});

interface TeamProviderProps {
    children: ReactNode;
}

export default function TeamProvider({ children }: TeamProviderProps) {
    let [team, setTeam] = useState<string[]>([]);

    const addPokemon = (newPokemon: string) => {
        if (team.length >= 6) {
            alert('You can only have 6 pokemons in your team');
            return;
        };
        setTeam(prevTeam => [...prevTeam, newPokemon]);
    }

    const deletePokemon = (removedPokemon : string) => {
        setTeam(team.filter(pokemon => pokemon !== removedPokemon));
    }

    return (
        // <TeamContext.Provider value={{ team, addTeam: addPokemon, deleteTeam: deletePokemon}}>
        <TeamContext.Provider value={{ team, addTeam: addPokemon, deleteTeam: deletePokemon}}>
            {children}
        </TeamContext.Provider>
    );
}