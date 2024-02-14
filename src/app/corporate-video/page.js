// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking'; 
import Company from '@/components/company/Company';
import Portfolio from '@/components/portfolio/Portfolio'; 
import Tech from "@/components/tech-type/Tech";
import Production from "@/components/productionprocess/Production";
import Brand from "@/components/branding/Brand";
import Want from "@/components/want/Want";
import Testimonial from '@/components/testimonial/Testimonial';
import Faqs from "@/components/faqs/Faqs";
import Contact from '@/components/contact/Contact';
// Import Images
import LookingFlodImg from "media/images/boost-img.png";
//==== Boost Images
import BoostFlodImg from "media/corporate-video/company-Image.png";
//===== Tech Type Images
import TechImage1 from "media/tech-type/techtype4.png"
import TechImage2 from "media/tech-type/techtype5.png"
import TechImage3 from "media/tech-type/techtype6.png"  
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"
import checkIcon from 'media/icons/check-img.png'
//==== Brands Images ===== //
import Slide1 from "media/corporate-video/brand1.png"
import Slide2 from "media/corporate-video/brand2.png"
import Slide3 from "media/corporate-video/brand3.png"
import Slide4 from "media/corporate-video/brand4.png"
import Slide5 from "media/corporate-video/brand5.png"


export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> <span className='text-primary-100'> Corporate</span> Video Production Services Company </>),
        para: "Build trust, influence customers, and train employees with our corporate video production services.",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "BuzzFlick is an award-winning, USA-based corporate video production agency with hundreds of projects completed successfully. We have worked with an internationally renowned clientele of many Fortune 500, 100 and even fortune 50 companies.",

        "The team at BuzzFlick devote themselves wholeheartedly to create visuals that communicate your audience your business objectives and goals. Our meticulous process ensures every video is a masterpiece, from understanding your vision, writing the perfect script to engaging visuals and fluid animation. We strive only for perfection, satisfaction and an incredible solution.",

        "With our professionally created corporate videos, we let your customers, clients, and employees educate about your company, business, services, products engagingly. Our corporate videos are more about talking about your company, helping Human Resource department hire more & train your employees, increase brand recognition, and deliver your vision evidently to your prospects. So, if you are looking for professional corporate video production services, we are for sure your safe haven.",
    ];
    const looking = {
        title: (<> Why Choose BuzzFlick’s Corporate Video Production Services? </>),
        para: { paraArray },
        isCTA: false,
        isBtns: false,
        css: "rotateY",
        flodImg: LookingFlodImg
    };
    //=====Company=====//
    const componyArray = [
        "If you want to increase your reach to a wider audience to attract new visitors to your website, use corporate videos and acquire best of the best corporate video production services. Even they are great for social media content, and apps. In fact, corporate videos should be used for your audience's entertainment and to establish emotional connectivity with your target audience. Here are some important benefits of opting for corporate videos in your marketing strategy:.",
    ];
    const listArray = [
        " They significantly decrease your website’s bounce rate.",
        " A corporate video can convey your company’s vision with the correct analytics.They are a big contributor to your content strategy.",
        "You can use corporate videos to achieve specific objectives like brand enhancement, marketing,",
        "training, etc.",
        "If you opt for a well-crafted, well executed corporate video, it for sure has an inspiring brand story that engages your audience and persuade them to take the action or actions you desire.",
    ]
    const companies = {
        title: (<> Why Use Corporate Video Production Services To Boost Your Brand?</>),
        para: { componyArray },
        subtitle: "",
        subPara: "",
        flodImg: BoostFlodImg,
        list: { listArray },
        btn: false,
        lists: true,
        checkImg: checkIcon,
    };
    //=====Portolio Fold=====//
    const tabInfo = [
        { label: "All", index: 0 },
        { label: "Explainer Videos", index: 1 },
        { label: "3D Animation", index: 2 },
        { label: "Whiteboard Animation", index: 3 },
        { label: "Demo Video", index: 4 },
        { label: "Motion Graphics", index: 5 },
        { label: "Video Editing", index: 6 },
        { label: "Digital Illustration", index: 7 },
        { label: "3D Modeling", index: 8 },
        { label: "Music Video", index: 9 },
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
        title: (<> Corporate Video Production Company That Buzz </>),
        para: (<> We are corporate video production company with a diverse portfolio. From corporate and business explainer videos to corporate demo videos we have done it all. Go through our splendid work here: </>),
         tabContents: tabContents,
        tabsInfo: true,
        tabInfo: tabInfo
    };
    //======Tech Type Fold======//
    const techCard = [
        {
            CardOne: TechImage1,
            CardTitle: "Internal Video",
            CardPara: <>Corporate videos can be used effectively for internal communication and marketing drives. Our internal corporate video production at BuzzFlick specializes in creating such videos that can be used to provide things like important policy messages, courses related to new tech implementation, and more. <br />

                As a corporate video production company, we make sure your internal videos are engaging and sensitive to your company culture.
            </>
        },
        {
            CardOne: TechImage2,
            CardTitle: "Brand Corporate Videos",
            CardPara: <>Brand corporate videos are really compelling. They are simple and not so marketing-oriented so they engage audiences effectively. YouTube shorts are best when it comes to corporate branding.
                <br />
                While creating corporate brand videos, we sketch the simple storyboard that is well-aligned with your ideas and concepts to make perfect story for your brand. You can enhance your website, social media profiles, and even your work portfolio through these engaging videos.
            </>
        },
        {
            CardOne: TechImage3,
            CardTitle: "Trade Show Video",
            CardPara: <>Does your brand maintain a consistent presence at industry trade shows and conferences? Then our corporate video production services with our trade show videos are the perfect fit for you! <br />
                Without a trade show video, your presence at any industry trade show or conference won't be as impactful, so it is best to get one started right away. <br />
                These videos can help attract people, which can help you to generate more connections and bring better leads that can
            </>
        },
    ]
    const techType = {
        title: <>What Types of Corporate Videos <br /> We Produce?</>,
        desc: <>BuzzFlick usually works around 3 types of corporate videos that you can use to communicate your business or brand. <br /> Our corporate video production services include:</>,
        card: techCard,
        isBtn: false,
    }
    //===== Production Fold ====== //
    const otherCards = [
        {
            cardTitle: <>Identifying Your Goals <br /> & Vision</>,
            cardDesc: 'We’ll first set your goals and discuss your vision. At this stage, we decide the most evocative performance metrics along with the incredible content to be produced. Regardless of your budget and time constraints, our corporate video production services will come up with the most possible plan to help you achieve optimized results through your corporate video.',
            cardNum: "01",
        },
        {
            cardTitle: <>Video Project Budget<br /> Estimation</>,
            cardDesc: 'From the very beginning, our team will always be there to discuss your project. It also involves budget estimation for your video project. We work around your budget to deliver the best possible solution for your video production at a minimal cost. Our expert team always guides you whether you have a small or big budget and allocate your resources efficiently.',
            cardNum: "02",
        },
        {
            cardTitle: <>Conceptualization &<br /> Script Writing</>,
            cardDesc: 'A great video relies on a creative concept and compelling script, and what’s better than BuzzFlick to get the job done? Our creative team and writers know really well how to write captivating scripts that glue the audience to the video and attain business goals.',
            cardNum: "03",
        },
        {
            cardTitle: <>The Pre-Production<br /> Phase</>,
            cardDesc: 'The pre-production phase takes off with the development of storyboard. It provides you with a central layout to conceptualize, visualize, direct, and implement the scenes.',
            cardNum: "04",
        },
        {
            cardTitle: <>The Production Phase</>,
            cardDesc: 'After storyboarding, production defines the video style—commonly Live Action or Animation. Live Action entails necessary equipment, a chosen location, and actors delivering the message. Animation, in 2D or 3D, requires creating graphic assets based on the storyboard and using an animation tool for video realization.',
            cardNum: "05",
        },
        {
            cardTitle: <>Post-Production<br /> Stage</>,
            cardDesc: 'As a corporate video production company, we have all the resources for post production process. This is the last stage and is all about smoothing, editing, and polishing off the rough edges of your corporate video in order to make it more appealing.',
            cardNum: "06",
        },
    ]

    const production = {
        title: "What Is Our Corporate Video Production Process?",
        desc: "Our corporate video production process is simple and seamless. Whether you are a startup or a group of companies corporate, BuzzFlick will convey your business story through incredible corporate videos effectively like no other corporate video production company does. Here is our professionally optimized video production process:",
        firstTwoCards: false,
        otherCards: otherCards,
    }
    //===== Branding Fold ====== //
    const branding = [
        {
            slide1: Slide1,
            title: "Testimonial Video Production",
            desc: "Client or customer testimonial videos are used often to build a brand's authenticity and win consumer’s trust. Our corporate testimonial videos allow your customers to talk behind the scenes, about the services."
        },
        {
            slide1: Slide2,
            title: "Animated Corporate Video Production",
            desc: "It is a myth that only kids, or some growing teenagers watch animated videos. Gone are the days now as animated corporate videos are great tools for brands and businesses in this digital era. Our animated corporate video."
        },
        {
            slide1: Slide3,
            title: "Corporate Live Action Video Production",
            desc: "Live-action videos are best when it comes to launching tangible products. Live-action corporate videos can be demonstrative or a fictional story established around the product to explain it. They are crisp and are not fluffy at all."
        },
        {
            slide1: Slide4,
            title: "Corporate Video Production For Internal Communication",
            desc: "Large corporates opt for corporate video production services for internal communications fashioned with the intent to communicate or train employees or contractual resources of your business. "
        },
        {
            slide1: Slide5,
            title: "Corporate Branding Videos",
            desc: "Corporate branding videos are the next big thing. Businesses and brands use these videos to promote the work environment of their company, showcase the culture of their company, and encourage valuable resources to "
        },
        {
            slide1: Slide1,
            title: "Testimonial Video Production",
            desc: "Client or customer testimonial videos are used often to build a brand's authenticity and win consumer’s trust. Our corporate testimonial videos allow your customers to talk behind the scenes, about the services."
        }
    ]
    //=====Want Fold=====//
    const want = {
        title: "Want to Talk ?",
        wantDesc: "Have questions? We have answers, Call Now!"
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
            <Company content={companies} />
            <Portfolio content={portfolio} />
            <Production content={production} />
            <Looking content={looking} />
            <Tech content={techType} />
            <Brand content={branding} />
            <Want content={want} />
            <Testimonial content={testimonial} />
            <Faqs content={faqs} />
            <Contact />
        </>
    )
}