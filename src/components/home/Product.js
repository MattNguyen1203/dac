'use client'
import { useRef, useState } from 'react'
import SlideProduct from './SlideProduct'
function Product({ lang, dataProduct,slugProducts, dataProductList }) {
  const [indexSlider, setIndexSlider] = useState(0)
  const swiperRef = useRef()
  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }

  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.activeIndex)
  }

  return (
    <div className='product md:h-[56.25rem] flex md:mt-[4.11rem] max-md:mt-[9rem] max-md:flex-col'>
      <div className='md:w-[24rem] md:text-[3.4375rem]  md:tracking-[-0.17188rem] max-md:px-[4.27rem] md:bg-[#444] flex flex-col justify-between md:text-white pb-[9rem] md:pt-[7rem] md:pb-[2.88rem] md:pl-[3.91rem]'>
        <h3 className='title text-[8.53333rem] leading-[116.662%] md:text-[3.4375rem] font-bold md:pr-[1.5rem] max-md:text-[#444]'>{dataProduct?.contentLeft?.title}</h3>
        <p className='desc md:pr-[5rem] max-md:mt-[4rem] md:text-[1.5rem] lg:text-[1.35417rem] tracking-[-0.09979rem] leading-[1.2] text-justify text-[4.26667rem] max-md:text-[#888]' dangerouslySetInnerHTML={{ __html: `${dataProduct?.contentLeft?.description}` }}></p>
      </div>
      <div className='md:w-[76rem] h-full'><SlideProduct slugProducts={slugProducts} lang={lang} dataProductList={dataProductList} /></div>
    </div>
  )
}

export default Product
