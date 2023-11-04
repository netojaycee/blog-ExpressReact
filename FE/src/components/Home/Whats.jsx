import React, { useEffect } from 'react';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";



const Whats = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className="flex gap-4 w-full mb-40 md:mb-4 md:px-20 underline-none ">
                <section className="w-full flex underline-none flex-col  relative bg-primary-500 mt-0">
                <img src={'../../src/assets/images/card-bg-left.png'} alt='logo' className='-left-60  absolute' height={500} width={500} priority={true} data-aos="fade-right"/>

                    <div className="md:flex-row flex flex-col w-full justify-between gap-10 md:mt-28 relative object-contain">
                        <div className="md:text-left pt-10 space-y-8 md:pt-20 w-full">
                            <h1 className="font-bold text-primary text-3xl md:text-5xl flex" data-aos="slide-right">
                                What's Included:
                            </h1>

                            <p className="font-normal text-base py-10" data-aos="slide-left">
                                Welcome to a positive digital space for people who want to improve their mental health.
                            </p>
                            <Accordion open={open === 1} className="mb-2  rounded-lg card border shadow-md  px-4" data-aos="zoom-right">
                                <AccordionHeader
                                    onClick={() => handleOpen(1)}
                                    className={`border-b-0 transition-colors ${open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-8">
                                        <img src={"../../src/assets/images/mobile-variation-tab-icon-01.svg"} height={50} width={50} className="" alt="man wearing glasses" />
                                        <h1 className="text-base text-left font-bold text-primary">Talk to Ruby</h1>
                                    </div>

                                </AccordionHeader>
                                <AccordionBody className="pt-0 text-base font-normal">
                                    Ruby is mhapy’s AI chatbot. You can have open ended conversations that allow you the freedom to freely express yourself. It is just like talking to a friend. Ruby can tell jokes, give you the latest health news, tell you the weather forecast and most importantly assess your mental health.
                                    Complete Overview of Mental Health
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 2} className="mb-2 rounded-lg border shadow-md px-4" data-aos="slide-left">
                                <AccordionHeader
                                    onClick={() => handleOpen(2)}
                                    className={`border-b-0 transition-colors ${open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-8">
                                        <img src={"../../src/assets/images/mobile-variation-tab-icon-02.svg"} height={50} width={50} className="" alt="man wearing glasses" />
                                        <h1 className="text-base text-left font-bold text-primary">Complete Overview of Mental Health</h1>
                                    </div>

                                </AccordionHeader>
                                <AccordionBody className="pt-0 text-base font-normal">
                                    Ruby helps keeps track of your Anxiety, Depression, Sleep, Substance use, Hallucinations, Suicidal ideation, Non suicidal self injury, Medication compliance, Mood, Mental Health goals, Delusions and more.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 3} className="mb-2 rounded-lg border shadow-md px-4" data-aos="zoom-left">
                                <AccordionHeader
                                    onClick={() => handleOpen(3)}
                                    className={`border-b-0 transition-colors ${open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-8">
                                        <img src={"../../src/assets/images/mobile-variation-tab-icon-03.svg"} height={50} width={50} className="" alt="man wearing glasses" />
                                        <h1 className="text-base text-left font-bold text-primary">Mental Health Analytics</h1>
                                    </div>

                                </AccordionHeader>
                                <AccordionBody className="pt-0 text-base font-normal">
                                    Observe patterns and trends in your mental health. View graphs of mood over time, sleep quality and efficiency. Monitor improvement or decline in your mental health.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 4} className="mb-2 rounded-lg border shadow-md px-4" data-aos="slide-left">
                                <AccordionHeader
                                    onClick={() => handleOpen(4)}
                                    className={`border-b-0 transition-colors ${open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-8">
                                        <img src={"../../src/assets/images/mobile-variation-tab-icon-04.svg"} height={50} width={50} className="" alt="man wearing glasses" />
                                        <h1 className="text-base text-left font-bold text-primary">Connect with Peers</h1>
                                    </div>

                                </AccordionHeader>
                                <AccordionBody className="pt-0 text-base font-normal">
                                    mhapy matches you with people who have passed through the same struggles and can relate. It is a no-stigma place to express yourself and talk with peers. Find accountability partners. Become an accountability partner. Let’s help each other get better.
                                </AccordionBody>
                            </Accordion>

                            <Accordion open={open === 5} className="mb-2 rounded-lg border shadow-md px-4" data-aos="slide-right">
                                <AccordionHeader
                                    onClick={() => handleOpen(5)}
                                    className={`border-b-0 transition-colors ${open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-8">
                                        <img src={"../../src/assets/images/mobile-variation-tab-icon-04.svg"} height={50} width={50} className="" alt="man wearing glasses" />
                                        <h1 className="text-base text-left font-bold text-primary">Social Journaling</h1>
                                    </div>

                                </AccordionHeader>
                                <AccordionBody className="pt-0 text-base font-normal">
                                    Ruby helps you organize your thoughts and put them in your journal. You can make any post in your journal visible to your peers. Remember your journal posts are set to private by default. You have control over which posts in your journal your peers can see, like and comment on.
                                </AccordionBody>
                            </Accordion>
                        </div>
                        <div className="w-full relative object-fit mx-auto flex justify-center">
                            <img src={'../../src/assets/images/mobile-variation-tab-content-bg.png'} alt='logo' className='absolute' height={1000} width={1000} priority={true} data-aos="slide-right"/>
                            <img src={'../../src/assets/images/mhapy-social-journal.png'} className='hidden md:block bject-contain left-30 absolute w-[400px] h-[400]' alt='logo' height={400} width={400} priority={true} data-aos="slide-left"/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Whats;
