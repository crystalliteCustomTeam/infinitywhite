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
import LookingFlodImg from "media/whiteboard/looking-img.gif";
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

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> Whiteboard <span className='text-primary-100'>Animation</span><br /> Services </>),
        para: "Employing Modernity in Old School Methods",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "Whiteboard animation, an attractive medium of visual storytelling, effortlessly blends the simplicity of monochrome sketches with the dynamism of digital technology. This innovative technique breathes life into static drawings, orchestrating a symphony of images that dance and transform across the pristine canvas of a whiteboard. With each stroke of the marker, a narrative unfurls, engaging viewers through a unified fusion of artistry and technology. ",

        "The minimalist backdrop of a whiteboard provides an uncluttered canvas upon which ideas and concepts materialize in a mesmerizing dance of creation. This medium transcends linguistic barriers, allowing ideas to flow freely, transcending spoken words. It empowers businesses to convey complex messages with clarity and charm, fascinating audiences with its unique blend of art and animation."
    ];
    const looking = {
        title: (<> Whiteboard Animation </>),
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
        title: (<> Our Vault of Creative Animation Ventures </>),
        para: (<> Unlock the door to our vault of creative animation ventures, where imagination thrives and stories come to life in mesmeric motion. </>),
        tabContents: tabContents,
        tabInfo: tabInfo
    };
    //=====Boost Fold=====//
    const boostContent = [
        {
            icon: boosticon1,
            heading: "Attention Grabbing Potency",
            text: "Our whiteboard animations will keep your audiences glued to the screen. The mesmeric effect will have them wanting more.",
        },
        {
            icon: boosticon2,
            heading: "Clicks and More Clicks",
            text: "Clicks and more clicks determine user interaction which later transforms into leads, leading to maximum profitability. ",
        },
        {
            icon: boosticon3,
            heading: "Versatile Animations",
            text: "Our whiteboard animations are intended for all purposes. They cater to everything and anything related to your business.",
        },
    ];
    const boost = {
        title: (<> The Center of Attention </>),
        para: (<> Whiteboard animations are not just creative, they are a potion that triumphs over anything and everything artistic </>),
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
            sliderDesc: "We hear your concept(s) and try to determine what corresponds best with your idea. Once we have that sorted, we proceed to the next step which is storyboarding."
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
            sliderDesc: "A green signal from your end allows our certified animators to commence their artistic pursuits. Your concept here is basically under construction. "
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
            message: "Working with Infinity Animations was a pleasure. Their team is not only professional but also incredibly talented. The animations they created for our brand added that extra spark we were looking for.",
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
            message: "Infinity Animations worked wonders with CGI-VFX for our product. Their work took our marketing efforts to a whole new level and made us stand out in the market.",
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