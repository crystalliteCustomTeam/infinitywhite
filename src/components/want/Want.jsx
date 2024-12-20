"use client"
import React from 'react'
import Image from 'next/image';
// Import Components
import CTA from '../cta/CTA'
// Import Images
import Car from "media/images/talk-bg.gif"

const Want = ({ content }) => {
    const { title, wantDesc } = content;

    return (
        <>
            <section className={`md:pt-10 md:mt-20 wantbg md:bg-[url('../../public/images/talk-bg.png')] bg-no-repeat bg-[length:100%] md:h-[35vh] lg:h-[80vh] relative py-7 md:py-0`}>
                <div className='hidden md:grid grid-cols-2'>
                    <Image src={Car} className='w-[48%] rotate-[5deg] absolute left-[2%] bottom-[25%] lg:bottom-[16%]' alt='Animation Studios' />
                </div>
                <div className="md:absolute right-[7.3%] top-[15%] lg:top-[20%] xl:top-[18%] 2xl:top-[25%] w-[40%] mx-auto">
                    <h2 className='text-white text-[25px] lg:text-[38px] xl:text-[50px] leading-tight font-bold font-sans text-center'>{title}</h2>
                    <p className='text-white text-[12px] lg:text-[14px] xl:text-[16px] font-normal font-sans text-center md:w-6/12 mx-auto lg:w-full'>{wantDesc}</p>
                    <div className="flex flex-wrap gap-3 lg:gap-4 justify-center pt-3 lg:pt-6">
                        <CTA
                            text="Get Started"
                            icon="/icons/arrow-red.png"
                            iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                            bg="bg-prime"
                            color={`text-white`}
                            border={`border-2 md:border-0`}
                            hover="hover:bg-transparent"
                        />
                        <CTA
                            text="Live Chat"
                            icon="/icons/chat.png"
                            iconCss="w-[40px]"
                            bg="bg-[#000]"
                            color={`text-white`}
                            border={`border-2`}
                            hover="hover:bg-prime"
                            href="javascript:$zopim.livechat.window.show();"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Want
