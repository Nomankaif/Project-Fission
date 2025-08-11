import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import left from '../../../public/images/leftarrow.svg';
import right from '../../../public/images/rightarrow.svg';

export default function TestimonialsSection() {
  const testimonials = [
    {
      title: "Fission's team felt like an extension of our own.",
      description:
        'They delivered our project ahead of schedule and above expectations – truly the gold standard of partnership.',
      author: 'Amanda Smith',
      role: 'IT Director at Instacart',
      logo: '/images/img_.svg',
    },
    {
      title: 'We were impressed by how quickly Fission understood our industry.',
      description: 'Their expertise and agile process helped us increase productivity by 50%.',
      author: 'Keith Messick',
      role: 'CTO of Redis',
      logo: '/images/img_.svg',
    },
    {
      title: 'They exceeded expectations on every metric.',
      description: 'From communication to delivery, everything was seamless and professional.',
      author: 'Sarah Johnson',
      role: 'CEO of TechNova',
      logo: '/images/img_.svg',
    },
  ];

  return (
    <section className="w-full bg-global-10 relative">
      <div className="relative w-full max-w-[1370px] mx-auto">
        <div className=" mx-[35px] md:mx-[70px] p-[41px] sm:p-[62px] md:p-[82px]">
          <div className="flex flex-col items-start">
            {/* Heading */}
            <div className="bg-global-4 rounded-[16px] px-[20px] py-[2px] mb-[14px] md:mb-[28px]">
              <span className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans font-bold uppercase text-global-2">
                Testimonials
              </span>
            </div>

            <div className="relative w-full inline-block">
              <h2 className="text-[50px] sm:text-[65px] md:text-[80px] font-anton uppercase text-global-1 relative">
                What Our Clients Say
              </h2>

              <img
                src="/images/img_vector_1.svg"
                alt="Decorative underline"
                className="absolute left-[163px] md:left-[326px] bottom-0 w-[112px] sm:w-[168px] md:w-[224px] h-[18px] sm:h-[27px] md:h-[36px]"
              />
            </div>

            {/* Swiper Slider */}
            <div className="relative w-full mt-[40px]">
              {/* Left arrow */}
              <div className="custom-prev !w-[40px] !h-[40px] absolute -left-[60px] top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                <img src={left} alt="Prev" />
              </div>

              <div className="custom-next !w-[40px] !h-[40px] absolute -right-[60px] top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                <img src={right} alt="Next" />
              </div>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                autoplay={{ delay: 5000 }}
                breakpoints={{
                  1024: { slidesPerView: 2 },
                }}
                className="w-full"
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-global-8 rounded-[20px] p-[20px] md:p-[40px] h-full flex flex-col justify-between min-h-[350px]">
                      <div className="flex flex-col gap-[10px] md:gap-[20px] flex-grow">
                        <div className="flex flex-col gap-[4px] md:gap-[8px] items-start">
                          <div className="w-[13px] sm:w-[20px] md:w-[26px] h-[2px] bg-global-1"></div>
                          <h3 className="text-[20px] sm:text-[25px] md:text-[30px] font-anton uppercase text-global-1">
                            {t.title}
                          </h3>
                          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-dm-sans italic text-global-3">
                            {t.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[15px] md:gap-[30px] items-start">
                        <p className="text-[13px] sm:text-[14px] md:text-[16px] font-dm-sans italic text-global-3 self-end">
                          - <span className="font-semibold">{t.author}</span>,{' '}
                          <span className="font-light">{t.role}</span>
                        </p>
                        <img
                          src={t.logo}
                          alt="Company Logo"
                          className="w-[36px] sm:w-[54px] md:w-[72px] h-[25px] sm:h-[38px] md:h-[50px]"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
