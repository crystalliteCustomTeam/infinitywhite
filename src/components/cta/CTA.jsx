"use client"
// Import Components
import Image from "next/image";
// Import Images
import getIcon from "media/icons/arrow-red.png";
import liveChatIcon from "media/icons/chat.png";

const CTA = ({ text, icon1, icon2, bg, color, border, hover, href, }) => {
    return (
        <>
            <a className={`py-2 px-3 2xl:px-6 rounded-md text-[18px] font-normal font-sans flex flex-row items-center justify-between"} ${color} ${bg} ${hover} ${border}`} href={href}>
                <span className="text-[16px] md:text-[18px] font-normal">{text}</span>
                {icon1 ? <div className="flex items-center justify-center w-[30px] h-[30px] bg-white rounded-full ms-5"><Image src={getIcon} className="w-[40%]" alt="Infinity Animation" /></div> : null}
                {icon2 ? <Image className="w-[40px] ms-3 md:ms-5" src={liveChatIcon} alt="Infinity Animation" /> : null}
            </a>
        </>
    );
}

export default CTA

