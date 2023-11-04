import React from 'react'
import { PricingCard } from '../components/PricingCard'

export default function Pricing() {
  return (
    <>
      <div className='column'>
        <h2 className='p-11 text-3xl'>Pricing Plan</h2>
        <p className='page-titl md:text4-xl text-2xl text-center text-primary  font-bold my-4'>Mhapy is absolutely Free for Individuals</p>
        <div className='text-center py '>
          <p>Are you a psychotherapist with a private practice? Do you provide mental health support of any kind?</p>
          <p>All plans have a monthly payment schedule.</p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row flex-wrap gap-10 md:flex-row py-10 justify-center'>
        <PricingCard
          title="Basic Plan"
          headerColor="white"
          textColor=""
          headerVariant="gradient"
          items={[
            "Follow your clients progress",
          ]}
          price="120"
          buttonText="Contact Us" />

        <PricingCard
          title="Api Plan"
          headerColor="white"
          textColor=""
          headerVariant="filled"
          items={[
            "Follow your clients progress",
            "Get your own chatbot on your website/app",
            "$0.01 per request",
          ]}
          price="300"
          buttonText="Contact Us" />


        <PricingCard
          title="Premium Plan"
          headerColor="white"
          textColor=""
          headerVariant="filled"
          items={[
            "Follow your clients progress",
            "Get your own chatbot on your website/app",
            "$0.01 per request",
          ]}
          price="399"
          buttonText="Contact Us" />


      </div>
    </>
  )
}
