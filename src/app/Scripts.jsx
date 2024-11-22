"use client"
import { useEffect } from "react"

const Scripts = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      //======== Lucky Oragne ========//
      const luckyOrange = document.createElement("script")
      luckyOrange.id = "luckyOrange"
      luckyOrange.src =
        "https://tools.luckyorange.com/core/lo.js?site-id=1cfb1cde"
      luckyOrange.async = true
      luckyOrange.defer = true
      document.body.appendChild(luckyOrange)
      //======== zenDesk ========//
      // const zenDesk = document.createElement("script");
      // zenDesk.id = "ze-snippet";
      // zenDesk.src = "https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af";
      // zenDesk.async = true;
      // zenDesk.defer = true;
      // document.body.appendChild(zenDesk);
      // ======= Live Chat ======= //
      const liveChatScript = document.createElement("script")
      liveChatScript.async = true
      liveChatScript.type = "text/javascript"
      liveChatScript.src = "https://cdn.livechatinc.com/tracking.js"

      const liveChatConfig = {
        license: 18818250,
        integration_name: "manual_channels",
        product_name: "livechat",
      }

      window._lc = window._lc || {}
      window.__lc = window.__lc || liveChatConfig
      ;(function (n, t, c) {
        function i(n) {
          return e.h ? e._h.apply(null, n) : e._q.push(n)
        }
        let e = {
          _q: [],
          _h: null,
          _v: "2.0",
          on: function () {
            i(["on", c.call(arguments)])
          },
          once: function () {
            i(["once", c.call(arguments)])
          },
          off: function () {
            i(["off", c.call(arguments)])
          },
          get: function () {
            if (!e._h)
              throw new Error(
                "[LiveChatWidget] You can't use getters before load."
              )
            return i(["get", c.call(arguments)])
          },
          call: function () {
            i(["call", c.call(arguments)])
          },
          init: function () {
            t.head.appendChild(liveChatScript)
          },
        }

        !n._lc.asyncInit && e.init()
        n.LiveChatWidget = n.LiveChatWidget || e
      })(window, document, [].slice)

      //======== GATG ========//
      const gtmScript = document.createElement("script")
      gtmScript.id = "google-tag-manager"
      gtmScript.src =
        "https://www.googletagmanager.com/gtag/js?id=AW-10860906782"
      gtmScript.async = true
      gtmScript.defer = true
      document.head.appendChild(gtmScript)
      //======== Google Tag Manager Config ========//
      const gtmConfigScript = document.createElement("script")
      gtmConfigScript.id = "google-tag-manager-config"
      gtmConfigScript.text = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-10860906782');
            `
      document.head.appendChild(gtmConfigScript)
      //======== GTM ========//
      const googleTagManager = document.createElement("script")
      googleTagManager.id = "google-tag-manager-GTM"
      googleTagManager.text = `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f)
                })(window,document,'script','dataLayer','GTM-N6R4FDDD');
            `
      document.head.appendChild(googleTagManager)
      //======== Google Analytics ========//
      const googleAnalytics = document.createElement("script")
      googleAnalytics.id = "google-analytics"
      googleAnalytics.src =
        "https://www.googletagmanager.com/gtag/js?id=G-HEKLBHM9ZJ"
      googleAnalytics.async = true
      googleAnalytics.defer = true
      document.head.appendChild(googleAnalytics)
      //======== Google Analytics Config ========//
      const googleAnalyticsConfig = document.createElement("script")
      googleAnalyticsConfig.id = "google-analytics-config"
      googleAnalyticsConfig.text = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-HEKLBHM9ZJ');
            `
      document.head.appendChild(googleAnalyticsConfig)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target
      if (target.href === "javascript:$zopim.livechat.window.show();") {
        event.preventDefault() // Default action se roknay kay liye
        // Wait for the LiveChat API to be available
        if (window.LC_API) {
          window.LC_API.open_chat_window()
        } else {
          console.error("LiveChat API is not ready yet.")
        }
        return false
      }
    }
    // Event listener add karen
    document.addEventListener("click", handleClick)
    // Cleanup function
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}

export default Scripts
