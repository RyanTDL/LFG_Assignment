'use client'
import { createContext, useState } from 'react';

export const TeamContext = createContext({
    team: [],
    addTeam: () => {},
    deleteTeam: () => {}
});

export default function TeamProvider({ children }) {
    let [team, setTeam] = useState([]);

    const addPokemon = () => {
        if (team.length >= 6) {
            alert('You can only have 6 pokemons in your team');
            return;
        };
        setTeam(prevTeam => [...prevTeam, 'pikachu']);
    }

    // const deletePokemon = (removedPokemon : String) => {
    //     setTeam(team.filter(pokemon => pokemon !== removedPokemon));
    // }

    return (
        // <TeamContext.Provider value={{ team, addTeam: addPokemon, deleteTeam: deletePokemon}}>
        <TeamContext.Provider value={{ team, addTeam: addPokemon}}>
            {children}
        </TeamContext.Provider>
    );
}