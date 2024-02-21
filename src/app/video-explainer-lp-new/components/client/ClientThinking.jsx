import { Star } from 'heroicons-react'
import { FaQuoteLeft } from "react-icons/fa";
import Image from 'next/image'
import React from 'react'

// Images 
import Testi1 from "media/video-explainer2/testi-img1.png"
import Testi2 from "media/video-explainer2/testi-img2.png"
import Testi3 from "media/video-explainer2/testi-img3.png"
import TestiBf from "media/video-explainer2/testi-bf.png"

const ClientThinking = () => {
    return (
        <>
            <section className='pt-[50px] pb-[60px] bg-cover bg-center bg-[url(../../public/video-explainer2/testi-bg.png)] relative'>
                <Image src={TestiBf} alt='Particle Image' className='w-[245px] h-[585px] object-contain absolute left-[15px] bottom-0 z-0 testi lg:block hidden' />
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <h2 className='text-white text-center font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>Feedback from Valued Clientele</h2>
                            <p className='text-white text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] text-center pb-[40px] md:pb-[60px]'>Our experts leave no stone unturned in providing the desired outcome of our clients</p>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="card h-full bg-white rounded-[3px] shadow-lg md:mx-[12px] relative p-0 translate-y-0 lg:hover:translate-y-[-20px] duration-700 hover:duration-700 flex flex-col justify-between">
                                <span className='text-[#222] text-[50px] md:text-[75px] relative left-[18px] top-[20px]'>
                                    <FaQuoteLeft />
                                </span>
                                <p className='mb-[20px] p-[20px] text-[15px] font-bold text-black montserrat mx-auto lg:w-11/12 mt-[13px] text-center'>I never knew explaining tech could be so cool! These guys turned my jargon into a visual masterpiece. My audience loves it!</p>
                                <div className="card-bottom flex items-center p-[20px] bg-[#f1f0f0]">
                                    <div className="img">
                                        <Image src={Testi1} alt='testi1' className='img-fluid' />
                                    </div>
                                    <div className="content pl-[15px]">
                                        <h4 className='text-[15px] md:text-[18px] font-[600] montserrat text-black'>John D. - Tech Guru</h4>
                                        <div className="reviews flex items-center">
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="card h-full bg-white rounded-[3px] shadow-lg md:mx-[12px] relative p-0 translate-y-0 lg:hover:translate-y-[-20px] duration-700 hover:duration-700 flex flex-col justify-between">
                                <span className='text-[#222] text-[50px] md:text-[75px] relative left-[18px] top-[20px]'>
                                    <FaQuoteLeft />
                                </span>
                                <p className='mb-[20px] p-[20px] text-[15px] font-bold text-black montserrat mx-auto lg:w-11/12 mt-[13px] text-center'>My fitness app needed a boost, and these video wizards made it happen! Now, even my dumbbells are doing a happy dance. Thanks, team!</p>
                                <div className="card-bottom flex items-center p-[20px] bg-[#f1f0f0]">
                                    <div className="img">
                                        <Image src={Testi2} alt='testi1' className='img-fluid' />
                                    </div>
                                    <div className="content pl-[15px]">
                                        <h4 className='text-[15px] md:text-[18px] font-[600] montserrat text-black'>Sarah K. - Fitness Leader</h4>
                                        <div className="reviews flex items-center">
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="card h-full bg-white rounded-[3px] shadow-lg md:mx-[12px] relative p-0 translate-y-0 lg:hover:translate-y-[-20px] duration-700 hover:duration-700 flex flex-col justify-between">
                                <span className='text-[#222] text-[50px] md:text-[75px] relative left-[18px] top-[20px]'>
                                    <FaQuoteLeft />
                                </span>
                                <p className='mb-[20px] p-[20px] text-[15px] font-bold text-black montserrat mx-auto lg:w-11/12 mt-[13px] text-center'>"Who knew explaining coffee blends could be an art? These folks brewed up an explainer video that's as smooth as my morning espresso. Cheers!"</p>

                                <div className="card-bottom flex items-center p-[20px] bg-[#f1f0f0]">
                                    <div className="img">
                                        <Image src={Testi3} alt='testi1' className='img-fluid' />
                                    </div>
                                    <div className="content pl-[15px]">
                                        <h4 className='text-[15px] md:text-[18px] font-[600] montserrat text-black'>Eddie S. - Coffee Connoisseur</h4>
                                        <div className="reviews flex items-center">
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                            <Star className='text-[#ffd100] text-[14px] w-[20px] h-[20px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ClientThinking
