import React from 'react'
import { LuExternalLink } from 'react-icons/lu';
import Image from 'next/image';

const HomeSection = () => {
    return (
        <section className="min-h-screen flex justify-center px-8 bg-background">
            <div className="w-full flex flex-col md:flex-row items-center mb-30 justify-center gap-40">

                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
                        I write <span className="text-primary">code</span> that talks to
                        hardware, not just browsers.
                    </h1>
                    <p className="text-gray-600 mt-6 text-lg">
                        I am a developer passionate about building from the ground up.
                        From custom emulators and assembly languages to AI powered apps and neural networks,
                        I enjoy working across the stack to turn ideas into working systems.
                    </p>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-6 px-4 py-2.5 bg-gray-900 text-white text-lg font-medium rounded-md shadow hover:bg-gray-800 transition"
                    >
                        RESUME <LuExternalLink className="ml-2 text-sm" />
                    </a>
                </div>

                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                    <Image
                        src="/MandeepImage.png" // Replace with your image path
                        alt="Mandeep Singh"
                        width={600}
                        height={600}
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    )
}

export default HomeSection
