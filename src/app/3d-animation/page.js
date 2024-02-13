// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import Portfolio from '@/components/portfolio/Portfolio';
import Boost from '@/components/boost/Boost';
import Servicesconcept from '@/components/servicesconcept/Servicesconcept';
import Pricing from "@/components/pricing/Pricing";
import Want from '@/components/want/Want';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
// Import Images
import LookingFlodImg from "media/3d-animation/looking-img.png";
//==== Portfolio Images
import polio1 from "media/home/portfolio1.png"
import polio2 from "media/home/portfolio2.png"
import polio3 from "media/home/portfolio3.png"
import polio4 from "media/home/portfolio4.png"
//==== Boost Images
import BoostFlodImg from "media/images/boost-img.png";
import boosticon1 from "media/icons/boost-icon4.png"
import boosticon2 from "media/icons/boost-icon5.png"
import boosticon3 from "media/icons/boost-icon6.png"
// ==== Service Concept Images
import ServiceConcept from 'media/images/concept-img.png'
import ConceptParticle from "media/images/concept-bef.png"
import FoldBg from 'media/images/fold-bg.png'
import conceptIcon1 from "media/icons/concept-icon1.png"
import conceptIcon2 from "media/icons/concept-icon2.png"
import conceptIcon3 from "media/icons/concept-icon3.png"
import conceptIcon4 from "media/icons/concept-icon4.png"
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"
import Link from "next/link";

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> 3D <span className='text-primary-100'>Animation</span><br /> Services </>),
        para: "Three Dimensions Are Always Better Than One!",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "3D animation emerges as a dazzling frontier, a synthesis of technology and creativity that transcends the flat confines of the traditional canvas. It's a world where the boundaries between the real and the imagined blur, where artists wield their digital tools like modern alchemists, transforming the intangible into tangible wonders. ",

        "With each frame, they sculpt motion, breathe life into pixels, and orchestrate a symphony of light, shadow, and color that dances across the screen. This art form is not merely an evolution; it's a revolution in storytelling, a bridge to worlds unbounded by the laws of physics. Through 3D animation, narratives take flight, characters pulse with the beat of human emotion, and audiences are transported into worlds beyond their wildest dreams.",

        // (<><Link href="#" className='text-primary-100 underline'>SPEAK TO AN EXPERT</Link> At The 3D Animation Agency To Determine How We Can Aid Your Business’s Marketing Strategy.</>)
    ];
    const looking = {
        title: (<> 3D Animation </>),
        para: { paraArray },
        isCTA: true,
        flodImg: LookingFlodImg
    };
    //=====Portfilio Fold=====//
    const tabInfo = [
        { label: "2D Animation", index: 0 },
        { label: "3D Animation", index: 1 },
        { label: "Whiteboard", index: 2 },
        { label: "Explainer Videos", index: 3 },
        { label: "Typographic", index: 4 },
    ];
    const tabContents = [
        [polio1, [polio2, polio3], polio4],
        [polio4, [polio2, polio3], polio1],
        [polio1, [polio2, polio3], polio4],
        [polio4, [polio2, polio3], polio1],
        [polio1, [polio2, polio3], polio4],
    ];
    const portfolio = {
        title: (<> Our Exceptional Portfolio for Video Animation </>),
        para: (<> A visual journey through a kaleidoscope of creativity, where each project tells a unique story of brand elevation and visual excellence. </>),
        tabContents: tabContents,
        tabInfo: tabInfo
    };
    //=====Boost Fold=====//
    const boostContent = [
        {
            icon: boosticon1,
            heading: "The Center of Attention",
            text: "3D animation is not just creative, it is a potion that triumphs over anything and everything artistic",
        },
        {
            icon: boosticon2,
            heading: "Attention Grabbing Potency",
            text: "Our 3D animations will keep your audiences glued to the screen. The mesmeric effect will have them wanting more.",
        },
        {
            icon: boosticon3,
            heading: "Clicks and More Clicks",
            text: "Clicks and more clicks determine user interaction which later transforms into leads, leading to maximum profitability. ",
        },
    ];
    const boost = {
        title: (<> Our Vault of Creative Animation Ventures </>),
        para: (<> Unlock the door to our vault of creative animation ventures, where imagination thrives and stories come to life in mesmeric motion. </>),
        btnBg: "bg-prime",
        boostContent: boostContent,
        flodImg: BoostFlodImg
    };
    //=====Service Concept Fold=====//
    const conceptContent = [
        {
            ImageOne: conceptIcon1,
            sliderNumber: 1,
            slideTitle: "Concept",
            sliderDesc: "We hear your concept(s) and try to determine what corresponds best with your idea. Once we have that sorted, we proceed to the next step which is storyboarding. "
        },
        {
            ImageOne: conceptIcon2,
            sliderNumber: 2,
            slideTitle: "Storyboarding",
            sliderDesc: "Once the concept is finalized, we map out a storyboard which is a rough outline of what your concept will look like once transformed into visuals."
        },
        {
            ImageOne: conceptIcon3,
            sliderNumber: 3,
            slideTitle: "Creation",
            sliderDesc: "A green signal from your end allows our certified animators to commence their artistic pursuits. Your concept here is basically under construction."
        },
        {
            ImageOne: conceptIcon4,
            sliderNumber: 4,
            slideTitle: "Delivery",
            sliderDesc: "Your time is valuable to us. Hence, we always try to deliver your project on the given deadline because we don’t want to keep you waiting."
        },
    ]
    const concept = {
        title: "Our Process of Animation",
        para: "Our priority is to retain your concept, but we expect you to allow us to contribute our artistic input; only then can we truly harmonize ideas with art.",
        conceptContent: conceptContent,
        Servicesconcept: ServiceConcept,
        ConceptParticle: ConceptParticle,
        foldBg: FoldBg,
        btnBg: "bg-prime",
    };
    //=====Pricing Fold=====//
    const pricing = {
        title: (<> Our Plans </>),
        para: (<> We have something in store for everyone, and that something is affordable services </>),
    };
    //=====Want Fold=====//
    const want = {
        title: (<>Have You <br /> Decided?</>),
        wantDesc: "If you think you know what you want, call us now!",
        bgPrime: true,
    }
    //=====Testimonial Fold=====//
    const testiContent = [
        {
            profile: icon1,
            stars: icon2,
            name: 'Vanessa Carpenter',
            message: 'Infinity Animations turned our ideas into pure magic! Their creativity knows no bounds, and the results totally blew us away!',
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Bradley Lynch',
            message: 'Working with Infinity Animations was a pleasure. Their team is not only professional but also incredibly talented. The animations they created for our brand added that extra spark we were looking for.',
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Sophia Zimmerman',
            message: "I can't express how impressed we were with Infinity Animations. They took our complex data and turned it into beautiful, engaging infographics. Their attention to detail and commitment to our project were truly outstanding.",
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Tara Figueroa',
            message: "Infinity Animations made our logo come alive in a way we couldn't have imagined. It added a dynamic touch to our branding that we love.",
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Priscilla Pearson',
            message: "The architectural visualizations crafted by Infinity Animations are simply breathtaking. They have a unique talent for bringing architectural concepts to life, and we couldn't be happier.",
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Randolph Simpson',
            message: "Infinity Animations worked wonders with CGI-VFX for our product. Their work took our marketing efforts to a whole new level and made us stand out in the market..",
            company: 'ABC company',
        },
    ];
    const testimonial = {
        title: (<> Let’s Read What Our Clients Have to Say </>),
        para: (<> If you can’t trust us, try trusting them. </>),
        btnBg: "bg-prime",
        testiContent: testiContent
    };

    return (
        <>
            <Hero content={hero} />
            <Review />
            <Looking content={looking} />
            <Portfolio content={portfolio} />
            <Boost content={boost} />
            <Servicesconcept content={concept} />
            <Pricing content={pricing} />
            <Want content={want} />
            <Testimonial content={testimonial} />
            <Contact />
        </>
    )
}