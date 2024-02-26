"use client"
import Image from "next/image";
// Import Images
import star from "media/icons/star.png"
import chat from "media/icons/chat.png"
import arrow from "media/icons/arrow-red.png"
import arrowB from "media/icons/arrow.png"
import tickP from "media/icons/tick-p.png"
import tickW from "media/icons/tick-w.png"

const packages = [
    {
        name: 'Startup Package',
        price: '$195',
        backgroundColor: '#2f2f2fd1',
        tickImage: tickP,
        color: "text-black",
        ctaColor: "text-black",
        titleColor: "text-black",
        features: [
            '60 Seconds Duration',
            'Script Writing',
            'Custom Artwork',
            'Background Music',
            'HD Format Video',
            'Dedicated Support',
            { text: 'Invisible Point', isVisible: true },
        ],
        buttons: [
            {
                text: 'Get Started',
                color: 'bg-prime text-white border border-white',
                image: arrow,
                href: "tel:833-666-6689",
                imgColor: "bg-white w-[25px] h-[25px] xl:w-[28px] xl:h-[28px] rounded-full p-2 ms-1"
            },
            {
                text: 'Live Chat',
                color: 'bg-black text-white border border-white',
                image: chat,
                href: "javascript:$zopim.livechat.window.show();"
            },
        ],
    },
    {
        name: 'Classic Package',
        price: '$499',
        backgroundColor: '#262626',
        color: "text-white",
        tickImage: tickW,
        mblSpc: 'my-10 md:my-0',
        ctaColor: "text-white",
        titleColor: "text-white",
        features: [
            '60 Seconds Duration',
            'Script Writing',
            'Professional Voice-over & SFX',
            'Hand-drawn Illustrations',
            'Unlimited Revisions',
            'HD Format Video',
            'Dedicated Support',
        ],
        buttons: [
            {
                text: 'Get Started',
                color: 'bg-white text-black font-semibold border border-white',
                image: arrowB,
                href: "tel:833-666-6689",
                imgColor: "bg-black w-[25px] h-[25px] xl:w-[28px] xl:h-[28px] rounded-full p-[8.5px] rotate-[90deg]"
            },
            {
                text: 'Live Chat',
                color: 'bg-black text-white border border-white',
                image: chat,
                href: "javascript:$zopim.livechat.window.show();"
            },
        ],
    },
    {
        name: 'Premium Package',
        price: '$799',
        backgroundColor: '#2f2f2fd1',
        color: "text-black",
        tickImage: tickP,
        ctaColor: "text-black",
        titleColor: "text-black",
        features: [
            '60 Seconds Duration',
            'Script Writing',
            'Professional Voice-over & SFX',
            'Custom 2D Character Illustration',
            'Unlimited Revisions',
            'HD Format Video',
            'Dedicated Support',
        ],
        buttons: [
            {
                text: 'Get Started',
                color: 'bg-prime text-white border border-white',
                image: arrow,
                href: "tel:833-666-6689",
                imgColor: "bg-white w-[25px] h-[25px] xl:w-[28px] xl:h-[28px] rounded-full p-2 ms-1"
            },
            {
                text: 'Live Chat',
                color: 'bg-black text-white border border-white',
                image: chat,
                href: "javascript:$zopim.livechat.window.show();"
            },
        ],
    },
];

const Pricing = ({ content }) => {
    const { title, para } = content;
    return (
        <>
            <section className={`w-full flex items-center justify-start py-16`}>
                <div className="container">
                    <div className='flex items-center justify-center'>
                        <div className='w-full'>
                            <h1 className="text-[40px] md:text-[50px] font-semibold font-sans text-center leading-tight mb-3">
                                {title}
                            </h1>
                            <p className="text-[16px] font-normal font-sans leading-snug tracking-wider text-center mb-5">
                                {para}
                            </p>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 md:mt-32">
                                {packages.map((pkg, index) => (
                                    <div key={index} className={`relative ${pkg.mblSpc}`}>
                                        <div key={index} className={`absolute top-[-7%] md:top-[-10%] lg:top-[-7%] xl:top-[-8%] left-[12%] h-[115px] w-[75%] -z-10 rounded-3xl flex items-start justify-center pt-4 gap-2 ${index === 1 ? 'bg-[#262626]' : 'bg-third'}`}>
                                            {Array.from({ length: index + 1 }).map((_, i) => (
                                                <Image key={i} src={star} className="w-[6%]" alt="Infinity Animation Pro" />
                                            ))}
                                        </div>
                                        <div className={`relative ${pkg.backgroundColor === '#262626' ? 'bg-second' : 'backdrop-blur-sm bg-[#ffffff]/75'} border-2 border-[rgba(245,_9,_11,_1)] flex flex-col justify-start py-12 h-auto rounded-[35px]`}>
                                            <div className="border-b-2 px-6 pb-4">
                                                <h3 className={`text-[30px] font-extrabold ${pkg.titleColor} font-sans leading-tight mb-2`}>{pkg.name}</h3>
                                                <h4 className={`text-[60px] font-extrabold ${pkg.titleColor} font-sans ${pkg.backgroundColor === '#ffffff' ? 'text-secondary-100' : ''}`}>{pkg.price}</h4>
                                            </div>
                                            <ul className="pt-4 px-6">
                                                {pkg.features.map((feature, i) => (
                                                    typeof feature === 'string' ? (
                                                        <li key={i} className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider">
                                                            <Image src={pkg.tickImage} className="w-[3%]" alt="Infinity Animation Pro" />
                                                            <span className={pkg.color}>{feature}</span>
                                                        </li>
                                                    ) : (
                                                        (feature.isVisible && (
                                                            <li key={i} className="flex items-center gap-3 my-2 xl:my-3 text-[16px] font-normal font-sans leading-snug tracking-wider invisible">
                                                                <Image src={pkg.tickImage} className="w-[3%]" alt="Infinity Animation Pro" />
                                                                <span className="text-white">{feature.text}</span>
                                                            </li>
                                                        ))
                                                    )
                                                ))}
                                            </ul>
                                            <div className="flex justify-between px-6 mt-5 pt-4">
                                                <div>
                                                    <p className={`text-[15px] ${pkg.ctaColor} font-bold font-sans`}>Speak With Us</p>
                                                    <a href="tel:833-666-6689" className={`font-sans ${pkg.ctaColor} text-[14px]`}>833-666-6689</a>
                                                </div>
                                                <div>
                                                    <p className={`text-[15px] ${pkg.ctaColor} font-bold font-sans`}>Want To Discuss</p>
                                                    <a href="javascript:$zopim.livechat.window.show();" className={`font-sans ${pkg.ctaColor} text-[14px]`}>Live Chat Now</a>
                                                </div>
                                            </div>
                                            <div className="flex justify-between px-6 mt-5">
                                                {pkg.buttons.map((button, i) => (
                                                    <a key={i} href={button.href} className={`flex items-center justify-between font-sans ${button.color} w-max py-2 px-3 xl:px-5 gap-2 rounded-lg`}>
                                                        <span className="text-[14px] xl:text-[16px]">{button.text}</span>
                                                        <Image src={button.image} className={`${button.imgColor} ${button.text === 'Get Started' ? '' : button.text === 'Live Chat' ? 'w-[30px]' : ''}`} alt="Infinity Animation Pro" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
