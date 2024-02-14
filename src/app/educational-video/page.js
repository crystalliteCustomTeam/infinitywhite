// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import Product from "@/components/product/Product";
import Company from '@/components/company/Company';
import Portfolio from '@/components/portfolio/Portfolio';
import BuzzFlick from "@/components/buzzflick/Buzzflick";
import Production from "@/components/productionprocess/Production";
import Testimonial from '@/components/testimonial/Testimonial';
import Faqs from "@/components/faqs/Faqs";
import Contact from '@/components/contact/Contact';
// Import Images
import LookingFlodImg from "media/educational-video/looking-img.png";
import ProductImg from "media/educational-video/product-img.png";
//==== Boost Images
import BoostFlodImg from "media/educational-video/boost-img.png";
// ==== Service Concept Images 
import FoldBg from 'media/images/fold-bg.png'
import conceptIcon1 from "media/icons/bizz1.png"
import conceptIcon2 from "media/icons/bizz2.png"
import conceptIcon3 from "media/icons/bizz3.png"
import conceptIcon4 from "media/icons/bizz4.png"
import conceptIcon5 from "media/icons/bizz5.png"
import conceptIcon6 from "media/icons/bizz6.png"
import conceptIcon7 from "media/icons/bizz7.png"
import conceptIcon8 from "media/icons/bizz8.png"
import conceptIcon9 from "media/icons/bizz9.png"
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"
import checkIcon from 'media/icons/check-img.png'


export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<><span className='text-primary-100'>Educational </span>Video Production Company </>),
        para: "Now revolutionize learning with our education video production services like never before.",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "BuzzFlick knows how to convert boring educational material into engaging educational videos by streamlining the concepts and personifying them through educational videos.",

        "Neither kids nor professionals like boring lectures filled with jargon. So, why not opt for education video production to teach someone something? Whether you want it for students or C-level executives, we are perfect for the job as we create the best educational videos in the USA for you.",
    ];
    const looking = {
        title: (<> Your Partner for <br /> Educational Video<br /> Production in the USA </>),
        para: { paraArray },
        isCTA: false,
        isBtns: true,
        flodImg: LookingFlodImg
    };
    //=====Product=====//
    const productArray = [
        "When a person or, a character (in case of an animated video), presents an audience a valuable informational and educational content directly. You can also categorize in-person recorded video training as an educational content.",

        "That is why educational video production is valuable, instructive, and shareable way to help you and your firm become an authority or thought leader in your industry.",

        "BuzzFlick provides educational video marketing through short TikTok videos, a series of quick how-to guides, tutorials, and even complicated full-scale corporate training videos.",
    ];
    const product = {
        title: (<> What is Educational Video Content? </>),
        para: { productArray },
        flodImg: ProductImg,
        css: "w-auto"
    };
    //=====Company=====//
    const componyArray = [
        "Overall, educational video should be brief and targeted on learning. The use of audio/ visual elements should be appropriate for explanation and complement each other.",

        "Highlight key ideas or concepts through signaling. Video’s voice over should be conversational, and enthusiastic to enhance user engagement.",
    ];
    const listArray = [
        "",
        "",
        "",
    ]
    const companies = {
        title: (<> Characteristics of a <br />
            Good Educational Video </>),
        para: { componyArray },
        subtitle: "",
        subPara: "",
        flodImg: BoostFlodImg,
        list: { listArray },
        btn: true,
        lists: false,
        checkImg: checkIcon,
        css: ""
    };
    //=====Portolio Fold=====//
    const tabInfo = [
        { label: "2D Animation", index: 0 },
        { label: "3D Animation", index: 1 },
        { label: "Whiteboard", index: 2 },
        { label: "Explainer Videos", index: 3 },
        { label: "Typographic", index: 4 },
    ];
