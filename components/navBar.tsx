'use client'
import { useContext } from 'react';
import { TeamContext } from '../app/team-provider';
import Image from "@/node_modules/next/image";
import AddOrDeleteButton from './addOrDeleteButton';

export default function NavBar() {
    const { team, addTeam, deleteTeam } = useContext(TeamContext);
    console.log(team);
    return (
        <div className="w-full h-full bg-white border-b flex justify-center items-center space-x-4 z-10">
            {team.map((pokemonName : string, index : any) => (
                <div key={index} className="w-1/6 h-32 flex flex-col justify-around items-center border-4 border-blue-500">
                    <p className='font-mono font-bold text-3xl'>{pokemonName}</p>
                    <AddOrDeleteButton add={false} pokemonName={pokemonName} />
                </div>
            ))}
        </div>
    );
}