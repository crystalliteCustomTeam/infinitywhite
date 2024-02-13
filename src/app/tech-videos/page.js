// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import Product from "@/components/product/Product";
import Company from '@/components/company/Company';
import Portfolio from '@/components/portfolio/Portfolio';
import Pricing from "@/components/pricing/Pricing";
import Want from '@/components/want/Want';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
// Import Images
import LookingFlodImg from "media/tech-videos/looking-img.png";
import ProductImg from "media/tech-videos/product-img.png";
//==== Portfolio Images
import polio1 from "media/home/portfolio1.png"
import polio2 from "media/home/portfolio2.png"
import polio3 from "media/home/portfolio3.png"
import polio4 from "media/home/portfolio4.png"
//==== Boost Images
import BoostFlodImg from "media/images/boost-img.png";
//===== Tech Type Images
import TechImage1 from "media/tech-type/techtype1.png"
import TechImage2 from "media/tech-type/techtype2.png"
import TechImage3 from "media/tech-type/techtype3.png"
//===== Case Studies Images 
import Slide1 from "media/case-studies/slide1.png"
import Slide2 from "media/case-studies/slide2.png"
import Slide3 from "media/case-studies/slide3.png"
import Slide4 from "media/case-studies/slide4.png"
import Slide5 from "media/case-studies/slide5.png"
// ==== Service Concept Images 
import FoldBg from 'media/images/fold-bg.png'
import conceptIcon1 from "media/icons/bizz1.png"
import conceptIcon2 from "media/icons/bizz2.png"
import conceptIcon3 from "media/icons/bizz3.png"
import conceptIcon4 from "media/icons/bizz4.png"
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"
import checkIcon from 'media/icons/check-img.png'
import BuzzFlick from "@/components/buzzflick/Buzzflick";
import Tech from "@/components/tech-type/Tech";
import Case from "@/components/caseStudies/Case";


