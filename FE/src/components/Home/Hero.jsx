import React, { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex gap-4 w-full mb-40 md:mb-4 lg:px-40 underline-none ">
      <section className="w-full flex underline-none flex-col relative bg-primary-500 mt-0">
        <div className="md:flex-row flex flex-col w-full justify-between gap-10 md:mt-28 relative object-contain">
          <div className="md:text-left  pt-10 md:pt-20 w-full">
            <h1
              className="font-bold text-primary  text-3xl md:text-5xl lg:text-7xl"
              data-aos="fade-right"
            >
              AI Virtual Assistant for Psychotherapists
            </h1>
            <p className="font-normal text-base py-10" data-aos="fade-up">
              mhapy is a chatbot and social journal that tracks mental health
              symptoms, administers homework and assessment tests, sends
              automated reminders, and engages clients. Keep track of your
              clients anxiety, depression, sleep symptoms and more. This
              empowers you with information during your sessions with your
              clients to provide care tailored for the whole person.
            </p>
            <div
              class="md:flex-row flex  justify-start pt-4 mb-10 gap-[10px] w-full "
              data-aos="fade-up"
            >
              <a
                href=""
                class="flex px-[10px] gap-2 border-2  justify-center items-center h-fit rounded-lg shadow-inner py-2 md:text-[12px] text-[10px] bg-black text-white"
                role="button"
              >
                <img
                  data-aos="slide-left"
                  height={20}
                  width={20}
                  src="https://i.imgur.io/6Qf5V8c_d.webp"
                  className="w-10 h-fit"
                  alt="playstore"
                />
                <div className="leading-3">
                  <p className="sm:text-sm text-xs">Get it on</p>
                  <h4 className="font-bold md:text-1xl text-xs lg:text-2xl">
                    Google Play
                  </h4>
                </div>
              </a>

              <a
                href=""
                className="flex px-[10px] gap-2 border-2 justify-center border-black items-center h-fit rounded-lg shadow-inner py-2 md:text-[12px] text-[10px]"
                role="button"
              >
                <img
                  src="https://i.imgur.io/H4bHBxx_d.webp"
                  height={20}
                  width={20}
                  className="w-10 h-fit"
                  alt="apple store"
                />
                <div data-aos="fade-up" className="leading-3">
                  <p className="sm:text-xs text-xs">Download on</p>
                  <h4 className="font-bold md:text-1xl text-xs lg:text-2xl">
                    Apple store
                  </h4>
                </div>
              </a>
            </div>
          </div>

          <div
            className="w-full relative object-fit mx-auto flex justify-center"
            data-aos="fade-in"
          >
            <img
              src={"../../src/assets/images/slider-bg.png"}
              alt="logo"
              className="absolute"
              height={600}
              width={600}
              priority={true}
            />
            <div className="absolute top-40 ">
              <Carousel autoplay="true" loop="true" className="">
                <div className="flex justify-center">
                  <img
                    src={"../../src/assets/images/onboarding-01.png"}
                    className="object-contain right-1 "
                    alt="logo"
                    height={250}
                    width={250}
                    priority={true}
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src={"../../src/assets/images/onboarding-02.png"}
                    className="object-fit "
                    alt="logo"
                    height={250}
                    width={250}
                    priority={true}
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src={"../../src/assets/images/splash-screen.png"}
                    className="object-fit "
                    alt="logo"
                    height={250}
                    width={250}
                    priority={true}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
