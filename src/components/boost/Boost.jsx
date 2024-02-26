"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import CTA from "@/components/cta/CTA";

const Boost = ({ content }) => {
    const { title, para, flodImg, boostContent } = content;
    // Set styling
    const router = usePathname();
    let padding;
    switch (router) {
        case "/":
            padding = 'pt-32'
            break;
        default:
            break;
    }
    return (
        <>
            <section className={`w-full flex py-6 md:py-8 lg:py-16`}>
                <div className="container">
                    <div className='flex flex-col-reverse lg:flex-row gap-y-8 items-center justify-between'>
                        <div className='w-full lg:w-[1000px]'>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] font-bold font-sans leading-tight mb-3">
                                {title}
                            </h1>
                            <p className="text-[16px] font-semibold font-sans leading-snug tracking-wider text-justify mb-5">
                                {para}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-10 my-8 xl:my-12">
                                {boostContent.map((item, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute left-[-10%] w-[1px] h-full bg-black text-black"></div>
                                        <Image src={item.icon} className="w-[18%] h-[22%] mb-3 object-contain" alt='Infinity Animation' />
                                        <h3 className="text-[18px] xl:text-[20px] font-sans font-bold tracking-wide mb-2">{item.heading}</h3>
                                        <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line">{item.text}</p>
                                    </div>
                                ))}
                            </div>
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
                                <CTA
                                    text="Live Chat"
                                    icon="/icons/chat.png"
                                    iconCss="w-[40px]"
                                    bg="bg-[#000]"
                                    color={`text-white`}
                                    border={`border-0`}
                                    hover="hover:bg-prime"
                                    href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-[400px] lg:w-[500px]">
                            <Image src={flodImg} className="mx-auto w-full" alt="Infinity Animation Pro" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Boost