export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> We Create Your
            Noise Through Tech
            Video<span className='text-primary-100'> Production</span> </>),
        para: "",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "The video content for complicated and complex tech products is always not what you expect. Why not opt for the best-performing videos to make some 'Buzz'? We are here to help you to create disruption in the technology industry. From conception to scripting and from storyboarding to production we deliver your message clearly through our superhero video content. Choose from any different video type we offer to benefit yourself with all facets of SaaS and tech marketing and sales.",
    ];
    const looking = {
        title: (<> We Simplify Your Product Through Our Tech Video Production </>),
        para: { paraArray },
        isCTA: false,
        flodImg: LookingFlodImg
    };
    //=====Product=====//
    const productArray = [
        "We know how hard it is to distill tech and SaaS products spell-binding SaaS videos. With our incredible video production, you can integrate animations, typography, screen recordings, voice-over, and data visualization to simplify software and tech explanation.",
    ];
    const product = {
        title: (<> We Show Your Tech Product In Action </>),
        para: { productArray },
        flodImg: ProductImg
    };
    //=====Company=====//
    const componyArray = [
        "Videos are important for tech companies to establish their voice and increase their brand identity. Especially, corporate video production is especially are being used by lots of technology companies for informational and entertainment purposes. Even videos are best when it simply comes to a product demonstration.",
    ];
    const listArray = [
        "Statista states that video content has a market penetration of 83.8% in the United States alone.",
        "According to Wyzowl video marketing statistics 91% of businesses use video as a marketing tool in 2023.",
        "According to HubSpot marketing stats, 87% of video marketers experienced an increase in website traffic through videos.",
    ]
    const companies = {
        title: (<> Why Videos Are Important For Tech Companies? </>),
        para: { componyArray },
        subtitle: "According to some stats:",
        subPara: "These stats and facts show that videos are of utmost importance for any business to include in their online marketing strategy and tech companies are no exception.",
        flodImg: BoostFlodImg,
        list: { listArray },
        checkImg: checkIcon,
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
        title: (<> Our Portfolio </>),
        para: (<> Explore Our Captivating Creations </>),
        tabContents: tabContents,
        tabInfo: tabInfo
    };
    //===== buzzflick Fold=====//
    const buzzflickContent = [
        {
            ImageOne: conceptIcon1,
            sliderNumber: 1,
            slideTitle: "Our Videos Are Engaging",
            paraOne: "Covering technology-based content in videos is not easy. You have to be creative, thoughtful, and less complicated to convey the information effectively. That is why BuzzFlick makes sure the tech video production involves all the creative elements to make the videos more engaging for the viewer. ",
            paraTwo: "Not only does it compellingly present tech product or information, but also keep audiences hooked to the chair till the end of the video. A win-win situation. Our team of communicators is best at storytelling through videos. And hence, people like a good story, we have to be better at it to make your videos well-received.",
        },
        {
            ImageOne: conceptIcon2,
            sliderNumber: 2,
            slideTitle: "Our Videos Create an Emotional Connection",
            paraOne: "Written words can’t connect with people on the level that videos carry with them. According to MarTech Series, the study conducted by Motista states that the success key for any brand is the emotional connection. The report revealed that emotionally connected customers of brands have a higher lifetime value by 306% than merely satisfied customers. ",
            paraTwo: "And what’s better than BuzzFlick’s technology video production to connect with customers and prospect buyers emotionally? Our videos are far more effective than a text-based piece of content. Using video instead of other content types significantly increases the likelihood of establishing an emotional connection with your audience.",
        },
        {
            ImageOne: conceptIcon3,
            sliderNumber: 3,
            slideTitle: "Our Videos Educate Your Audience",
            paraOne: "According to Think With Google:",
            paraTwo: "86% of U.S. viewers use YouTube often to learn new things.",
            paraThree: "Similarly, a study conducted by Google states that:",
            paraFour: "58% of people learn new skills through digital videos",
            paraFive: "People process visual information more rapidly than text. That is why educational videos are great for educating your audience and making tech information more memorable.",
            paraSix: "We put tech information in our videos in a digestible educational format so that people are likely to understand tech products easily and efficiently. Not only our videos are helpful for your customer, but also you can get training videos for your employees to make them understand how a software and tech product works to demonstrate them to others flawlessly.",
        },
        {
            ImageOne: conceptIcon4,
            sliderNumber: 4,
            slideTitle: "Our Videos Are Exceptional",
            paraOne: "With videos all over the internet, BuzzFlick strives to be exceptionally unique and stand out. We have taken tech video production to the next level by hiring a team full of design, animation, and tech enthusiasts to deliver you the exceptional content you were looking for.",
            paraTwo: "With creativity, excellence, aesthetics, and a unique storytelling approach, we are making tech video content digestible, easy to understand, and flawless. Now give your tech products the creative edge they need through our tech-based videos and elevate your brand identity like never before.",
        },
    ]
    const buzzflick = {
        title: "The Four E’s of BuzzFlick For Tech Video Production",
        para: "BuzzFlick is not just another video production company that throws content on the go. Our tech video production is a wholesome process that explains your brand as well as captures your audiences through the four E's.",
        conceptContent: buzzflickContent,
        foldBg: FoldBg,
        btnBg: "bg-prime",
    };
    //======Tech Type Fold======//
    const techCard = [
        {
            CardOne: TechImage1,
            CardTitle: "Explainer And Education Videos",
            CardPara: "Explainer and educational videos are mostly used by technology companies with animations to deliver a complicated message simply and digestibly. You can go through our portfolio of animated explainer and educational videos to see how brilliantly we have executed the concepts for our clients."
        },
        {
            CardOne: TechImage2,
            CardTitle: "Training, Learning And Development Videos",
            CardPara: "Tech companies use training, learning, and development videos for employees to explain to them about the new product launch, a technical subject course, or even organization ethics. We understand how important these kinds of videos are and we capture the true essence of your organization in our videos to train your employees well."
        },
        {
            CardOne: TechImage3,
            CardTitle: "Product Demonstration Videos",
            CardPara: "Tech product demonstration is the best Video marketing strategy for technology companies and we are helping many of them in the best way possible. Through more visuals and easy-to-understand narratives, we are presenting these intangible products more realistically. These videos are equally best for brand and product promotion."
        },
    ]

    const techType = {
        title: "What Type Of Tech Videos We Make?",
        card: techCard,
    }
    //=====CaseStudies Fold=====//
    const sliderImage = [
        {
            sliderImage: Slide1,
        },
        {
            sliderImage: Slide2,
        },
        {
            sliderImage: Slide3,
        },
        {
            sliderImage: Slide4,
        },
        {
            sliderImage: Slide5,
        }
    ]

    const caseStudies = {
        title: "Case Studies",
        sliderImages: sliderImage,
    }

    //=====Pricing Fold=====//
    const pricing = {
        title: (<> Pricing Plans </>),
        para: (<> Easy on the pocket and the eyes. </>),
    };
    //=====Want Fold=====//
    const want = {
        title: "Want to Talk ?",
        wantDesc: "Have questions? We have answers, Call Now!",
        bgPrime: true,
    }
    //=====Testimonial Fold=====//
    const testiContent = [
        {
            profile: icon1,
            stars: icon2,
            name: 'Emma Thompson, Marketing Manager',
            message: 'Mind-blowing creativity! The 2D animation for our product launch was a game-changer. Our audience loved the visual storytelling, and it translated into tangible engagement and sales. Kudos! ',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Samuel Rodriguez, CEO',
            message: 'Working with this team was a breeze! They took our concepts and turned them into visually stunning 2D animations. Our brand message was conveyed with charm and simplicity, captivating our audience.',
            company: 'ABC company',
        },
        {
            profile: icon1,
            stars: icon2,
            name: 'Megan Harper, Creative Director',
            message: "Incredible attention to detail! The 2D animation service brought our brand's story to life in ways we hadn't imagined. The creativity and precision in each frame left us thoroughly impressed.",
            company: 'ABC company',
        },
    ];
    const testimonial = {
        title: (<> An Who’s Who of Industry Leading Clients </>),
        para: (<> Achieved 1000+ Impactful Results That Speak Volumes </>),
        btnBg: "bg-prime",
        testiContent: testiContent
    };

    return (
        <>
            <Hero content={hero} />
            <Review />
            <Looking content={looking} />
            <Product content={product} />
            <Company content={companies} />
            <Portfolio content={portfolio} />
            <BuzzFlick content={buzzflick} />
            <Tech content={techType} />
            <Case content={caseStudies} />
            <Pricing content={pricing} />
            <Want content={want} />
            <Testimonial content={testimonial} />
            <Contact />
        </>
    )
}