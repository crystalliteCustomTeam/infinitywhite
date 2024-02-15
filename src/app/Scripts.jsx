"use client"
import { useEffect } from 'react'

const Scripts = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            const script = document.createElement("script");
            script.id = "ze-snippet";
            script.src = "https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);

            const gtmScript = document.createElement("script");
            gtmScript.id = "google-tag-manager";
            gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-10860906782";
            gtmScript.async = true;
            gtmScript.defer = true;
            document.head.appendChild(gtmScript);

            const gtmConfigScript = document.createElement("script");
            gtmConfigScript.id = "google-tag-manager-one";
            gtmConfigScript.text = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-10860906782');
            `;
            document.head.appendChild(gtmConfigScript);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return null;
}

export default Scripts
