import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Mental = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <section className="w-full relative flex flex-col  bg-primary-500 bg[url(../../src/assets/images/modal.png)] ">
            <div className="flex md:flex-row flex-col-reverse md:px-20 w-full md:mt-20 mt-40 justify-between items-center py-10 relative gap-10 object-contain">


                <div className="w-full object-fit ">
                    <img src={"../../src/assets/images/brain-1.png"} height={700} width={700} className="object-cover rounded-3xl" alt="man wearing glasses" data-aos="fade-right"/>
                </div>
                <div className="text-left space-y-8 w-full">
                    <h1 className="font-bold text-2xl md:text-4xl text-primary" data-aos="fade-left">
                        Get your own mental health chatbot.
                    </h1>
                    <p className="font-normal text-base leading-10" data-aos="fade-right">
                        Do you have a website or mobile application?
                        You can integrate a mental health chatbot into your website or application. Depending on your needs, clients can book appointments, learn about common mental health conditions and receive basic mental health support with a chatbot. You can also use a chatbot as a means to generate leads to get new clients.
                    </p>
                </div>
            </div>
            
        </section>

    );
};

export default Mental;