const tabContents = [
        [
            "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9",
            "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
            "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
            "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
            "https://player.vimeo.com/progressive_redirect/playback/907829180/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
            "https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
        ],
        [
            "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
            "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
            "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
            "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
            "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
            "https://player.vimeo.com/progressive_redirect/playback/907827073/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
        ],
        [
            "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
            "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
            "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
            "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
            "https://player.vimeo.com/progressive_redirect/playback/907665670/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
            "https://player.vimeo.com/progressive_redirect/playback/907665545/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
        ],
        [
            "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
            "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
            "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
            "https://player.vimeo.com/progressive_redirect/playback/907667958/rendition/1080p/file.mp4?loc=external&signature=a3502c5e8ab318001eebdb072c17871dd6d561ebb9f922a08ef03dc6ffd35fe4",
            "https://player.vimeo.com/progressive_redirect/playback/907667998/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
            "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
        ],
        [
            "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
            "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
            "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
            "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
            "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
            "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
        ]
    ];
    const portfolio = {
        title: (<> BuzzFlick’s Educational Video Production Projects </>),
        para: (<> We stand out among all educational video companies for our creative and distinctive portfolio. </>),
        tabContents: tabContents,
        tabsInfo: false,
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

    const educateBuzz = [
        {
            ImageOne: conceptIcon5,
            slideTitle: "Enhance",
            paraOne: "learning for students and teachers with our educational videos.",
        },
        {
            ImageOne: conceptIcon6,
            slideTitle: "Open up",
            paraOne: "teaching opportunities and learning portals.",
        },
        {
            ImageOne: conceptIcon7,
            slideTitle: "Crafts",
            paraOne: "engaging educational videos for an exciting learning experience.",
        },
        {
            ImageOne: conceptIcon8,
            slideTitle: "Utilize",
            paraOne: "educational videos for academic education, awareness, and targeted audience training.",
        },
        {
            ImageOne: conceptIcon9,
            slideTitle: "Collaborate",
            paraOne: "with educational institutes and tutors for orientation, lectures, lessons, and training videos.",
        }
    ]

    const buzzflick = {
        title: "Why BuzzFlick is an Ideal Company for Educational Video Production?",
        para: "BuzzFlick stands among the top educational video production companies and has been providing its educational video production services around the globe since 2016.",
        conceptContent: buzzflickContent,
        educateBuzz: educateBuzz,
        foldBg: FoldBg,
        isBtn: false,
        isEducateBuzz: false,
        btnBg: "bg-prime",
    };
    //===== Production Fold ====== //

    const otherCards = [
        {
            cardTitle: <>Storyboard Creation</>,
            cardDesc: 'In this phase of tech video production, our creative digital artists sketch a simple yet pulsating visual representation of tech video for your company to give you an idea of how your video will look like.',
            cardNum: "03",
        },
        {
            cardTitle: <>Visual Illustration</>,
            cardDesc: 'Our skilled illustrators take the storyboard to the next level by creating stunning and vibrant illustrations. It helps to turn your video into more refined and appealing content.',
            cardNum: "04",
        },
        {
            cardTitle: <>Finalizing Voice Over</>,
            cardDesc: 'The voice-over artists add a new life to your videos by adding their powerful voices in different languages and accents. You can select the best suitable voice for your tech video.',
            cardNum: "05",
        },
        {
            cardTitle: <>Animation and Motion <br /> Graphics</>,
            cardDesc: 'The animation stage involves delivery of finest motion graphics services that bring static illustrations to life in a compelling fashion. Our team brings all the assets together (the script, voice-over, and illustrations) and animates them to create a compelling narrative and powerful story.',
            cardNum: "06",
        },
        {
            cardTitle: <>Post-production</>,
            cardDesc: 'Once your animated technology video is ready, the post-production phase starts. We do the final editing and some touch-ups at this stage and our quality assurance team further checks to ensure the perfection we want to achieve to deliver you with the best.',
            cardNum: "07",
        },
        {
            cardTitle: <>Let’s Buzz</>,
            cardDesc: 'Once the quality assurance is completed by our team, we share the finalized version of the video with you to get your feedback for any changes. Most probably, our crafted videos are good to go. You can now create a Buzz with your tech video and attract engage and delight your audience.',
            cardNum: "08",
        },
    ]
    const production = {
        title: "Our Tech Video Production Process",
        desc: "We believe in an end-to-end approach when it comes to tech video production and that is the reason we have 100s of satisfied clients onboard to get the best tech videos to help their businesses.",
        firstTwoCards: true,
        otherCards: otherCards,
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
        title: (<> The Ultimate Collection Of <br />
            Our Incredible Customer Experiences </>),
        para: (<> Achieved 1000+ Impactful Results That Speak Volumes </>),
        btnBg: "bg-prime",
        testiContent: testiContent
    };
    //===== FAQS =====//

    const accordionData = [
        {
            question: 'What Is The Cost Of Tech Video Production?',
            answer: "The cost for tech video production depends on how complicated your information to be converted into video is. Usually, the cost for a 2D animated video starts from $1000, and the same goes for technology videos. But the amount may vary on length and video style.",
        },
        {
            question: 'What Is The BuzzFlick’s Video Delivery Timeframe?',
            answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
        },
        {
            question: 'What Kind Of Videos BuzzFlick Provides With Tech Video Production Services?',
            answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
        }
    ];

    const faqs = {
        title: "Frequently Asked Questions",
        accordionData: accordionData,
    }

    return (
        <>
            <Hero content={hero} />
            <Review />
            <Looking content={looking} />
            <Product content={product} />
            <Company content={companies} />
            <BuzzFlick content={buzzflick} />
            <Portfolio content={portfolio} /> 
            <Production content={production} />
            <Testimonial content={testimonial} />
            <Faqs content={faqs} />
            <Contact />
        </>
    )
}