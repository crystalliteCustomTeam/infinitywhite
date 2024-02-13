// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import Looking from '@/components/looking/Looking';
import StoryLine from '@/components/storyline/StoryLine';
import Portfolio from '@/components/portfolio/Portfolio';
import Concept from '@/components/concept/Concept';
import Boost from '@/components/boost/Boost';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
//==== Looking Images
import LookingFlodImg from "media/home/looking-img.png";
//==== StoryLine Images
import StoryLine1 from "media/home/storyline1.png";
import StoryLine2 from "media/home/storyline2.png";
//==== Portfolio Images
import polio1 from "media/home/portfolio1.png"
import polio2 from "media/home/portfolio2.png"
import polio3 from "media/home/portfolio3.png"
import polio4 from "media/home/portfolio4.png"
//==== Boost Images
import BoostFlodImg from "media/images/boost-img.png";
import boosticon1 from "media/icons/boost-icon1.png"
import boosticon2 from "media/icons/boost-icon2.png"
import boosticon3 from "media/icons/boost-icon3.png"
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> We <span className='text-primary-100'>Animate</span>Your <br /> Stories and Ideas </>),
        para: "In a world where dreams paint the sky, animation is the bridge between vivid imaginations and palpable realities. Each frame, a splash of creativity, brings to life stories untold, emotions unexpressed. At Infinity Animations, colors dance, characters breathe, and every stroke of the artist's pen ignites a universe, turning the canvas of fantasy into a symphony of visual wonder.",
        btnBg: "bg-prime",
    };
    //=====Looking Fold=====//
    const paraArray = [
        "Everybody deserves a taste of art. Infinity Animations, a kingdom of endless creativity, boasts a vibrant team of certified animators. Their expertise textures stories into visual marvels, enthralling viewers globally. Renowned for affordability, they democratize animation, making mesmeric art accessible to all.",

        "It's a place where skill meets passion, and dreams transform into digital reality."
    ];
    const looking = {
        title: (<> Searching for Certified Animators and Affordable Services? </>),
        para: { paraArray },
        isCTA: true,
        flodImg: LookingFlodImg
    };
    //=====StoryLine Fold=====//
    const accordionData = [
        {
            question: '2D Animations',
            answer: "Art and animation breathe life into imagination, painting emotions and stories that words alone cannot convey. They inspire, evoke, and connect us to the beauty of boundless creativity.",
            StoryLineImg: StoryLine1,
        },
        {
            question: '3D Animations',
            answer: "3D animation, a world of infinite possibilities, sculpts dreams into reality. With lifelike characters and immersive worlds, it transports us to new dimensions where imagination knows no bounds.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'Whiteboard',
            answer: "Whiteboard animation, a fascinating blend of simplicity and storytelling, unravels ideas with an artistic touch. Black ink dances on a white canvas, breathing life into concepts and turning knowledge into art.",
            StoryLineImg: StoryLine1
        },
        {
            question: 'Motion Graphics',
            answer: "Motion graphics, the symphony of movement, and design orchestrate visuals into a hypnotic dance. With fluidity and precision, it transforms data and concepts into dynamic narratives that enthrall and inform.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'Video Editing',
            answer: "Video editing, the alchemy of storytelling, assembles moments into a cinematic masterpiece. With every cut, merge, and effect, it crafts emotions, taking viewers on an unforgettable journey through the lens of creativity.",
            StoryLineImg: StoryLine1
        },
        {
            question: 'Logo Animations',
            answer: "Logo animations, the heartbeat of brand identity, breathe vitality into symbols. With finesse and innovation, they turn logos into dynamic stories, leaving indelible impressions in the digital world.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'Architectural Visualization',
            answer: "Architectural visualization, the art of turning blueprints into dreams, unveils future spaces in vivid detail. With lighting and texture, it grants a glimpse of what could be, inspiring awe and vision.",
            StoryLineImg: StoryLine1
        },
        {
            question: 'CGI-VFX',
            answer: "CGI-VFX, the magic of the digital dominion, paints fantasies onto screens. With breathtaking realism, it melds reality and imagination, crafting visual spectacles that transport us to empires beyond our wildest dreams.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'Infographics',
            answer: "Infographics, the visual storytellers of data, turn statistics into engaging tales. With colors and graphics, they simplify complexity, empowering audiences to grasp information effortlessly, making knowledge a work of art.",
            StoryLineImg: StoryLine1
        },
        {
            question: 'Hybrid & Cel',
            answer: "Hybrid & Cel animation, a fusion of classic and modern, evokes nostalgia and innovation. With hand-drawn charm and digital precision, they breathe life into characters, bridging generations with entrancing tales.",
            StoryLineImg: StoryLine2
        },
    ];
    const storyLine = {
        subtitle: (<> The Potency of Visual Imagery </>),
        title: (<> Experience the Innovative Video Animation Exhibits </>),
        para: "Art and animation breathe life into imagination, painting emotions and stories that words alone cannot convey. They inspire, evoke, and connect us to the beauty of boundless creativity.",
        accordionData: accordionData
    };
    //=====Portfilio Fold=====//
    const tabInfo = [
        { label: "2D Animations", index: 0 },
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
        title: (<> Our Vault of Creative Animation Ventures </>),
        para: (<> Unlock the door to our vault of creative animation ventures, where imagination thrives and stories come to life in mesmeric motion. </>),
        tabContents: tabContents,
        tabInfo: tabInfo
    };
    //=====Concept Fold=====//
    const concept = {
        btnBg: "bg-prime",
    };
    //=====Boost Fold=====//
    const boostContent = [
        {
            icon: boosticon1,
            heading: "Strategic Distribution",
            text: "At Infinity Animations, we are your strategic partners in video distribution, guiding your animations to their perfect audience, across diverse platforms, amplifying reach and engagement for unparalleled success.",
        },
        {
            icon: boosticon2,
            heading: "Custom Curation",
            text: "Our team crafts appealing animations that breathe life into your vision, ensuring your content shines with a polished allure, charming audiences, and etching a lasting and enduring impact.",
        },
        {
            icon: boosticon3,
            heading: "Improve Brand Awareness",
            text: "We hoist brand prominence with enchanting narratives and fascinating imagery, nurturing emotional bonds with viewers that promote brand devotion, differentiating you in the fiercely and mundane competitive market.",
        },
    ];
    const boost = {
        title: (<> Artistic and Unreal Animations Catapult Engagements and Sales </>),
        para: (<> We understand that you have a business to run. And what good is a business without engagements and sales, yes? Well, we will sort that out for you. </>),
        btnBg: "bg-prime",
        boostContent: boostContent,
        flodImg: BoostFlodImg
    };
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
            message: "Infinity Animations worked wonders with CGI-VFX for our product. Their work took our marketing efforts to a whole new level and made us stand out in the market.",
            company: 'ABC company',
        },
    ];
    const testimonial = {
        title: (<> Let’s Read What Our Clients Have to Say </>),
        para: (<> If you can’t trust us, try trusting them.</>),
        btnBg: "bg-prime",
        testiContent: testiContent
    };
    //=====Connect Fold=====//

    return (
        <>
            <Hero content={hero} />
            <Review />
            <Looking content={looking} />
            <StoryLine content={storyLine} />
            <Portfolio content={portfolio} />
            <Concept content={concept} />
            <Boost content={boost} />
            <Testimonial content={testimonial} />
            <Contact />
        </>
    )
}


