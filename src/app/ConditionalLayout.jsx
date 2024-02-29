"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { PopupProvider } from "./configs/store/Popup"
// Import Components
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Loader from "@/components/loader/Loader"
import blockCountries from "./middleware/blockCountries"

const ConditionalLayout = ({ children }) => {
    //=============== GeoLocation ===============//
    useEffect(() => {
        const handleRouteChange = (url) => {
            blockCountries();
        };
        blockCountries();
        window.addEventListener('popstate', handleRouteChange);
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    //=============== Loader ===============//
    const [imagesLoaded, setImagesLoaded] = useState(false);
    useEffect(() => {
        const delay = 1000;
        const timeoutId = setTimeout(() => {
            setImagesLoaded(true);
        }, delay);
        return () => clearTimeout(timeoutId);
    }, []);

    //=============== Popup ===============//
    const pathname = usePathname();
    const [popup, setPopup] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setPopup(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    const togglePopup = (e) => {
        setPopup(!e)
    }
    return (
        <PopupProvider value={{ popup, togglePopup }}>
            {imagesLoaded ?
                <>
                    {pathname !== "/video-explainer-lp" &&
                        pathname !== "/video-explainer-lp2" &&
                        pathname !== "/video-explainer-lp-new" &&
                        pathname !== "/explainer-videos-animations" && (
                            <Header />
                        )}
                    {children}
                    {pathname !== "/video-explainer-lp" &&
                        pathname !== "/video-explainer-lp2" &&
                        pathname !== "/video-explainer-lp-new" &&
                        pathname !== "/explainer-videos-animations" && (
                            <Footer />
                        )}
                </>
                : <Loader />
            }
        </PopupProvider>
    )
}

export default ConditionalLayout