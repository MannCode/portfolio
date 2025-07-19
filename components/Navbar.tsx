import React from 'react'
import { LuLinkedin, LuGithub, LuTwitter, LuInstagram } from 'react-icons/lu';

export default function Navbar() {
    return (
        <nav className="w-full bg-background px-8 py-2">
            <div className="flex">
                <div className='flex-1 flex justify-end items-center'>
                    <ul className="flex space-x-5 pr-20">
                        <li className=" text-text font-bold border-b-2 border-primary pb-1 cursor-pointer">HOME</li>
                        <li className="hover:text-primary cursor-pointer">ABOUT</li>
                        <li className="hover:text-primary cursor-pointer">SKILLS</li>
                        <li className="hover:text-primary cursor-pointer">PROJECTS</li>
                    </ul>
                </div>

                <div className='flex-1 flex justify-center items-center'>
                    <button className="bg-primary text-white text-2xl font-bold py-4 px-6 rounded-full shadow-md hover:bg-purple-500 transition">
                        MANDEEP SINGH
                    </button>
                </div>

                <div className='flex-1 justify-self-end flex items-center text-black'>
                    <div className='flex items-center space-x-5 text-3xl pl-20'>
                        <LuLinkedin className="hover:text-purple-500 cursor-pointer" />
                        <LuGithub className="hover:text-purple-500 cursor-pointer" />
                        <LuTwitter className="hover:text-purple-500 cursor-pointer" />
                        <LuInstagram className="hover:text-purple-500 cursor-pointer" />
                    </div>
                </div>

            </div>
        </nav>
    );
}