import HeroSection from '@/components/common/HeroSection';
import React from 'react';
import founder from '/images/founder.svg';
import underlineImage from '/images/img_vector_3.svg';
import { Banner } from '@/components/common/Banner';
import { Footer } from '@/components/common/Footer';

export const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <HeroSection
          subtitle="About Fission"
          title="Built on 15 Years of Grit & "
          underlineWord="INNOVATION"
          underlineImage="/images/img_vector_4.svg"
          description={`Founded in Hyderabad in 2010, Fission is a self-funded tech conglomerate reflecting our belief: lasting impact is built, not bought.
We've grown from a two-person startup into a global name with a team of 80+ and clients across more than 100 companies worldwide.
Our mission? To create one million jobs.`}
        />
      </section>

      {/* Founders Section */}
      <section className="w-full bg-white py-16  ">
        <div className="mb-16 relative inline-block w-full ">
          <h2 className="text-[80px] font-anton uppercase text-black relative z-10 ml-[40%] w-ful left-0">
            Founders
          </h2>
          <img src={underlineImage} alt="Underline" className="ml-[42%]" />
          <h3 className="text-[50px] ml-[47%] font-anton uppercase text-black mt-4">
            Vision Meets Expertise
          </h3>
        </div>

        {/* First Founder */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-8 mb-24">
          {/* Image with green box & intro inside */}
          <div className="relative">
            <img
              src={founder}
              alt="Sandeep Nukarapu"
              className="w-[300px] h-[300px] object-cover rounded-xl grayscale"
            />

            {/* Green name box - bottom left overlapping image */}
            <div className="absolute font-anton text-[45px] bottom-14 right-[280px] bg-[#A6FF72] text-black px-4 py-2 rounded-lg shadow-md  uppercase w-[400px]">
              Sandeep Nukarapu
            </div>

            {/* Intro text - bottom right overlapping image */}
            <div className="absolute font-dm-sans  bottom-[30px] left-[320px] w-[280px] text-gray-700 text-xs  text-left">
              <p className="font-medium leading-[26px] text-[20px] mb-8 ">Founder & CEO</p>
              <p className="text-[20px] leading-[26px]">
                Spirited leader driving Fission’s mission to create jobs and deliver impact.
              </p>
            </div>
          </div>
        </div>

        {/* Second Founder */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="relative">
            <img
              src={founder}
              alt="Bhargav Kandimalla"
              className="w-[300px] h-[300px] object-cover rounded-xl grayscale"
            />
            {/* Green name box - top right */}
            <div className="absolute top-4 left-[270px]  text-[45px] bg-[#A6FF72] text-black px-4 py-6 rounded-lg shadow-md font-anton text-lg uppercase w-[500px]">
              Bhargav Kandimalla
            </div>
            {/* Intro text - bottom left */}
            <div className="absolute bottom-[40px]  font-dm-sans right-[320px] w-[280px] text-gray-700 text-xs text-right ">
              <p className="font-medium leading-[26px] text-[20px] mb-8">Co-Founder & CTO</p>
              <p className="text-[20px] leading-[26px]">
                Oversees tech innovation, ensuring solutions are robust, scalable, and future-ready.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen flex flex-col items-center py-12 px-4 bg-[#1D1D1D]">
          {/* Header */}
          <div className=" rounded-2xl px-8 py-6 mb-12 ">
            <h1 className="text-[#EBEBEB] font-anton text-[80px] font-bold text-center tracking-wider">
              OUR JOURNEY
              <img src={underlineImage} alt="Underline" className="ml-[42%]" />
            </h1>
            <p className="text-[#EBEBEB] font-anton text-[50px]  text-center mt-1 tracking-wide md:ml-[10%]">
              & GROWTH TIMELINE
            </p>
          </div>

          {/* Timeline */}
          <div className="relative font-anton ">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 2010 */}
              <div className="relative flex items-center justify-between  w-[780px] ">
                {/* Left Content */}
                <div className="w-[360px]   pr-8 text-right">
                  <h2 className="text-white text-[50px] font-bold mb-2 ">2010</h2>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>

                {/* Right Content */}
                <div className=" pl-8 w-[380px] font-dm-sans">
                  <p className="text-[#6D7769] text-[22px] leading-relaxed">
                    Began delivering IT services from
                    <br />
                    Hyderabad with U.S. clients.
                  </p>
                </div>
              </div>

              {/* 2018-2021 */}
              <div className="relative flex items-center justify-between  w-[780px] ">
                {/* Left Content */}
                <div className="w-[360px] font-dm-sans  pr-8 text-right">
                  
                  <p className="text-[#6D7769] text-[22px] leading-relaxed">
                    Launched Neodrafts 
                    <br />
                    and PixelRevs
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>

                {/* Right Content */}
                <div className=" pl-8 w-[380px] font-anton">
                  <h2 className="text-white text-[50px] font-bold mb-2 ">2018-2021</h2>
                </div>
              </div>

              {/* 2020-2023 */}
                <div className="relative flex items-center justify-between  w-[780px] ">
                {/* Left Content */}
                <div className="w-[360px]   pr-8 text-right">
                  <h2 className="text-white text-[50px] font-bold mb-2 ">2020-2023</h2>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>

                {/* Right Content */}
                <div className=" pl-8 w-[380px] font-dm-sans">
                  <p className="text-[#6D7769] text-[22px] leading-relaxed">
                    Deployed 9 SaaS 
                    <br />
                   platforms.
                  </p>
                </div>
              </div>

              {/* 2025 */}
                  <div className="relative flex items-center justify-between  w-[780px] ">
                {/* Left Content */}
                <div className="w-[360px] font-dm-sans  pr-8 text-right">
                  
                  <p className="text-[#6D7769] text-[22px] leading-relaxed">
                    Global tech hub, 80+ experts, 
                    <br />
                   offices  in Hyderabad & Las Vegas. 
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>

                {/* Right Content */}
                <div className=" pl-8 w-[380px] font-anton">
                  <h2 className="text-white text-[50px] font-bold mb-2 ">2025</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-[80px]  font-anton leading-tight">
            OUR MISSION:
            <br />
            <span >
              BEYOND PROFITS
            </span>
          </h2>
          <p className="font-dm-sans text-[#6D7769] text-[20px] mt-4 max-w-md">
            Fission isn’t here to chase unicorn valuations—it’s here to empower
            one million people with meaningful work. We’ve built every venture
            and product with that intention, preserving independence and
            prioritizing mission over margins.
          </p>
        </div>

        {/* Right Side - Image */}
        <div>
          { <img
            src='/images/img_rectangle_24.png'
            alt="Mission"
            className="rounded-xl w-full object-cover"
          /> }
        </div>

      </div>
    </section>

      <section>
        <Banner/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
};
