"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';

// Import Components
import CTA from "@/components/cta/CTA";

const Looking = ({ content }) => {
    const { title, para: { paraArray }, isCTA, flodImg } = content;
    // set fold Image
    const router = usePathname();
    let lookinImage;
    let lookingSecCol;
    switch (router) {
        case '/why-us':
            lookinImage = 'lg:min-w-[1000px] mr-auto'
            lookingSecCol = 'md:absolute right-[54px] top-[18%]'
            break;
        default:
            break;
    }

    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-8 lg:py-16 bg-none lg:bg-[url("../../public/images/fold-bg.png")] bg-no-repeat bg-center bg-cover relative`}>
                <div className="container">
                    <div className='flex flex-col-reverse lg:flex-row items-center justify-around gap-y-7'>
                        <div className={`w-full lg:w-[500px] ${lookinImage}`}>
                            <Image src={flodImg} className="w-9/12 lg:w-full mx-auto" alt="Infinity Animation" quality={85} />
                        </div>
                        <div className={`w-full lg:w-[800px] ${lookingSecCol}`}>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] font-bold font-sans leading-tight mb-5">
                                {title}
                            </h1>
                            {paraArray.map((para, index) => (
                                <p key={index} className="text-[16px] font-semibold font-sans leading-snug tracking-wider text-justify mb-5">
                                    {para}
                                </p>
                            ))}
                            <div className="flex gap-6">
                                <CTA
                                    text="Get Started"
                                    icon1={true}
                                    bg="bg-prime"
                                    color={`text-white`}
                                    border={`border-2 border-[#f5090b]`}
                                    hover="hover:bg-transparent hover:text-white"
                                    href="#"
                                />
                                {isCTA ?
                                    <CTA
                                        text="Live Chat"
                                        icon2={true}
                                        bg="bg-black"
                                        color={`text-white`}
                                        border={`border-2 border-[#000]`}
                                        hover="hover:bg-prime hover:text-white"
                                        href="javascript:$zopim.livechat.window.show();"
                                    /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Looking
