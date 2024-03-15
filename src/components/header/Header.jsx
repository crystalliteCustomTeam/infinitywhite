"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import usePopup from "@/app/configs/store/Popup";
import CTA from "../cta/CTA";
// Import Icons
import { Navbar, Collapse, List, Menu, MenuHandler, MenuList, MenuItem, } from "@material-tailwind/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon, ChevronRightIcon, } from "@heroicons/react/24/outline";
import { Bars4Icon, GlobeAmericasIcon, NewspaperIcon, PhoneIcon, RectangleGroupIcon, SquaresPlusIcon, SunIcon, TagIcon, UserGroupIcon, } from "@heroicons/react/24/solid";
// Import Images
import logo from "media/images/logo.png";
import telephone from "media/icons/call.png";
import logoWhite from "media/images/logo-white.png";

// Path
const megaMenuItems = [
    {
        title: "2D Animation",
        icon: SquaresPlusIcon,
        href: "/2d-animation",
    },
    {
        title: "3D Animation",
        icon: UserGroupIcon,
        href: "/3d-animation",
    },
    {
        title: "Architectural Services",
        icon: Bars4Icon,
        href: "/architectural-services",
    },
    {
        title: "CGI & VFX",
        icon: SunIcon,
        href: "/cgi-and-vfx",
    },
    {
        title: "Hybrid & Cel Animations",
        icon: GlobeAmericasIcon,
        href: "/hybrid-&-cel-animations",
    },
    {
        title: "Infographics Design",
        icon: PhoneIcon,
        href: "/infographics-design",
    },
    {
        title: "Logo Animation",
        icon: NewspaperIcon,
        href: "/logo-animation",
    },
    {
        title: "Motion Graphics",
        icon: RectangleGroupIcon,
        href: "/motion-graphics",
    },
    {
        title: "Video Editing",
        icon: TagIcon,
        href: "/video-editing",
    },
    {
        title: "Whiteboard Animation",
        icon: UserGroupIcon,
        href: "/whiteboard-animation",
    },
];

