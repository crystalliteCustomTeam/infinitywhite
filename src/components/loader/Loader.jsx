import React from "react";
import Image from "next/image"
// Import Image
import logo from "media/images/logo.gif";

const Loader = () => {
    return (
        <>
            <section className={`fixed left-0 top-0 w-[100%] h-[100vh]  z-50 flex flex-col items-center justify-center bg-whit`}>
                <Image src={logo} alt="Infinity Animations Pro" className="w-[50%] md:w-[15%]" />
            </section>
        </>
    )
}

export default Loader



