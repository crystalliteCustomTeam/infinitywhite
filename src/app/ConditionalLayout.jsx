"use client"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { PopupProvider } from "./configs/store/Popup"
//
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"

const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();
    const [popup, setPopup] = useState(true)
    const togglePopup = (e) => {
        setPopup(!e)
    }
    return (
        <PopupProvider value={{ popup, togglePopup }}>
            {pathname !== '/video-explainer-lp' && <Header />}
            {children}
            {pathname !== '/video-explainer-lp' && <Footer />}
        </PopupProvider>
    )
}

export default ConditionalLayout