import React from 'react';
// Import Page Components
const Hero = React.lazy(() => import('@/components/hero/Hero'));
const Review = React.lazy(() => import('@/components/review/Review'));
const Looking = React.lazy(() => import('@/components/looking/Looking'));
const StoryLine = React.lazy(() => import('@/components/storyline/StoryLine'));
const Portfolio = React.lazy(() => import('@/components/portfolio/Portfolio'));
const Concept = React.lazy(() => import('@/components/concept/Concept'));
const Boost = React.lazy(() => import('@/components/boost/Boost'));
const Testimonial = React.lazy(() => import('@/components/testimonial/Testimonial'));
const Contact = React.lazy(() => import('@/components/contact/Contact'));
//==== Looking Images
const LookingFlodImg = await import("media/home/looking-img.png");
//==== StoryLine Images
const StoryLine1 = await import("media/storyline/storyLine1.jpg");
const StoryLine2 = await import("media/storyline/storyLine2.jpg");
const StoryLine3 = await import("media/storyline/storyLine3.jpg");
const StoryLine4 = await import("media/storyline/storyLine4.jpg");
const StoryLine5 = await import("media/storyline/storyLine5.jpg");
const StoryLine6 = await import("media/storyline/storyLine6.jpg");
const StoryLine7 = await import("media/storyline/storyLine7.jpg");
const StoryLine8 = await import("media/storyline/storyLine8.jpg");
const StoryLine9 = await import("media/storyline/storyLine9.jpg");
const StoryLine10 = await import("media/storyline/storyLine10.jpg");
//==== Boost Images
const BoostFlodImg = await import("media/images/boost-img.gif");
const boosticon1 = await import("media/icons/boost-icon1.png");
const boosticon2 = await import("media/icons/boost-icon2.png");
const boosticon3 = await import("media/icons/boost-icon3.png");
//==== Testimonial Images
const icon1 = await import("media/images/client.png");
const icon2 = await import("media/icons/stars.png");
// ==== Thumnail Image
const Thumbnail1 = await import("media/thumbnails/2d-animation/1.jpg");
const Thumbnail2 = await import("media/thumbnails/2d-animation/2.jpg");
const Thumbnail3 = await import("media/thumbnails/2d-animation/3.jpg");
const Thumbnail4 = await import("media/thumbnails/2d-animation/4.jpg");
const Thumbnail5 = await import("media/thumbnails/2d-animation/5.jpg");
const Thumbnail6 = await import("media/thumbnails/2d-animation/6.jpg");
const Thumbnail7 = await import("media/thumbnails/3d-animation/1.jpg");
const Thumbnail8 = await import("media/thumbnails/3d-animation/2.jpg");
const Thumbnail9 = await import("media/thumbnails/3d-animation/3.jpg");
const Thumbnail10 = await import("media/thumbnails/3d-animation/4.jpg");
const Thumbnail11 = await import("media/thumbnails/3d-animation/5.jpg");
const Thumbnail12 = await import("media/thumbnails/3d-animation/6.jpg");
const Thumbnail13 = await import("media/thumbnails/whiteboard/1.jpg");
const Thumbnail14 = await import("media/thumbnails/whiteboard/2.jpg");
const Thumbnail15 = await import("media/thumbnails/whiteboard/3.jpg");
const Thumbnail16 = await import("media/thumbnails/whiteboard/4.jpg");
const Thumbnail17 = await import("media/thumbnails/whiteboard/5.jpg");
const Thumbnail18 = await import("media/thumbnails/whiteboard/6.jpg");
const Thumbnail19 = await import("media/thumbnails/motion-graphics/1.jpg");
const Thumbnail20 = await import("media/thumbnails/motion-graphics/2.jpg");
const Thumbnail21 = await import("media/thumbnails/motion-graphics/3.jpg");
const Thumbnail22 = await import("media/thumbnails/motion-graphics/4.jpg");
const Thumbnail23 = await import("media/thumbnails/motion-graphics/5.jpg");
const Thumbnail24 = await import("media/thumbnails/motion-graphics/6.jpg");
const Thumbnail25 = await import("media/thumbnails/hybrid/1.jpg");
const Thumbnail26 = await import("media/thumbnails/hybrid/2.jpg");
const Thumbnail27 = await import("media/thumbnails/hybrid/3.jpg");
const Thumbnail28 = await import("media/thumbnails/hybrid/4.jpg");
const Thumbnail29 = await import("media/thumbnails/hybrid/5.jpg");
const Thumbnail30 = await import("media/thumbnails/hybrid/6.jpg");

export default function Page() {
    //=====Banner Fold=====//
    const hero = {
        title: (<> We <span className='text-primary-100'>Animate</span> Your <br /> Stories and Ideas </>),
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
            answer: "Bring your ideas to life with our dynamic 2D animations. From character-driven stories to engaging motion graphics, our animations captivate and convey your message with vibrant visuals.",
            StoryLineImg: StoryLine1,
        },
        {
            question: '3D Animations',
            answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
            StoryLineImg: StoryLine2
        },
        {
            question: 'Whiteboard',
            answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
            StoryLineImg: StoryLine3
        },
        {
            question: 'Motion Graphics',
            answer: "Transform your content into visual masterpieces with our motion graphics. Every movement is a brushstroke of dynamic storytelling, enhancing your brand's visual appeal.",
            StoryLineImg: StoryLine4
        },
        {
            question: 'Video Editing',
            answer: "Refine your raw footage into cinematic brilliance with our video editing services. Every cut and transition is a stroke of storytelling precision, enhancing your visual narratives.",
            StoryLineImg: StoryLine5
        },
        {
            question: 'Logo Animations',
            answer: "Make your brand memorable with our logo animation services. Dynamic animations breathe life into your logo, adding a touch of sophistication to your brand identity.",
            StoryLineImg: StoryLine6
        },
        {
            question: 'Architectural Visualization',
            answer: "Visualize spaces in breathtaking detail with our architectural visualization services. From realistic renders to immersive walkthroughs, bring your architectural visions to life.",
            StoryLineImg: StoryLine7
        },
        {
            question: 'CGI-VFX',
            answer: "Experience cinematic brilliance with our CGI and VFX services. Elevate your projects with lifelike animations and visual effects that push the boundaries of imagination.",
            StoryLineImg: StoryLine8
        },
        {
            question: 'Infographics',
            answer: "Transform data into compelling visuals with our infographics services. Each design tells a story, making complex information accessible and visually engaging.",
            StoryLineImg: StoryLine9
        },
        {
            question: 'Hybrid & Cel',
            answer: "Blend tradition with innovation through our Hybrid & Cel Animation services. Each frame is a symphony of timeless artistry and contemporary brilliance, adding a unique charm to your animation.",
            StoryLineImg: StoryLine10
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


