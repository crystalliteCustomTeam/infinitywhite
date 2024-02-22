// Import Page Components
import Hero from "@/components/hero/Hero";
import Review from "@/components/review/Review";
import StoryLine from '@/components/storyline/StoryLine';
import Want from '@/components/want/Want';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
//==== StoryLine Images
import StoryLine1 from "media/storyline/storyLine11.png";
import StoryLine2 from "media/storyline/storyLine12.png";
import StoryLine3 from "media/storyline/storyLine13.png";
import StoryLine4 from "media/storyline/storyLine14.png";
//==== Testimonial Images
import icon1 from "media/images/client.png"
import icon2 from "media/icons/stars.png"

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> The Steps that Make Creativity Possible </>),
        para: "Essential Steps Taken to Achieve the Goal",
        btnBg: "bg-prime",
    };
    //=====StoryLine Fold=====//
    const accordionData = [
        {
            question: 'Art of Storytelling',
            answer: "The art of storytelling is a timeless craft, flawlessly interlacing together words, emotions, and imagination. A skilled storyteller steers the intricate terrain of plot, character, and theme, guiding the audience through a transformative journey. Through the mastery of narrative techniques, storytellers evoke empathy, capture attention, and etch their tales into the annals of human experience.",
            StoryLineImg: StoryLine1
        },
        {
            question: 'Clear & Crisp Audio',
            answer: "Clear and crisp audio is an indispensable component of effective communication. It transcends mere sound, delivering pristine clarity that ensures every word is heard with precision. In professional settings, it nurtures an environment where information flows impeccably, fostering understanding and engagement among listeners. Superior audio quality leaves an indelible mark on the listener's experience.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'Vision to Animation',
            answer: "The transformation from vision to animation is an intricate process, requiring a careful blend of artistic prowess and technical finesse. Animators breathe life into concepts, effortlessly translating ideas into dynamic visuals. Through a harmonious fusion of creativity and technology, they capture imagination delivering fascinating narratives that resonate with audiences worldwide.",
            StoryLineImg: StoryLine3
        },
        {
            question: 'Touch of Finesse',
            answer: "A touch of finesse is the hallmark of refined craftsmanship, uplifting the ordinary to the extraordinary. It's an artful blend of skill and sophistication, resulting in a product, performance, or creation that exudes excellence. This nuanced touch adds an element of grace, distinction, and perfection that is both subtle and profound.",
            StoryLineImg: StoryLine4
        },
    ];
    const storyLine = {
        accordionData: accordionData
    };
    //=====Want Fold=====//
    const want = {
        title: (<>Have You <br/> Decided?</>),
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
            <StoryLine content={storyLine} />
            <Want content={want} />
            <Testimonial content={testimonial} />
            <Contact />
        </>
    )
}