import { ContactForm } from "../components/Contact-form";
import Layout from "../components/LayoutSite";

function Contact() {
  return (
    <>
    <Layout>
      <div className="flex gap-4 w-full mb-40 md:mb-4 md:px-40 underline-none ">
        <section className="w-full flex underline-none flex-col  relative bg-primary-500 mt-0">
          <div className="md:flex-row flex flex-col w-full justify-between gap-10 md:mt-28 relative object-contain">
            <div className="md:text-left pt-10 space-y-8 md:pt-20 w-full">
              <h1 className="font-bold text-primary text-3xl md:text-6xl flex">
                Let's hear from you.
              </h1>
              <h1 className="font-bold text-primary text-xl md:text-3xl flex">
                How can we improve MHApy?
              </h1>
              <div className="">
                <p className="font-bold">What is mhapy?</p>
                <p className="font-normal text-base">
                  “mhapy is a chatbot that tracks anxiety, depression, sleep and
                  monitors the user's mental health. mhapy also connects the
                  user with peers so that they can support each other.”
                </p>
              </div>
            </div>
            <div className="w-full relative object-fit mx-auto flex justify-center">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
      </Layout>
    </>
  );
}

export default Contact;
