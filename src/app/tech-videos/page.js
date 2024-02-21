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
//==== Boost Images
import BoostFlodImg from "media/images/boost-img.gif";
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
// ==== Thumnail Image
import Thumbnail1 from "media/thumbnails/2d-animation/1.jpg"
import Thumbnail2 from "media/thumbnails/2d-animation/2.jpg"
import Thumbnail3 from "media/thumbnails/2d-animation/3.jpg"
import Thumbnail4 from "media/thumbnails/2d-animation/4.jpg"
import Thumbnail5 from "media/thumbnails/2d-animation/5.jpg"
import Thumbnail6 from "media/thumbnails/2d-animation/6.jpg"
import Thumbnail7 from "media/thumbnails/3d-animation/1.jpg"
import Thumbnail8 from "media/thumbnails/3d-animation/2.jpg"
import Thumbnail9 from "media/thumbnails/3d-animation/3.jpg"
import Thumbnail10 from "media/thumbnails/3d-animation/4.jpg"
import Thumbnail11 from "media/thumbnails/3d-animation/5.jpg"
import Thumbnail12 from "media/thumbnails/3d-animation/6.jpg"
import Thumbnail13 from "media/thumbnails/whiteboard/1.jpg"
import Thumbnail14 from "media/thumbnails/whiteboard/2.jpg"
import Thumbnail15 from "media/thumbnails/whiteboard/3.jpg"
import Thumbnail16 from "media/thumbnails/whiteboard/4.jpg"
import Thumbnail17 from "media/thumbnails/whiteboard/5.jpg"
import Thumbnail18 from "media/thumbnails/whiteboard/6.jpg"
import Thumbnail19 from "media/thumbnails/motion-graphics/1.jpg"
import Thumbnail20 from "media/thumbnails/motion-graphics/2.jpg"
import Thumbnail21 from "media/thumbnails/motion-graphics/3.jpg"
import Thumbnail22 from "media/thumbnails/motion-graphics/4.jpg"
import Thumbnail23 from "media/thumbnails/motion-graphics/5.jpg"
import Thumbnail24 from "media/thumbnails/motion-graphics/6.jpg"
import Thumbnail25 from "media/thumbnails/hybrid/1.jpg"
import Thumbnail26 from "media/thumbnails/hybrid/2.jpg"
import Thumbnail27 from "media/thumbnails/hybrid/3.jpg"
import Thumbnail28 from "media/thumbnails/hybrid/4.jpg"
import Thumbnail29 from "media/thumbnails/hybrid/5.jpg"
import Thumbnail30 from "media/thumbnails/hybrid/6.jpg"
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
        { label: "2D Animations", index: 0 },
        { label: "3D Animation", index: 1 },
        { label: "Whiteboard", index: 2 },
        { label: "Motion Graphics", index: 3 },
        { label: "Hybrid Animation", index: 4 },
    ];
const tabContents = [
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9",
                thumbnail: Thumbnail1
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
                thumbnail: Thumbnail2
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
                thumbnail: Thumbnail3
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
                thumbnail: Thumbnail4
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907829180/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
                thumbnail: Thumbnail5
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
                thumbnail: Thumbnail6
            },
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
                thumbnail: Thumbnail7
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
                thumbnail: Thumbnail8
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
                thumbnail: Thumbnail9
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
                thumbnail: Thumbnail10
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
                thumbnail: Thumbnail11
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907827073/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
                thumbnail: Thumbnail12
            },
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
                thumbnail: Thumbnail13
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
                thumbnail: Thumbnail14
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
                thumbnail: Thumbnail15
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
                thumbnail: Thumbnail16
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907665670/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
                thumbnail: Thumbnail17
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907665545/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
                thumbnail: Thumbnail18
            },
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
                thumbnail: Thumbnail19
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
                thumbnail: Thumbnail20
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
                thumbnail: Thumbnail21
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911724985/rendition/1080p/file.mp4?loc=external&signature=df10cc62ec59a62f54069b460626dcb1c6bdfa84519f840c75a06dba68ed5ba6",
                thumbnail: Thumbnail22
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907667998/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
                thumbnail: Thumbnail23
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
                thumbnail: Thumbnail24
            },
        ],
        [
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
                thumbnail: Thumbnail25
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
                thumbnail: Thumbnail26
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
                thumbnail: Thumbnail27
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
                thumbnail: Thumbnail28
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
                thumbnail: Thumbnail29
            },
            {
                video: "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
                thumbnail: Thumbnail30
            },
        ]
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
            paraOne: "Covering technology-based content in videos is not easy. You have to be creative, thoughtful, and less complicated to convey the information effectively. That is why Infinity Animations Pro makes sure the tech video production involves all the creative elements to make the videos more engaging for the viewer. ",
            paraTwo: "Not only does it compellingly present tech product or information, but also keep audiences hooked to the chair till the end of the video. A win-win situation. Our team of communicators is best at storytelling through videos. And hence, people like a good story, we have to be better at it to make your videos well-received.",
        },
        {
            ImageOne: conceptIcon2,
            sliderNumber: 2,
            slideTitle: "Our Videos Create an Emotional Connection",
            paraOne: "Written words can’t connect with people on the level that videos carry with them. According to MarTech Series, the study conducted by Motista states that the success key for any brand is the emotional connection. The report revealed that emotionally connected customers of brands have a higher lifetime value by 306% than merely satisfied customers. ",
            paraTwo: "And what’s better than Infinity Animations Pro’s technology video production to connect with customers and prospect buyers emotionally? Our videos are far more effective than a text-based piece of content. Using video instead of other content types significantly increases the likelihood of establishing an emotional connection with your audience.",
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
            paraOne: "With videos all over the internet, Infinity Animations Pro strives to be exceptionally unique and stand out. We have taken tech video production to the next level by hiring a team full of design, animation, and tech enthusiasts to deliver you the exceptional content you were looking for.",
            paraTwo: "With creativity, excellence, aesthetics, and a unique storytelling approach, we are making tech video content digestible, easy to understand, and flawless. Now give your tech products the creative edge they need through our tech-based videos and elevate your brand identity like never before.",
        },
    ]
    const buzzflick = {
        title: "The Four E’s of Infinity Animations Pro For Tech Video Production",
        para: "Infinity Animations Pro is not just another video production company that throws content on the go. Our tech video production is a wholesome process that explains your brand as well as captures your audiences through the four E's.",
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