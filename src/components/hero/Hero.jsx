"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import CTA from "@/components/cta/CTA";
// Import Images
import trustPlatforms from "media/icons/trust.png";
import trustPlatforms2 from "media/icons/trust2.png";

const Hero = ({ content }) => {
    const { title, para, } = content;
    // Set Bg-Image
    const router = usePathname();
    let backgroundImage;
    let margin;
    let color;
    let border;
    switch (router) {
        case "/":
            backgroundImage = 'bg-[length:100%_70%] bg-bottom lg:items-end xxl:items-center lg:bg-[url("../../public/home/banner-img.png")]'
            margin = 'mt-0'
            break;
        case '/why-us':
            backgroundImage = 'bg-[length:100%_100%] bg-bottom lg:bg-[url("../../public/why-us/banner-bg.png")]'
            break;
        case '/portfolio':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/portfolio/banner-bg.png")]'
            break;
        case '/process':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/process/banner-bg.gif")]'
            color = 'text-white'
            border = 'border-2'
            break;
        case '/pricing':
            backgroundImage = 'bg-[length:100%_140%] bg-center lg:bg-[url("../../public/pricing/banner-bg.gif")]'
            break;
        case '/blog':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/blogs/banner-bg.gif")]'
            break;
        case '/contact-us':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/contact/banner-bg.gif")]'
            break;
        case '/logo-animation':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/logo-animation/banner-bg.png")]'
            break;
        case '/architectural-services':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/architectural-services/banner-bg.gif")]'
            break;
        case '/cgi-and-vfx':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/cgi-and-vfx/banner-bg.png")]'
            break;
        case '/motion-graphics':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/motion-graphics/banner-bg.png")]'
            break;
        case '/video-editing':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/video-editing/banner-bg.png")]'
            break;
        case '/2d-animation':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/2d-animation/banner-bg.png")]'
            break;
        case '/3d-animation':
            backgroundImage = 'bg-[length:100%_100%] bg-center lg:bg-[url("../../public/3d-animation/banner-bg.gif")]'
            color = 'text-white'
            border = 'border-2'
            break;
        case '/whiteboard-animation':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/whiteboard/banner-bg.png")]'
            break;
        case '/infographics-design':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/infographics/banner-bg.png")]'
            break;
        case '/hybrid-&-cel-animations':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/hybrid-cel/banner-bg.png")]'
            break;
        case '/tech-videos':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/tech-videos/banner-bg.png")]'
            break;
        case '/corporate-video':
            backgroundImage = 'bg-cover bg-center lg:bg-[url("../../public/corporate-video/banner-bg.png")]'
            break;
        default:
            break;
    }
    return (
        <>
            <section className={`w-full h-[100vh] flex items-center justify-start sm:pb-5 bg-none bg-no-repeat ${backgroundImage}`}>
                <div className="container">
                    <div className='flex'>
                        <div className='w-full lg:w-[550px] xl:w-[600px]'>
                            <h1 className={`text-[40px] md:text-[50px] xl:text-[60px] font-bold font-sans leading-none mb-5 mt-32 ${margin} ${color}`}>
                                {title}
                            </h1>
                            <p className={`text-[14px] xl:text-[16px] font-normal font-sans leading-normal tracking-wider text-justify mb-5 ${color}`}>
                                {para}
                            </p>
                            <div className="flex gap-6">
                                <CTA
                                    text="Get Started"
                                    icon="/icons/arrow-red.png"
                                    iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                                    bg="bg-prime"
                                    color={`text-white`}
                                    border={`border-0`}
                                    hover="hover:bg-transparent"
                                />
                                <CTA
                                    text="Live Chat"
                                    icon="/icons/chat.png"
                                    iconCss="w-[40px]"
                                    bg="bg-[#000]"
                                    color={`text-white`}
                                    border={`border-0 ${border}`}
                                    hover="hover:bg-prime"
                                    href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                            <Image
                                src={(router === "/" || router === "/process" || router === "/3d-animation") ? trustPlatforms2 : trustPlatforms}
                                className="mt-10 md:mt-20"
                                alt="Animation Studios Pro"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
