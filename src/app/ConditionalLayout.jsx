"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { PopupProvider } from "./configs/store/Popup"
//
import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Loader from "@/components/loader/Loader"
import Axios from "axios"

const ConditionalLayout = ({ children }) => {
    const [country, setCountry] = useState(false);
    const getIPData = async () => {
        const res = await Axios.get(
            "https://api.ip2location.io/?key=F9B01293761EF666EB54678698AC8682"
        );
        setCountry(res.country_code)
    };
    useEffect(() => {
        getIPData()
        // Redirect logic based on country
        if (country === 'IN' || country === 'PK' || country === 'BD') {
          // Redirect to a specific page for these countries
          window.location.href = 'https://jumpto1.com';
        }
      }, [country]);
    // Loader
    const [imagesLoaded, setImagesLoaded] = useState(false);
    useEffect(() => {
        const delay = 7000;
        const timeoutId = setTimeout(() => {
            setImagesLoaded(true);
        }, delay);
        return () => clearTimeout(timeoutId);
    }, []);
    // Popup
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