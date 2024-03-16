'use client'
import { useContext } from 'react';
import { TeamContext } from '../app/team-provider';
import DeleteButton from './deleteButton';

export default function NavBar() {
    const { team, addTeam, deleteTeam } = useContext(TeamContext);
    return (
        <div className="w-full h-full overflow-x-auto border-b flex justify-center items-center space-x-4 bg-gradient-to-r from-violet-900 to-slate-700">
            {team.map((pokemonName : string, index : any) => (
                <div key={index} className=" h-32 flex flex-col justify-around items-center bg-slate-100 border-2 border-indigo-500 p-4 rounded-lg">
                    <p className='font-mono md:text-xl lg:text-3xl text-indigo-500'>{pokemonName}</p>
                    <DeleteButton pokemonName={pokemonName}/>
                </div>
            ))}
        </div>
    );
}