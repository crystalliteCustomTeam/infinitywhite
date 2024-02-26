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
            lookingSecCol = 'md:absolute right-[54px] top-[30%]'
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
                            <Image src={flodImg} className="w-full mx-auto" alt="Infinity Animation Pro" quality={85} />
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
                                    icon="/icons/arrow-red.png"
                                    iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                                    bg="bg-prime"
                                    color={`text-white`}
                                    border={`border-0`}
                                    hover="hover:bg-transparent"
                                    href="tel:833-666-6689"
                                />
                                {isCTA ?
                                    <CTA
                                        text="Live Chat"
                                        icon="/icons/chat.png"
                                        iconCss="w-[40px]"
                                        bg="bg-[#000]"
                                        color={`text-white`}
                                        border={`border-0`}
                                        hover="hover:bg-prime"
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
