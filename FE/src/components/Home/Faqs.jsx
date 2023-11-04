import { Card } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faqs = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <section className="w-full relative flex  flex-col md:my-10 my-60 bg-primary-500 justify-center items-center">
            <img src={'../../src/assets/images/card-bg-right.png'} alt='logo' className='-right-20 bottom-1 absolute' height={500} width={500} priority={true} data-aos="slide-right"/>
            <h1 className="font-bold  mt-[300px] sm:mt-[600px] md:mt-[200px] text-primary text-4xl text-center md:text-5xl flex" data-aos="fade-in">
                Frequently Asked Questions?
            </h1>

            <div className="grid md:grid-cols-2 grid-cols-1 md:px-20 py-8 gap-4 "data-aos="fade-in">
                <Card className='p-8  gap-6 border flex md:flex-row shadow-2xl rounded-3xl justify-start' data-aos="zoom-left">
                    <h1 className="text-8xl text-primary">01</h1>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-base font-bold text-black">Is Mhapy Clinically Validated?</h1>
                        <p className=' leading-6 text-base font-normal'>At this point, the tool is still in development and cannot be validated yet. However, Ruby (mhapy’s chatbot) draws from clinically validated screening tools for anxiety, depression, hallucinations, substance use, and more. These tools have been used for decades by psychiatrists, psychologists, and mental health nurses for assessment.</p>
                    </div>

                </Card>

                <Card className='p-8  gap-6 border flex md:flex-row shadow-2xl rounded-3xl justify-start' data-aos="zoom-right">
                    <h1 className="text-8xl text-primary">02</h1>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-base font-bold text-black">Can I find a Therapist on Mhapy?</h1>
                        <p className=' leading-6 text-base font-normal'>We are working on an update that will allow you to use mhapy to find therapists in your area. We can not wait to share this with you.</p>
                    </div>

                </Card>
                <Card className='p-8  gap-6 border flex md:flex-row shadow-2xl rounded-3xl justify-start' data-aos="zoom-left">
                    <h1 className="text-8xl text-primary">03</h1>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-base font-bold text-black">What is the Privacy Policy?</h1>
                        <p className=' leading-6 text-base font-normal'>Your discussions with Ruby and with your peers are completely private. We will only view these messages for context whenever a report is made to us for inappropriate comments, hate speech, bullying, or harassment of any kind.</p>
                    </div>

                </Card>
                <Card className='p-8  gap-6 border flex md:flex-row shadow-2xl rounded-3xl justify-start' data-aos="zoom-right">
                    <h1 className="text-8xl text-primary">04</h1>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-base font-bold text-black">What are the rules for what I can share on the platform?</h1>
                        <p className=' leading-6 text-base font-normal'>Amhapy is committed to being a safe space for you to fully express yourself. do not hesitate to report any comment you find offensive. We do not tolerate any kind of harassment. No hate speech or bullying. Be kind and courteous and respect everyone’s privacy.</p>
                    </div>

                </Card> 
                <Card className='p-8  gap-6 border flex md:flex-row shadow-2xl rounded-3xl justify-start' data-aos="zoom-left">
                    <h1 className="text-8xl text-primary">05</h1>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-base font-bold text-black">How many Accountability Partners Do I Need?</h1>
                        <p className=' leading-6 text-base font-normal'>Quality is better than quantity. We recommend that you start with only 3-5 accountability partners and cultivate meaningful relationships with them. However, we do not put any limits on how many peers you can have as accountability partners.</p>
                    </div>

                </Card>
                <Card className='p-8  gap-6 border flex md:flex-row shadow-2xl rounded-3xl justify-start' data-aos="zoom-left">
                    <h1 className="text-8xl text-primary">06</h1>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-base font-bold text-black">Is mhapy for me?</h1>
                        <p className=' leading-6 text-base font-normal'>mhapy is for anyone who wants to improve their mental health. It doesn’t matter what stage of the journey you are at. mhapy is committed to inclusion. We are a no stigma, no judgement digital space to express yourself and connect with peers.</p>
                    </div>

                </Card>
                

            </div>
        </section>

    );
};

export default Faqs;
