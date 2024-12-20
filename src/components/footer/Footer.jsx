"use client"
// Imports Components
import Image from "next/image";
import Link from "next/link";
// Import Images
import logo from "media/images/logo.png";
import mapmarker from "media/icons/map.png";
import telephone from "media/icons/call.png";
import envelope from "media/icons/email.png";
import facebook from "media/icons/fb.png";
import twitter from "media/icons/x.png";
import instagram from "media/icons/insta.png";
import youtube from "media/icons/youtube.png";
import vimeo from "media/icons/vemio.png";
import linkedin from "media/icons/linkedin.png";

const Footer = () => {
    const quickLinks = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Why Us",
            link: "/why-us"
        },
        {
            text: "Video Animation",
            link: "/"
        },
        {
            text: "Portfolio",
            link: "/portfolio"
        },
        {
            text: "Pricing",
            link: "/pricing"
        },
        {
            text: "Contact Us",
            link: "/contact-us"
        },
    ];
    const servicesLinks = [
        {
            text: "Hire 2D Animator",
            link: "/"
        },
        {
            text: "Hire 3D Animator",
            link: "/"
        },
        {
            text: "Hire Animator",
            link: "/"
        },
        {
            text: "Hire Game Designer",
            link: "/"
        },
        {
            text: "Hire UI/UX Designer",
            link: "/"
        },
    ];
    const contactLinks = [
        {
            text: "833-666-6684",
            link: "tel:+8336666689",
            icon: telephone
        },
        {
            text: "queries@infinityanimations.com",
            link: "mailto:queries@infinityanimations.com",
            icon: envelope
        },
        {
            text: "One World Trade Center, Suite 8500, New York, New York, 10007, United States",
            link: "/contact-us",
            icon: mapmarker
        },
        // {
        //     text: "1024 Iron Point Rd, Folsom, CA 95630",
        //     link: "https://maps.app.goo.gl/QYDv6abiPbW5rRoK6",
        //     icon: mapmarker
        // },
        {
            text: "5900 Balcones Dr STE 100 AUSTIN TX 78731",
            link: "https://maps.app.goo.gl/TutauqTW699twmza9",
            icon: mapmarker
        },
        {
            text: "Unit 10B Block 1 Woolwich Dock Yard Industrial Estate Woolwich Church Street London SE 18 5PQ",
            link: "https://maps.app.goo.gl/JXJpnXK3tLMtZrD67",
            icon: mapmarker
        },
    ];
    const otherLinks = [
        {
            text: "Terms of Services",
            link: "/terms-and-conditions",
        },
        {
            text: "Privacy Policy",
            link: "/privacy-policy",
        },
    ];
    const socialLinks = [
        {
            icon: facebook,
            link: "https://www.facebook.com/"
        },
        {
            icon: twitter,
            link: "https://twitter.com/_"
        },
        {
            icon: instagram,
            link: "https://www.instagram.com/"
        },
        {
            icon: linkedin,
            link: "https://www.linkedin.com/"
        },
        {
            icon: youtube,
            link: "https://www.youtube.com/@Infinity-Animations"
        },
        {
            icon: vimeo,
            link: "https://www.vimeo.com/infinityanimations"
        },
    ]

    return (
        <footer>
            <div className="pt-10 md:pt-16">
                <div className="container">
                    <div className="flex gap-x-5 pb-8 border-b-[1px] border-[#707070] flex-wrap lg:flex-nowrap justify-between gap-y-5 lg:gap-y-0">
                        <div className="basis-full sm:basis-[48%] lg:basis-[30%]">
                            <Link href="/">
                                <Image src={logo} className="w-[40%]" alt="Animation Studios" />
                            </Link>
                           
                        </div>
                        <div className="basis-full sm:basis-[48%] lg:basis-[20%]">
                            <h4 className="text-2xl font-semibold font-sans text-black leading-none mb-3">Company</h4>
                            <ul>
                                {
                                    quickLinks.map((e, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={e.link} className="text-sm xl:text-base text-black font-sans font-normal hover:text-primary-100 leading-8 xl:leading-8">
                                                    {e.text}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="basis-full sm:basis-[48%] lg:basis-1/4">
                            <h4 className="text-2xl font-semibold font-sans text-black leading-none mb-3">Resource Augmentation</h4>
                            <ul>
                                {
                                    servicesLinks.map((e, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={e.link} className="text-sm xl:text-base text-black font-sans font-normal hover:text-primary-100 leading-8 xl:leading-8">
                                                    {e.text}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="basis-full sm:basis-[48%] lg:basis-1/4 flex flex-col justify-between">
                            <div>
                                <h4 className="text-2xl font-semibold font-sans text-black leading-none mb-3">Contact Us</h4>
                                <ul>
                                    {
                                        contactLinks.map((e, i) => {
                                            return (
                                                <li key={i} className="flex items-center gap-2 mb-3 last:mb-0">
                                                    <Image src={e.icon} className="w-[15px] invert" alt="Animation Studios" />
                                                    <a href={e.link} className="text-sm xl:text-base text-black font-sans font-normal hover:text-primary-100">
                                                        {e.text}
                                                    </a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <ul className="flex items-center gap-4 mt-4 md:mt-6">
                                    {
                                        socialLinks.map((e, i) => {
                                            return (
                                                <li key={i} className="bg-[#22212D] hover:bg-second w-[45px] h-[45px] rounded-[5px] flex items-center justify-center p-1">
                                                    <Link href={e.link} target="_blank">
                                                        <Image src={e.icon} className="w-[20px]" alt="Animation Studios" />
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-5 py-5 flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0 items-center border-b-[1px] border-[#707070]">
                        <div className="basis-full sm:basis-1/2">
                            <p className="text-sm font-sans text-black leading-6 text-center sm:text-left">
                                © Animation Studioss 2024. All Rights Reserved
                            </p>
                        </div>
                        <div className="basis-full sm:basis-1/2">
                            <ul className="flex items-center justify-center sm:justify-end md:mr-[120px] 3xl:mr-0 gap-4">
                                {
                                    otherLinks.map((e, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={e.link} className="text-sm xl:text-base text-black font-sans font-normal hover:text-primary-100 leading-8 xl:leading-8">
                                                    {e.text}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;