'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import playIcon from '@/assets/imgs/playicon.png'
import arrNext from '@/assets/imgs/arr-r.svg'
import imgVideo from '@/assets/imgs/img-video.jpg'
import ReactPlayer from 'react-player'
function VideoSlide({ dataSlideVideo }) {
  const [indexSlider, setIndexSlider] = useState(0)
  // const [isPlay, setIsPlay] = useState(false)
  const [isPlay, setIsPlay] = useState(Array(dataSlideVideo?.length).fill(false));
  const swiperRef = useRef()
  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }

  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.activeIndex)
    setIsPlay(Array(dataSlideVideo?.length).fill(false));
  }

  return (
    <div className='relative md:h-[100vh] h-[100rem] content slide-product mt-[8.5rem]'>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        onSlideChange={handleSlideChange}
        modules={[Pagination]}
        speed={1000}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        className='relative w-full h-full '
      >
        {dataSlideVideo?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className='block w-full h-full'
            >
              {({ isActive }) => (
                <div
                  className='h-full'
                >
                  <Image src={item?.background?.sourceUrl || imgVideo} width={1000} height={1000} quality={100} alt='img' className={`w-full h-full absolute z-[1] inset-0 object-cover ${isPlay[index] ? 'hidden' : ''}`} />
                  <Image 
                    onClick={() => {
                      const newIsPlay = [...isPlay];
                      newIsPlay[index] = !newIsPlay[index];
                      setIsPlay(newIsPlay);
                    }}
                    src={playIcon}
                    alt = 'icon'
                    width={200}
                    height={200}
                    quality={100}
                    className={`md:w-[5rem] bg-white rounded-[50%] shadow-md md:h-[5rem] playIconHome w-[10rem] h-[10rem] absolute z-[1] top-[50%] left-[50%] -translate-x-1/2 -translat-y-1/2 cursor-pointer ${isPlay[index] ? 'hidden' : 'block'}`}
                  />
                    {isPlay[index] && (
                      <ReactPlayer
                         onEnded={() => setIsPlay(false)}
                         className="w-full h-full video_slide_home"
                         width="100%"
                         height="100%"
                         controls={true}
                         playing={true}
                         url={item?.videoLink}
                      />
                   )}
                  <p className={`text-white text-[6.667rem] opacity-40 font-bold uppercase absolute top-[50%] -translate-y-1/2 w-full text-center ${isPlay ? 'hidden' : ''}`}>Video app</p>
                </div>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
      {/* <div className='flex absolute bottom-[3.75rem] z-10 w-full justify-between  btn-product'> */}
      <button
        onClick={handlePrevSlide}
        className='md:w-[2.78rem] md:h-[2.6rem] rotate-180 absolute md:right-[13rem] max-md:left-[3rem] md:bottom-[5rem] max-md:top-[50%] z-[1]'
      >
        <Image src={arrNext} width={'100%'} height={'100%'} alt='icon' className='max-md:hidden' />
        <svg xmlns="http://www.w3.org/2000/svg" className='md:hidden rotate-180 w-[3.73333rem] h-[7.46667rem]' viewBox="0 0 19 32" fill="none">
          <path d="M17 30L3 16L17 2" stroke="white" stroke-width="3" />
        </svg>
      </button>
      <button
        onClick={handleNextSlide}
        className='md:w-[2.78rem] md:h-[2.6rem] absolute md:right-[10rem] right-[3rem] md:bottom-[5rem] max-md:top-[50%] z-[1]'
      >
        <Image src={arrNext} width={'100%'} height={'100%'} alt='icon' className='max-md:hidden' />
        <svg xmlns="http://www.w3.org/2000/svg" className='md:hidden w-[3.73333rem] h-[7.46667rem]' viewBox="0 0 19 32" fill="none">
          <path d="M2 2L16 16L2 30" stroke="white" stroke-width="3" />
        </svg>
      </button>
      {/* </div> */}
      <span className='absolute max-md:hidden bottom-[5rem] right-[2.26rem] text-[3.64583rem] text-white font-bold z-10 leading-[1]'>{indexSlider + 1}/{dataSlideVideo?.length}</span>
    </div>
  )
}

export default VideoSlide
