import React from 'react'
import Image from 'next/image'
//====== Images
import Icon1 from 'media/icons/core-icon1.png'
import Icon2 from 'media/icons/core-icon2.png'
import Icon3 from 'media/icons/core-icon3.png'
import Icon4 from 'media/icons/core-icon4.png'
import Icon5 from 'media/icons/core-icon5.png'
import coreImage from 'media/why-us/core-bg.gif'

const Features = () => {
    return (
        <>
            <section className='relative py-8 lg:pb-16'>
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-4">
                        <div className="col-span-12">
                            <div className="mb-3 lg:mb-[50px]">
                                <h2 className='text-[40px] md:text-[60px] font-semibold font-sans leading-tight text-center mb-3'>The Core Features</h2>
                                <p className='text-[16px] font-normal font-sans leading-snug tracking-wider text-center lg:w-8/12 mx-auto'>Animation Studioss prioritizes affordability and quality above everything else. Our aim is to treat our clients the way we want to be treated. We, as creative service providers, firmly believe that client satisfaction is paramount.</p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="grid grid-cols-12 gap-4 relative z-50">
                                <div className="col-span-12 md:col-span-6">
                                    <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                        <Image src={Icon1} alt='Animation Studios' width={64} height={67} />
                                        <h3 className='text-black text-[30px] font-bold font-sans mb-2 mt-2'>Creative Mindset</h3>
                                        <p className='text-black text-[14px] font-sans font-light'>Imagination fuels progress, unlocking boundless potential. A creative mindset is an open doorway to innovation and problem-solving. It thrives on curiosity, embraces challenges, and unearths unique solutions. Nurturing this mindset fuels ingenuity and endless possibilities.</p>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                        <Image src={Icon2} alt='Animation Studios' width={64} height={67} />
                                        <h3 className='text-black text-[30px] font-bold font-sans mb-2 mt-2'>Clean Approach</h3>
                                        <p className='text-black text-[14px] font-sans font-light'>Enhancing storytelling through refinement. A clean approach in animation emphasizes precision and simplicity, ensuring every frame is polished and clutter-free. It results in a visually stunning, streamlined narrative that mesmerizes audiences with its elegant execution.</p>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                        <Image src={Icon3} alt='Animation Studios' width={64} height={67} />
                                        <h3 className='text-black text-[30px] font-bold font-sans mb-2 mt-2'>Our Priority</h3>
                                        <p className='text-black text-[14px] font-sans font-light'>Client satisfaction is our paramount priority. We diligently listen, adapt, and exceed expectations to ensure our clients' needs are not only met but consistently exceeded. Client-centric focus drives enduring success. Their trust fuels our commitment.</p>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                        <Image src={Icon4} alt='Animation Studios' width={64} height={67} />
                                        <h3 className='text-black text-[30px] font-bold font-sans mb-2 mt-2'>Tested Methodology</h3>
                                        <p className='text-black text-[14px] font-sans font-light'>Our animation methodology, carefully tested and refined, combines artistic flair with technical precision. It guarantees high-quality results, efficient workflows, and consistent excellence in every project, setting industry standards for animation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="absolute right-0 lg:right-[170px] top-[15%] -z-1 md:block hidden">
                                <Image src={coreImage} alt='Animation Studios' className='w-full' />
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="col-span-6">
                                <div className="card backdrop-blur-sm bg-white/20 border border-[#707070] rounded-[15px] pt-4 px-4 pb-10 h-full">
                                    <Image src={Icon5} alt='Animation Studios' width={64} height={67} />
                                    <h3 className='text-black text-[30px] font-bold font-sans mb-2 mt-2'>The Paramountcy of Teamwork</h3>
                                    <p className='text-black text-[14px] font-sans font-light'>Teamwork is the cornerstone of success, fostering collaboration, synergy, and shared goals. Together, individuals harness diverse strengths, tackle challenges effectively, and achieve more than they ever could in isolation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features