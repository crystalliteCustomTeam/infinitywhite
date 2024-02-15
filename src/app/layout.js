//===== Import Fonts =====
import { primary } from "./configs/fonts";
//===== Import Components =====
import Scripts from "./Scripts";
import ConditionalLayout from "./ConditionalLayout";
//===== Import Css =====
import "./global.css";
//===== Meta Data =====
export const metadata = {
  //===== Title & Descriptions =====
  title: "The Entrancing Portal of Animation | Infinity Animations",
  description: "Infinity Animations, prioritizing art, illuminates the dark and mundane world of animation, offering affordable services through their certified animators.",
  //===== Canonical =====
  alternates: { canonical: 'https://infinityanimationspro.com/' },
  //===== OG Metas =====
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
      <Scripts />
      <meta name="robots" content="noindex "></meta>
      <body className={`${primary.variable}`}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}