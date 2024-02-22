"use client"
import Image from "next/image";
// Import Components
import CTA from "@/components/cta/CTA";
// Import Images
import icon1 from "media/icons/concept-icon1.png"
import icon2 from "media/icons/concept-icon2.png"
import icon3 from "media/icons/concept-icon3.png"
import icon4 from "media/icons/concept-icon4.png"


const Concept = ({ content }) => {
    const { btnBg, btnColor, btnBorder, btnHover, } = content;
    return (
        <>
            <section className={`w-full h-full flex items-center justify-star bg-none lg:bg-[url("../../public/home/concept-bg.png")] bg-no-repeat bg-center bg-[length:100%_100%]`}>
                <div className="container">
                    <div className='lg:w-[550px] xl:w-[650px] ml-auto mt-0 lg:mt-48 py-8 md:py-16 lg:py-20'>
                        <div className="grid grid-cols-2 gap-12 relative">
                            <div className="absolute left-[50%] w-[1px] h-full bg-black text-black"></div>
                            <div className="absolute top-[50%] w-full h-[1px] bg-black text-black"></div>
                            <div className="sm:p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon1} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                    <div className="border-[1.5px] xl:border-2 border-black rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal text-white">01</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-semibold tracking-wide mb-2">Concept</h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">No work of art or wonder can ever be brought to life without a concrete concept. </p>
                                </div>
                            </div>
                            <div className="sm:p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon2} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                    <div className="border-[1.5px] xl:border-2 border-black rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal text-white">02</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-semibold tracking-wide mb-2">Storyboarding</h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">Every frame of the story or idea is as essential as every piece of the puzzle.</p>
                                </div>
                            </div>
                            <div className="sm:p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon3} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                    <div className="border-[1.5px] xl:border-2 border-black rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal text-white">03</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-semibold tracking-wide mb-2">Creation</h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">What good is an artistic idea or a magical story if it does not visually exist?</p>
                                </div>
                            </div>
                            <div className="sm:p-4">
                                <div className="flex flex-wrap items-start justify-between mb-3">
                                    <Image src={icon4} className="w-[20%] xl:w-auto" alt='Infinity Animation' />
                                    <div className="border-[1.5px] xl:border-2 border-black rounded-full p-0.5 xl:p-1 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
                                        <span className="w-full h-full flex items-center justify-center bg-primary-100 rounded-full text-md xl:text-[14px] font-sans font-normal text-white">04</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[24px] xl:text-[30px] font-sans font-semibold tracking-wide mb-2">Delivery</h3>
                                    <p className="text-[12px] xl:text-[16px] font-sans font-normal tracking-wider line-clamp-3">And what good are the promises that cannot be kept, right? We don’t do that here!</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-start gap-6 mt-7 sm:mt-4 sm:p-4">
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
                </div>
            </section>
        </>
    )
}

export default Concept
