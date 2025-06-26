import React from 'react'
import Brandmark from './vectors/Brandmark'
import Logo from './vectors/Logo'
import LocationPin from './vectors/LocationPin'

export default function NavBar() {
    return (
        <div className='fixed z-[100] px-10 w-full h-16 bg-white drop-shadow-md flex items-center justify-between'>
            <div className="flex gap-4 items-center">
                <Brandmark scale={0.9} />
                <Logo scale={0.9} />
            </div>

            <div className="flex gap-8 text-[0.9rem] font-inter items-center uppercase select-none">
                <p className='cursor-pointer'>Home</p>
                <p className='cursor-pointer'>Menu</p>
                <p className='cursor-pointer'>Our Story</p>
                <div className="flex gap-1 items-center">
                    <LocationPin scale={0.6} />
                    <p className='cursor-pointer'>Location</p>
                </div>
            </div>
        </div>
    )
}
