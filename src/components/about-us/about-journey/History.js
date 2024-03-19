'use client'
import React, { useRef, useState } from 'react'
import jour from '@/assets/imgs/jour-img.jpg'
import circle from '@/assets/imgs/circle.svg'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

function History({ data }) {
  const swiperRef = useRef()
  const [selected,setSelected] = useState(0)
  const handleSelect = (index) => {
    swiperRef.current.slideTo(index)
    setSelected(index)
  }

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  return (
    <section className='max-md:hidden'>
      <div className='relative mt-[2rem] w-fit md:pl-[4.17rem] '>
        <div className='flex gap-[0.73rem] ml-[1.35rem] border-bottom border-dashed border-[#444] mt-[0.83rem]'>
          {data?.journey?.map((item, index) => (
            <div onClick={() => handleSelect(index)} key={index} className='flex items-center justify-center'>
              <span className='lg:text-[0.78125rem] md:text-[1.2rem] text-black year-history'>{item?.year}</span>
              <div className={`absolute bottom-[-0.235rem] w-[0.6rem] h-[0.6rem] rounded-[50%] border border-solid border-[#000] ${index === selected ? 'bg-[#00A84F]' :'bg-[#fff]'}`}></div>
            </div>
          ))}
        </div>
        <div className='line-sm mt-[0.8rem]'></div>
      </div>
      {/* <SlideHistory /> */}

      <div className='mt-[6.93rem] pl-[4.32rem] pr-[4.17rem] slide-history relative mb-[5.3rem]'>
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 4
            }
          }}
          modules={[Autoplay]}
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          loop={false}
          centeredSlides={false}
          allowTouchMove={true}
          className='w-full'
          onBeforeInit={(swiper) => {
            if (swiperRef) {
              swiperRef.current = swiper;
            }
          }}
          onSlideChange={(swiper)=>{
            setSelected(swiper.activeIndex)
          }}
        >
          {data?.journey?.map((item, index) => {
            return (
              <>
                <SwiperSlide key={index * Math.random()}>
                  <div className='mr-[2rem] flex justify-center flex-col item-history relative cursor-grab'>
                    <Image
                      src={item?.img?.sourceUrl}
                      width={1000}
                      height={1000}
                      alt={item?.img?.altText || "history"}
                      className='object-cover h-[15.1rem] image'
                    />
                    <p className='mt-[0.5rem] text-[1.41rem] xl:text-[1.35147rem] min-h-[6.5rem] line-clamp-3'>{item?.text}</p>
                    <span className='text-[#444] font-bold text-[1.875rem] text-center block year'>{item?.year}</span>
                    <Image src={circle} width={'100%'} height={'100%'} alt='circle' className='absolute bottom-0 left-[50%] w-[0.9375rem] h-[0.9375rem] object-cover circle' />
                  </div>
              </SwiperSlide>

              
              </>
            )
          })}
        </Swiper>
        <div className='line absolute top-[calc(50%)] !w-[90%]'></div>
              <div
                onClick={handlePrevSlide}
                className='md:w-[2rem] md:h-[2rem]  left-[3rem] top-[50%] -translate-y-2/4 absolute z-[19]'
              >
                <svg xmlns="http://www.w3.org/2000/svg"  className='md:w-[0.78125rem] md:h-[1.875rem]' viewBox="0 0 19 38" fill="none">
                  <path d="M17 37L2 18.5L17 1" stroke="#888888" stroke-width="3"/>
                </svg>
              </div>

              <div
                onClick={handleNextSlide}
                className='md:w-[2rem] md:h-[2rem]  right-[3rem]  top-[50%] -translate-y-2/4 absolute z-[19]'
              >
                <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[0.78125rem] md:h-[1.875rem]' viewBox="0 0 19 38" fill="none">
                  <path d="M2 1L17 19.5L2 37" stroke="#888888" stroke-width="3"/>
                </svg>
              </div>
      </div>


      {/*  */}
      <div className='flex justify-between content border-t border-solid border-[#444] pb-[8.8rem]'>
        <p className={`lg:text-[1.35417rem] md:text-[1.5rem] text-justify text-[#444] w-[44.375rem] md:tracking-[-0.02708rem] pt-[3.96rem] text-content-journey`} dangerouslySetInnerHTML={{ __html: `${data?.subdescription}` }}></p>
        <Image src={jour} width={'100%'} height={'100%'} className='w-[36.66rem] object-cover h-[50.625rem] rounded-br-[9.73rem]' alt='jour' />
      </div>
    </section>
  )
}

export default History