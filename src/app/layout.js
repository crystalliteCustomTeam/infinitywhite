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
  title: "The Entrancing Portal of Animation | Animation Studios",
  description: "Animation Studioss, prioritizing art, illuminates the dark and mundane world of animation, offering affordable services through their certified animators.",
  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": ['d5owAQgsJaAq09XbhF1KEVhKTvnfdvbTZ6-n6dlgHqg'],
    },
  },
  //===== Canonical =====
  alternates: { canonical: 'https://infinityanimationspro.com/' },
  //===== OG Tags =====
  openGraph: {
    title: "The Entrancing Portal of Animation | Animation Studios",
    description: "Animation Studioss, prioritizing art, illuminates the dark and mundane world of animation, offering affordable services through their certified animators.",
    url: 'https://infinityanimationspro.com/',
    siteName: 'Animation Studios',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Scripts />
      <body className={`${primary.variable}`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4FDDD"
          height="0" width="0" className="hidden invisible"></iframe></noscript>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}