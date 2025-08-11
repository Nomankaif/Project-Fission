import React from 'react'
import Button from '../ui/Button'

export const Banner = (props) => {
  return(
     <section className="w-full bg-global-10 relative">
        <div className="absolute left-[3px] md:left-[6px] top-0 w-[191px] sm:w-[287px] md:w-[382px] h-[191px] sm:h-[287px] md:h-[382px]">
          <img
            src="/images/img_mask_group_light_green_300.svg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute right-0 top-[152px] sm:top-[228px] md:top-[305px] w-[234px] sm:w-[351px] md:w-[468px] h-[311px] sm:h-[467px] md:h-[622px]">
          <img
            src="/images/img_mask_group.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-[35px] md:py-[70px]">
            <div className="bg-global-2 rounded-[40px] p-[30px] sm:p-[45px] md:p-[60px]">
              <div className="flex flex-col items-center gap-[15px] md:gap-[30px]">
                <div className="flex items-center gap-[5px] md:gap-[10px] border border-global-2 rounded-[16px] px-[10px] py-[5px]">
                  <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-global-4 rounded-[3px] md:rounded-[4px]"></div>
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-bold leading-[22px] sm:leading-[24px] md:leading-[27px] text-center uppercase text-global-5">
                    Let's Talk
                  </span>
                </div>

                <h2 className="text-[50px] sm:text-[65px] md:text-[80px] font-anton font-normal leading-[55px] sm:leading-[70px] md:leading-[85px] text-center uppercase text-global-7 w-full">
                  <span>Ready to </span>
                  <span className="text-global-5">Transform</span>
                  <span> Your IT Strategy?</span>
                </h2>

                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans font-normal leading-[20px] sm:leading-[23px] md:leading-[26px] text-center text-global-4 w-full lg:w-[68%]">
                  Let's discuss how our experts can solve your IT challenges and drive your business
                  forward. We offer a free, no-obligation consultation to assess your needs and
                  chart a path to success.
                </p>

                <Button
                  variant="primary"
                  size="medium"
                  rightImage={{
                    src: '/images/img_vector.svg',
                    width: 30,
                    height: 30,
                  }}
                  className="bg-global-4 text-global-1 px-[10px] sm:px-[35px] md:px-[50px] py-[4px] sm:py-[6px] md:py-[8px] rounded-[22px]"
                >
                  Get Your Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

   )

 }