'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
function SlidePartners({ data }) {
  const swiperRef = useRef()
  const dataSlide = data?.concat(data)
  // useEffect(()=>{
  //   let startX 
  //   document.addEventListener('touchstart',(e)=> {
  //     if(e.target.closest('.overlay_slide')){
  //       startX = e.pageX
  //       swiperRef.current.pause()
  //     }
  //   })

  //   document.addEventListener('touchend',(e) => {
  //     if(e.target.closest('.overlay_slide')){
  //       swiperRef.current.resume()
  //       let deltaX = e.pageX - startX
  //       if(deltaX > 0) {
  //         swiperRef.current?.slideNext()
  //       }else if(deltaX < 0){
  //         swiperRef.current?.slidePrev()
  //       }

  //       if(deltaX === 0) {
  //         swiperRef.current.pause()
  //       }else{
  //         swiperRef.current.resume()

  //       }
  //     }
  //   })
  // },[])
  return (
    <div className='mt-[6.93rem] slide-partners relative'>
      {/* <div className='overlay_slide absolute inset-0 max-md:z-10'></div> */}
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 600,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        onBeforeInit={(swiper) => {
          if (swiperRef) {
            swiperRef.current = swiper;
          }
        }}
        speed={500}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className='w-full mySwiper slide-partners'
      >
        {dataSlide?.map((item, index) => {
          return (
            <SwiperSlide className='w-[20%] partner-item' key={index * Math.random()}>
              <Image
                src={item?.image?.sourceUrl}
                width={500}
                height={500}
                alt='partners'
                className={`object-contain md:w-[15.625rem] md:h-[15.625rem] w-full h-[70.53333rem]`}
                priority
              />
            </SwiperSlide>
           
          )
        })}
      </Swiper>
            
    </div>
  )
}

export default SlidePartners
