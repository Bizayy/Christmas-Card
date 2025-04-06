import Image from "next/image"
import { Spicy_Rice } from "next/font/google";
import TextSection from "./textSection";

const spicyRice = Spicy_Rice({
    subsets: ['latin'],
    weight: ['400']
})
export const MainCard = () => {

    return (
        <div className="w-full h-full flex items-center justify-center bg-primary border border-gray-400 rounded-md relative overflow-hidden">
            <Image src="/buntingFlags.png" width={250} height={200} alt="bunting1" className="hidden sm:block absolute left-0 -top-1.5 -rotate-[20deg] z-10" />
            <Image src="/buntingFlags.png" width={250} height={200} alt="bunting2" className="hidden sm:block absolute right-0 scale-x-[-1] -top-1.5 rotate-[20deg] z-10" />
            <Image src="/buntingFlags.png" width={800} height={200} alt="bunting2" className="sm:hidden xl:block absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 -top-[120px] xl:-top-[26%] rotate-[1.5deg] z-10" />
            <Image src="https://images.vexels.com/media/users/3/134098/isolated/preview/d81e8a2e08e0cb473e00080fd2bb0b66-snowman-hand-drawn-cartoon-icon-7.png" width={250} height={200} alt="leftSnowman" className="hidden sm:block absolute -left-[8%] lg:-left-[6%] top-[22%] rotate-45 z-10" />
            <Image src="https://images.vexels.com/media/users/3/134098/isolated/preview/d81e8a2e08e0cb473e00080fd2bb0b66-snowman-hand-drawn-cartoon-icon-7.png" width={250} height={200} alt="rightSnowman" className="hidden sm:block absolute -right-[8%] lg:-right-[6%] scale-x-[-1] top-[22%] -rotate-45 z-10" />
            <TextSection />

            <Image src="/santa.png" width={300} height={200} alt="santa" className="absolute transform left-1/2 -translate-x-1/2 lg:-translate-x-0 -bottom-[7%] lg:left-[15%]" />

            <Image src="/xmasTree.png" width={280} height={100} alt="xmasTree" className="hidden lg:block absolute -bottom-[2%] right-[15%] z-10" />
            <Image src="/gifts.png" width={200} height={1} alt="xmasTree" className="hidden xl:block absolute -bottom-[1%] left-1/2 transform -translate-x-1/2" />
            <Image src="/pineLeaf.png" width={150} height={200} alt="bunting2" className="hidden sm:block absolute -left-[4%] -bottom-[2%] " />
            <Image src="/floralDecoration.png" width={150} height={200} alt="bunting2" className="hidden sm:block absolute -right-[4%] -bottom-[4%] " />

            {/* Snowfall */}
            <div className="w-5 h-5 bg-white rounded-full absolute left-[20%] top-[10%]"></div>
            <div className="w-5 h-5 bg-white rounded-full absolute left-[10%] top-[8%]"></div>
            <div className="w-4 h-4 bg-white rounded-full absolute left-[2%] top-[8%]"></div>
            <div className="hidden sm:block w-5 h-5 bg-white rounded-full absolute left-[30%] top-[5%]"></div>
            <div className="w-3 h-3 bg-white rounded-full absolute left-[40%] top-[2%]"></div>
            <div className="w-5 h-5 bg-white rounded-full absolute right-[4%] top-[5%]"></div>
            <div className="w-3 h-3 bg-white rounded-full absolute right-[10%] top-[15%]"></div>
            <div className="w-5 h-5 bg-white rounded-full absolute right-[30%] top-[8%]"></div>
            <div className="w-5 h-5 bg-white rounded-full absolute right-[40%] top-[10%]"></div>
            <div className="w-4 h-4 bg-white rounded-full absolute right-[20%] top-[20%]"></div>

            <div className="w-6 h-6 bg-white rounded-full absolute left-[45%] top-[13%]"></div>
            <div className="w-4 h-4 bg-white rounded-full absolute left-[30%] top-[20%]"></div>
            <div className="w-6 h-6 bg-white rounded-full absolute left-[4%] top-[15%]"></div>
            <div className="hidden sm:block w-5 h-5 bg-white rounded-full absolute left-[10%] top-[24%]"></div>
            <div className="w-4 h-4 bg-white rounded-full absolute right-[10%] top-[19%]"></div>
            <div className="w-3 h-3 bg-white rounded-full absolute right-[20%] top-[12%]"></div>


            <div className="w-5 h-5 bg-white rounded-full absolute left-[7%] top-[40%]"></div>
            <div className="w-3 h-3 bg-white rounded-full absolute left-[23%] top-[30%]"></div>
            <div className="w-4 h-4 bg-white rounded-full absolute left-[10%] top-[32%]"></div>
            <div className="hidden sm:block w-5 h-5 bg-white rounded-full absolute left-[20%] top-[43%]"></div>
            <div className="w-5 h-5 bg-white rounded-full absolute right-[30%] top-[20%]"></div>
            <div className="w-4 h-4 bg-white rounded-full absolute right-[10%] top-[32%]"></div>
            <div className="hidden sm:block w-3 h-3 bg-white rounded-full absolute right-[20%] top-[40%]"></div>
            <div className="hidden sm:block w-5 h-5 bg-white rounded-full absolute right-[20%] top-[52%]"></div>


            <div className="w-5 h-5 bg-white rounded-full absolute left-[2%] top-[60%]"></div>
            <div className="w-3 h-3 bg-white rounded-full absolute left-[23%] top-[60%]"></div>
            <div className="hidden sm:block w-4 h-4 bg-white rounded-full absolute left-[10%] top-[52%]"></div>
            <div className="w-5 h-5 bg-white rounded-full absolute left-[20%] top-[68%]"></div>
            <div className="w-2 h-2 bg-white rounded-full absolute right-[30%] top-[60%]"></div>
            <div className="w-4 h-4 bg-white rounded-full absolute right-[10%] top-[58%]"></div>
            <div className="w-3 h-3 bg-white rounded-full absolute right-[20%] top-[72%]"></div>
            <div className="hidden sm:block w-5 h-5 bg-white rounded-full absolute right-[25%] top-[62%]"></div>


            <div className="w-2 h-2 bg-white rounded-full absolute right-[29%] top-[70%]"></div>
            <div className="w-4 h-4 bg-white rounded-full absolute right-[10%] top-[78%]"></div>
            <div className="w-3 h-3 bg-white rounded-full absolute right-[2%] top-[72%]"></div>
            <div className="w-5 h-5 bg-white rounded-full absolute right-[25%] top-[62%]"></div>
        </div>
    )
}

