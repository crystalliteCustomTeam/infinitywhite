// Import Fonts
import { primary } from "./configs/fonts";
import Script from 'next/script'
// Import Components
import ConditionalLayout from "./ConditionalLayout";
// Import Css
import "./global.css";
// Meta Data
export const metadata = {
  // Title & Descriptions
  title: "The Entrancing Portal of Animation | Infinity Animations",
  description: "Infinity Animations, prioritizing art, illuminates the dark and mundane world of animation, offering affordable services through their certified animators.",
  // Canonical
  alternates: { canonical: 'https://infinityanimationspro.com/' },
  // OG Metas
  openGraph: {
    title: "The Entrancing Portal of Animation | Infinity Animations",
    description: "Infinity Animations, prioritizing art, illuminates the dark and mundane world of animation, offering affordable services through their certified animators.",
    url: 'https://infinityanimationspro.com/',
    siteName: 'Infinity Animation',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex "></meta>
      <body className={`${primary.variable}`}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
      <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af" />
    </html>
  );
}