function MegaMenu() {
    const router = usePathname();
    //path
    let color;
    switch (router) {
        case '/process':
            color = 'text-white'
            break;
        case '/3d-animation':
            color = 'text-white'
            break;
        default:
            break;
    }
    //
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = megaMenuItems.map(
        ({ icon, title, href }, key) => (
            <div key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg mb-1 lg:mb-0">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6 text-white",
                        })}
                    </div>
                    <div>
                        <Link
                            href={href}
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center font-sans text-[16px] font-normal text-white"
                        >
                            {title}
                        </Link>
                    </div>
                </MenuItem>
            </div>
        ),
    );
    // Mobile Mega Menu 
    const [megamenu, setMegaMenu] = React.useState(false);
    const handleMegaMenu = () => {
        setMegaMenu((prev) => !prev);
    }
    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Link href="#" variant="small" className="font-medium">
                        <span className={`flex items-center px-2 gap-2 py-2 font-sans text-[14px] xl:text-[16px] font-bold leading-[20px] xl:leading-[24px] text-black ${color}`}
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => {
                                if (window.innerWidth <= 991) {
                                    handleMegaMenu();
                                } else {
                                    setIsMobileMenuOpen((cur) => !cur)
                                }
                            }}
                        >
                            Services
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronRightIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 mt-1 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </span>
                    </Link>
                </MenuHandler>
                <MenuList className="bg-black hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className={megamenu ? `absolute left-[0%] top-0 pt-5 bg-black w-full h-full transition-all duration-300 ease-in-out` : `lg:hidden absolute left-[-130%] top-0 pt-5 bg-black w-full h-full transition-all duration-300 ease-in-out`}>
                <Collapse open={isMobileMenuOpen} className="h-full overflow-visible">{renderItems}</Collapse>
                <div className="absolute top-[10px] right-[10px] bg-white rounded-full p-1" onClick={() => handleMegaMenu()}>
                    <XMarkIcon
                        strokeWidth={2.5}
                        className={`block h-5 w-5 transition-transform text-black lg:hidden`}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    const router = usePathname();
    //path
    let color;
    switch (router) {
        case '/process':
            color = 'text-white'
            break;
        case '/3d-animation':
            color = 'text-white'
            break;
        default:
            break;
    }
    return (
        <List className="mt-4 lg:mt-0 mb-0 p-0 pb-4 lg:pb-0 lg:flex-row lg:p-1 gap-3 bg-white lg:bg-transparent border-b-2 border-[prime/100] lg:border-0">
            <Link
                href="/"
                variant="small"
                color="black"
                className="font-sans text-[14px] xl:text-[16px] font-bold"
            >
                <span className={`flex items-center gap-2 p-2 xl:px-4 py-2 text-black ${color}`}>Home</span>
            </Link>
            <Link
                href="/why-us"
                variant="small"
                color="black"
                className="font-sans text-[14px] xl:text-[16px] font-bold"
            >
                <span className={`flex items-center gap-2 p-2 xl:px-4 py-2 text-black ${color}`}>Why Us</span>
            </Link>
            <MegaMenu />
            <Link
                href="/portfolio"
                variant="small"
                color="black"
                className="font-sans text-[14px] xl:text-[16px] font-bold"
            >
                <span className={`flex items-center gap-2 p-2 xl:px-4 py-2 text-black ${color}`}>Portfolio</span>
            </Link>
            <Link
                href="/process"
                variant="small"
                color="black"
                className="font-sans text-[14px] xl:text-[16px] font-bold"
            >
                <span className={`flex items-center gap-2 p-2 xl:px-4 py-2 text-black ${color}`}>Process</span>
            </Link>
            <Link
                href="/pricing"
                variant="small"
                color="black"
                className="font-sans text-[14px] xl:text-[16px] font-bold"
            >
                <span className={`flex items-center gap-2 p-2 xl:px-4 py-2 text-black ${color}`}>Pricing</span>
            </Link>
            <Link
                href="/blog"
                variant="small"
                color="black"
                className="font-sans text-[14px] xl:text-[16px] font-bold"
            >
                <span className={`flex items-center gap-2 p-2 xl:px-4 py-2 text-black ${color}`}>Blog</span>
            </Link>
            <Link
                href="/contact-us"
                variant="small"
                color="black"
                className="font-sans text-[14px] xl:text-[16px] font-bold"
            >
                <span className={`flex items-center gap-2 p-2 xl:px-4 py-2 text-black ${color}`}>Contact Us</span>
            </Link>
        </List>
    );
}

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const [isFixed, setIsFixed] = useState(true);
    const router = usePathname();
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    //
    const { popup, togglePopup } = usePopup()
    const popupHandle = () => {
        togglePopup(popup)
    }

    const [headercolor, setHeadercolor] = useState("bg-transparent");
    const [headerPad, setHeaderPad] = useState("py-3");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollThreshold = 100; // Adjust this value according to your design
            if (currentScrollY > scrollThreshold) {
                setHeadercolor("bg-white shadow-xl");
                setHeaderPad("py-3");
            } else {
                setHeadercolor("bg-transparent");
                setHeaderPad("py-3");
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fixedClass = isFixed ? `fixed top-0 lg:absolute top-0 lg:left-0 lg:bg-transparent ${headerPad}` : 'top-[20px]';
    return (
        <header className={`w-full z-[999] rounded-none ${headercolor} ${fixedClass}`}>
            <div className="container">
                <Navbar className="max-w-none shadow-none px-0 py-2 rounded-none bg-transparent border-none">
                    <div className="flex items-center justify-between text-black relative gap-x-4">
                        <Link
                            href="/"
                            variant="h6"
                            className="mr-4 cursor-pointer py-1.5 lg:ml-2 w-[455px] lg:w-[315px]"
                        >
                            <Image src={router === "/process" || router === "/3d-animation" ? logoWhite : logo} className="w-[85%] md:w-[28%] lg:w-[50%]" alt="Infinity Animation Pro" />
                        </Link>
                        <div className="hidden lg:flex gap-5">
                            <NavList />
                            <CTA
                                text="Get Started"
                                icon="/icons/arrow-red.png"
                                iconCss="flex items-center justify-center w-[25px] h-[25px] xl:w-[30px] xl:h-[30px] bg-white rounded-full p-2 ms-2"
                                bg="bg-prime"
                                color={`text-white`}
                                border={`border-0`}
                                hover="hover:bg-transparent"
                            />
                        </div>
                        <ul className="lg:hidden block w-[550px] md:w-auto">
                            <li>
                                <Link href="javascript:;" className='flex items-center justify-end gap-x-3 text-black font-sans'>
                                    <Image src={telephone} loading="lazy" width="56" height="52" className="w-[15px] invert" alt='Infinity Animations Pro' />
                                    833-666-6689
                                </Link>
                            </li>
                        </ul>
                        <button onClick={() => setOpenNav(!openNav)} className="block lg:hidden">
                            {openNav ? (
                                <XMarkIcon className={`h-[40px] w-[40px]`} strokeWidth={2} />
                            ) : (
                                <Bars3Icon className={`h-[40px] w-[40px]`} strokeWidth={2} />
                            )}
                        </button>
                    </div>
                    {openNav && (
                        <Collapse open={openNav} className="block lg:hidden">
                            <NavList />
                        </Collapse>
                    )}
                </Navbar>
            </div>
        </header>
    );
}
export default Header;