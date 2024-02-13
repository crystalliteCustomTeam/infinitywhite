import { Card } from 'flowbite-react';
import Image from 'next/image';
import React from 'react'
import CTA from '../cta/CTA';

const Tech = ({ content }) => {
    const { title, card } = content;
    return (
        <>
            <section>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h2 className='text-[50px] font-bold font-sans text-center text-white'>{title}</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 lg:grid-cols-3 gap-x-5 mb-12">
                        {card.map((techType, index) => (
                            <div key={index} className="bg-[url('../../public/tech-type/techtype-bg.png')] bg-cover bg-center pt-6 pb-12 px-[15px] h-[522px] flex items-end justify-end">
                                <div>
                                    <Image src={techType.CardOne} alt='tech type' width={100} height={100} className='mx-auto mb-4' />
                                    <h3 className='text-white text-center font-bold font-sans text-[25px] lg:text-[30px] lg:w-10/12 mx-auto leading-tight pb-3'>
                                        {techType.CardTitle}
                                    </h3>
                                    <hr className='border-1 border-[#FFFFFF]' />
                                    <p className='text-[16px] text-white font-sans text-center pt-3 lg:w-[88%] mx-auto line-clamp-6'>{techType.CardPara}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="flex items-center justify-center gap-x-5">
                                <CTA
                                    text="Get a Quote"
                                    icon1={true}
                                    bg="bg-prime"
                                    color={`text-white`}
                                    border={`border-2 border-[#f5090b]`}
                                    hover="hover:bg-transparent"
                                    href="#"
                                />
                                <CTA
                                    text="See Portfolio"
                                    icon1={true}
                                    bg="bg-black"
                                    color={`text-white`}
                                    border={`border-2 border-[#000]`}
                                    hover="hover:bg-prime"
                                    href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tech