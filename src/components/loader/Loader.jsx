import React from "react";
import Image from "next/image"
// Import Image
import logo from "media/images/loader-logo.webp";
// Import Css
import styles from "./Loader.module.css"

const Loader = () => {
    return (
        <>
            <section className={`${styles.loader} fixed left-0 top-0 w-[100%] h-[100vh]  z-50 flex flex-col items-center justify-center bg-whit`}>
                <Image src={logo} priority className="w-[12%]" alt="Infinity Animation" />
                <p className="pt-5"></p>
            </section>
        </>
    )
}

export default Loader



