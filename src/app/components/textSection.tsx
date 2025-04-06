import React from 'react'

import { Spicy_Rice } from "next/font/google";
import { Merriweather } from "next/font/google"
import { Berkshire_Swash } from 'next/font/google';
import { PiSnowflakeBold } from 'react-icons/pi';
const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['400', '700', '900']
})

const spicyRice = Spicy_Rice({
    subsets: ['latin'],
    weight: ['400']
})
const berkshire = Berkshire_Swash({
    subsets: ['latin'],
    weight: ['400']
})
function TextSection() {
    return (
        <div className='w-[90%] sm:w-[40%] xl:w-1/2 text-white text-center z-10'>
            <div className={merriweather.className}>
                <div className='text-2xl lg:text-4xl xl:text-6xl flex items-center justify-center gap-2'>Merry Christmas <PiSnowflakeBold size={40} className='hidden sm:block' /></div>
                <div>
                    <p className='mt-2 md:text-lg xl:text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe odit aspernatur delectus itaque vitae necessitatibus non, dolore architecto minima adipisci.</p>
                </div>
            </div>
        </div>
    )
}

export default TextSection
