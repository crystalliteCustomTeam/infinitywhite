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
  title: "The Entrancing Portal of Animation | Infinity Animations Pro",
  description: "Infinity Animations, prioritizing art, illuminates the dark and mundane world of animation, offering affordable services through their certified animators.",
  //===== Canonical =====
  alternates: { canonical: 'https://infinityanimationspro.com/' },
  //===== OG Metas =====
  openGraph: {
    title: "The Entrancing Portal of Animation | Infinity Animations Pro",
    description: "Infinity Animations, prioritizing art, illuminates the dark and mundane world of animation, offering affordable services through their certified animators.",
    url: 'https://infinityanimationspro.com/',
    siteName: 'Infinity Animations Pro',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Scripts />
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4FDDD"
        height="0" width="0" className="hidden invisible"></iframe></noscript>
      <meta name="google-site-verification" content="d5owAQgsJaAq09XbhF1KEVhKTvnfdvbTZ6-n6dlgHqg" />
      <body className={`${primary.variable}`}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}