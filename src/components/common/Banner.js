'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useMediaQuery } from 'react-responsive'

function Banner({
  image,
  imageMb,
  title,
  description,
  classTitle,
  classDesc,
  positionAndBox,
  background,
  altText,
  altTextMb,
  id,
  check,
  textAboutUs
}) {
  const [click, setClick] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
  const refScroll = useRef()
  gsap.registerPlugin(ScrollToPlugin)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 && click) {
        setClick(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [click])

  const handleArrowClick = () => {
    setClick(true)
    gsap.to(window, { duration: 1, scrollTo: { y: refScroll.current.offsetTop, autoKill: false } })
  }
  return (
    <div>
      <section
        id={id}
        className={`banner_home md:w-full md:h-[70vh] lg:h-[100vh] h-[100rem] relative ${background}`}
      >
        <Image
          src={isMobile && imageMb ? imageMb : image}
          priority
          alt={isMobile && altTextMb ? altTextMb : altText || 'banner'}
          width={1800}
          height={1000}
          quality={100}
          className='w-full h-full md:rounded-br-[13.54rem] rounded-br-[16rem] object-cover '
        />
        <div
          className='overlay absolute top-0 w-full h-[16rem]'
          style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.00) 89.06%)' }}
        ></div>
        {/* text */}
        <div className={`absolute z-[1] ${positionAndBox}`}>
          <p
            className={`text-[#fff] font-bold leading-[116.662%] max-md:mb-[1.2rem] md:tracking-[-0.14063rem] title_common ${classTitle}`}
            dangerouslySetInnerHTML={{ __html: `${title}` }}
          ></p>
          <p className={`font-normal text-[#fff] ${classDesc}`}>{description}</p>
          <svg
            onClick={handleArrowClick}
            xmlns='http://www.w3.org/2000/svg'
            className='arrow_down md:w-[3.1055rem] w-[6.66667rem] h-[5.86667rem] cursor-pointer md:h-[2.6875rem] md:mt-[2rem] mt-[3.37rem]'
            viewBox='0 0 43 50'
            fill='none'
          >
            <path
              d='M43 31.8963L43 20.7042L25.0162 35.5923L25.0162 -7.2201e-07L17.9911 -1.00405e-06L17.9911 35.5923L2.82936e-06 20.7042L2.29671e-06 31.8962L21.5 49.6884L43 31.8963Z'
              fill='white'
            />
          </svg>
        </div>
        {/* about us text feature */}
        <div
          className={`${
            check
              ? 'flex absolute md:right-[12.24rem] md:bottom-[20.9rem] max-md:left-[4.8rem] bottom-[13.27rem] max-md:flex-row-reverse justify-center items-center'
              : 'hidden'
          }`}
        >
          <h2 className='lg:text-[3.4375rem] uppercase text-[#fff] text-[4.5rem] max-md:text-[6.93333rem] max-md:w-[43rem] leading-[1.2] font-bold md:w-[30rem] lg:w-[25rem] text-start md:text-end'>
            {textAboutUs}
          </h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='lg:w-[5.96302rem] md:w-[7rem] md:h-[9.7rem] lg:h-[7.69896rem] mw-[11.20427rem] h-[13.9rem]'
            viewBox='0 0 43 53'
            fill='none'
          >
            <path
              d='M33.0881 40.0509L42.0163 51.1118H34.0425L29.305 45.2855C27.3961 47.5513 25.4673 49.2051 23.5136 50.2419C21.0579 51.5822 18.1497 52.2548 14.7892 52.2548C9.36071 52.2548 5.33902 50.4999 2.72419 46.9848C0.904743 44.537 0 41.7958 0 38.7663C0 35.1602 0.755616 32.242 2.26685 30.0116C3.77809 27.7812 6.79558 25.3485 11.3144 22.7136C9.3607 20.2404 8.0334 18.3438 7.3275 17.0288C6.44263 15.3194 6.0002 13.4683 6.0002 11.4807C6.0002 8.31464 6.99941 5.68976 8.99782 3.6111C11.2249 1.29979 14.1778 0.141602 17.8564 0.141602C21.5351 0.141602 24.4681 1.24921 26.5112 3.46948C28.281 5.36607 29.1708 7.75831 29.1708 10.6462C29.1708 13.8122 28.1467 16.5989 26.1036 19.0013C24.9453 20.3871 22.9469 22.051 20.1034 23.9931L29.305 35.054C29.8717 33.5064 30.2694 32.2572 30.4981 31.3114C30.7268 30.3657 30.9853 28.9647 31.2836 27.1187H37.1446C37.1446 28.8282 36.7916 30.7804 36.0907 32.9804C35.3848 35.1754 34.3856 37.5322 33.0931 40.0509H33.0881ZM26.1036 41.022L14.7892 26.9821C11.5878 29.0608 9.47505 30.6944 8.45098 31.8728C6.90495 33.6278 6.13442 35.7773 6.13442 38.3212C6.13442 41.1636 7.30264 43.3737 9.64406 44.9416C11.3939 46.12 13.2432 46.7117 15.1969 46.7117C19.7654 46.7117 23.3993 44.8151 26.1036 41.027V41.022ZM16.902 19.8712C18.8556 18.5562 20.2177 17.4233 20.9932 16.4725C22.4448 14.8086 23.1756 13.003 23.1756 11.066C23.1756 9.12891 22.5492 7.54083 21.3015 6.59507C20.3669 5.87689 19.2235 5.52286 17.8614 5.52286C15.6343 5.52286 14.0088 6.24103 12.9897 7.67233C12.3285 8.62315 12.0004 9.75099 12.0004 11.071C12.0004 12.4821 12.582 14.1106 13.7403 15.9617C14.5804 17.3019 15.6393 18.6068 16.9119 19.8813L16.902 19.8712Z'
              fill='white'
            />
          </svg>
        </div>
      </section>

      <div ref={refScroll}></div>
    </div>
  )
}

export default Banner
