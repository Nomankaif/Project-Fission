import React from 'react';

export default function ServicesSection({
  sectionLabel,
  sectionTitle,
  sectionDescription,
  boxes = [],
}) {
  return (
    <section className="w-full bg-global-10">
      <div className="w-full max-w-[1102px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[56px] md:py-[112px]">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-[30px] lg:gap-[60px] mb-[74px] md:mb-[148px]">
            {/* Left Content */}
            <div className="flex flex-col items-start w-full lg:w-auto">
              {sectionLabel && (
                <div className="bg-global-4 rounded-[16px] px-[20px] py-[2px] mb-[8px] md:mb-[-4px]">
                  <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-bold leading-[22px] sm:leading-[24px] md:leading-[27px] text-center uppercase text-global-2">
                    {sectionLabel}
                  </span>
                </div>
              )}

              {sectionTitle && (
                <h2 className="text-[50px] sm:text-[65px] md:text-[80px] font-anton font-normal leading-[75px] sm:leading-[98px] md:leading-[121px] text-left uppercase text-global-1">
                  {sectionTitle}
                </h2>
              )}
            </div>

            {/* Right Content */}
            {sectionDescription && (
              <div className="w-full lg:w-[48%] lg:self-end">
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-dm-sans font-normal leading-[20px] sm:leading-[23px] md:leading-[26px] text-left text-global-4 md:mt-24">
                  {sectionDescription}
                </p>
              </div>
            )}
          </div>

          {/* Services Grid */}
          <div className="flex flex-col lg:flex-row items-stretch gap-[20px] md:gap-[40px]">
            {boxes.map((box, index) => (
              <div
                key={index}
                className={`flex flex-col items-center w-full ${box.layoutClass || ''}`}
              >
                <div className={`${box.bgColor} rounded-[30px] p-[16px] md:p-[28px] w-full h-full`}>
                  <div className="flex flex-col gap-[8px] md:gap-[16px] items-end h-full">
                    {/* Icon & Title */}
                    <div className="flex flex-col gap-[4px] md:gap-[8px] items-start w-full">
                      {box.icon && (
                        <img
                          src={box.icon}
                          alt={box.title}
                          className="w-[36px] h-[36px] md:w-[50px] md:h-[50px]"
                        />
                      )}
                      <h3
                        className={`text-[28px] sm:text-[36px] md:text-[44px] font-anton font-normal leading-[34px] sm:leading-[42px] md:leading-[52px] text-left uppercase ${box.textColor} w-full`}
                      >
                        {box.title}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <div className="w-[32px] h-[32px] md:w-[44px] md:h-[44px] bg-global-10 rounded-[14px] md:rounded-[20px] flex items-center justify-center">
                      <img
                        src="/images/img_arrow_small_left.svg"
                        alt="Arrow"
                        className="w-[18px] h-[18px] md:w-[26px] md:h-[26px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
