'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import shad from '@/assets/imgs/shad.svg'
import { Pagination,Autoplay } from 'swiper/modules';
import Link from 'next/link';
import HandleChangeSlug from '@/components/common/HandleChangeSlug';
import Zoom from 'react-img-zoom';
import { useMediaQuery } from 'react-responsive';


function ServiceDetail({ data, lang,otherProduct,subTitle,listSlug }) {
    const [indexSlide, setIndexSlide] = useState(0)
    const swiperRef = useRef()
    const swiperRef1 = useRef()
    const [width,setWidth] = useState()
    const [height,setHeight] = useState()
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })


    useEffect(()=>{
        if(typeof window === 'undefined') return
        if (window.innerWidth > 3000){
            setWidth((window.innerWidth - (window.innerWidth - 3000))/100*36.7)
            setHeight((window.innerWidth - (window.innerWidth - 3000))/100*32.81)
        } else if(window.innerWidth > 767 && window.innerWidth <= 3000){
            setWidth(window.innerWidth/100*36.7)
            setHeight(window.innerWidth/100*32.81)
        }else {
            setWidth(window.innerWidth/100*91.46667)
            setHeight(window.innerWidth/100*81.6)
        }
    },[])

    const handleSlideChange = (swiper) => {
        setIndexSlide(swiper.realIndex);
    };
    const handlePreSlide = () => {
        swiperRef?.current?.slidePrev();
    };
    const handleNextSlide = () => {
        swiperRef?.current?.slideNext();
    };
    const handleSlideChange1 = (swiper) => {
        setIndexSlide(swiper.realIndex);
    };
    const handlePreSlide1 = () => {
        swiperRef1?.current?.slidePrev();
    };
    const handleNextSlide1 = () => {
        swiperRef1?.current?.slideNext();
    };
    
    useEffect(() => {
        // if(isMobile){
        //     let startX 
        //     document.addEventListener('touchstart',(e)=>{
        //         if(e.target.closest('.overlay-box')){
        //             startX = e.pageX
        //         }
        //     })
    
        //     document.addEventListener('touchend',(e)=>{
        //         if(e.target.closest('.overlay-box')){
        //             let deltaX = e.pageX - startX
        //             if(deltaX < 0) {
        //                 handleNextSlide1()
        //             }else{
        //                 handlePreSlide1()
        //             }
        //         }
        //     })  
        // }
    },[indexSlide])
        
    return (
        <section className="md:pt-[10.26rem] pt-[29.3rem] containerWrapper">
            <HandleChangeSlug listSlug={listSlug} />
            <div className='md:px-[4.27rem]'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 1759 2" fill="none">
                    <path d="M1 1H1758" stroke="black" stroke-linecap="round" />
                </svg>
            </div>

            <div className="md:pt-[3.18rem] pt-[7.2rem] md:mx-[12.03rem] max-md:px-[4.27rem] content_padding flex flex-col md:pb-[3.96rem]">
                <h2 className='heading max-md:pb-[7.2rem]'>
                    {data?.product_detail?.heading}
                </h2>

                <div className='flex justify-between md:mt-[2.5rem] md:mb-[4.01rem] max-md:flex-col '>
                    {/* slide1 */}
                    <div className='relative md:w-[36.66667rem] w-[100%] md:h-[32.8125rem] md:rounded-br-[9rem] rounded-br-[23rem] overflow-hidden'>
                        <div className='absolute inset-0 z-[-1]md:rounded-br-[7rem] rounded-br-[18rem]'>
                            <Image src={shad} width={1000} height={1000} className='z-[-1]  h-full w-full' />
                        </div>
                        <Swiper
                            loop={true}
                            pagination={{
                                clickable: true,
                              }}
                            speed={1000}
                            freeMode={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[Pagination,Autoplay]}
                            className="mySwiper slideFeatureImage md:w-[36.7rem] md:h-full h-[81.6rem] max-md:!rounded-br-[23rem]"
                            onSlideChange={handleSlideChange1}
                            onBeforeInit={(swiper) => {
                                if (swiperRef1) {
                                    swiperRef1.current = swiper;
                                }
                            }}
                        >
                            {data?.product_detail?.listImages?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='box box-custom relative overflow-hidden w-full h-full'>
                                        {height && <Zoom
                                        img={item?.image?.sourceUrl}
                                        zoomScale={3}
                                        transitionTime={0.8}
                                        className='w-full h-full object-cover'
                                        width={width}
                                        height={height}
                                        />}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* pre */}
                        {/* <div className='absolute overlay-box max-md:z-10 inset-0'> */}
                        <button
                            className='absolute left-[1.6rem] top-[50%] z-[10]'
                            onClick={handlePreSlide1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className='md:-[0.88542rem] md:h-[1.77083rem] w-[3.73333rem] h-[7.46667rem]' viewBox="0 0 19 32" fill="none">
                                <path d="M17 30L3 16L17 2" stroke="white" stroke-width="3" />
                            </svg>
                        </button>
                        {/* next */}

                        <button
                            className='absolute right-[1.6rem] top-[50%] z-[10]'
                            onClick={handleNextSlide1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className='md:-[0.88542rem] md:h-[1.77083rem] w-[3.73333rem] h-[7.46667rem]' viewBox="0 0 19 32" fill="none">
                                <path d="M2 2L16 16L2 30" stroke="white" stroke-width="3" />
                            </svg>
                        </button>
                        {/* </div> */}
                    </div>
                    {/* info */}
                    <div className=''>
                        <h2 className='heading md:mb-[1.3rem] md:w-[28.59rem] max-md:py-[7.47rem] max-md:!text-[6.93333rem]'>{data?.product_detail?.title}</h2>
                        <div className='flex flex-col md:w-[32rem] md:h-[21.82rem]'>
                            {data?.product_detail?.aboutProduct?.map((item, index) => (
                                <div key={index} className='flex text-[#444] md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] font-bold md:leading-[226.662%] md:tracking-[-0.06771rem]'>
                                    {/* <span className='whitespace-nowrap max-md:mr-[1rem] mr-[0.5rem]'>{item?.name}</span> */}
                                    {/* <span className='font-normal'>{item?.description}</span> */}
                                    <p className='font-normal'>
                                        <span className='whitespace-nowrap font-bold max-md:mr-[1rem] mr-[0.5rem]'>{item?.name}</span>
                                        {item?.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* slide2 */}
                <div className='flex flex-col relative max-md:pt-[10rem]'>
                    <h3 className='md:w-[28.81rem] md:h-[2.76042rem] md:mb-[0.68rem] md:text-[#444] text-[#888] md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] md:leading-[116.662%] md:tracking-[-0.06771rem]'>
                        {subTitle}
                    </h3>
                    <div className='slideOther_Item relative max-md:pt-[5.53rem] max-md:pb-[8rem]'>
                        <Swiper
                            slidesPerView={3}
                            breakpoints={
                                {
                                    768: {
                                        slidesPerView: 5
                                    }
                                }
                            }
                            modules={[Autoplay]}
                            speed={800}
                            freeMode={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="mySwiper"
                            onSlideChange={handleSlideChange}
                            onBeforeInit={(swiper) => {
                                if (swiperRef) {
                                    swiperRef.current = swiper;
                                }
                            }}
                        >
                            {otherProduct?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Link href={`/${lang}/${lang === 'vi' ? 'san-pham-dich-vu' : 'products'}/${item?.slug}`}>
                                        <Image src={item?.featuredImage?.node?.sourceUrl} width={1000} height={1000} alt={item?.featuredImage?.node?.altText} className='imageSlideOtherItem md:w-[12.96875rem] md:h-[11.92708rem] h-[27.73333rem] object-cover' />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                    {/* pre */}
                    <button
                        className='absolute left-[-2rem] top-[50%]'
                        onClick={handlePreSlide}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[0.78125rem] md:h-[1.875rem]' viewBox="0 0 19 38" fill="none">
                            <path d="M17 37L2 18.5L17 1" stroke="#888888" stroke-width="3" />
                        </svg>
                    </button>
                    {/* next */}

                    <button
                        className='absolute right-[-2rem] top-[50%]'
                        onClick={handleNextSlide}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[0.78125rem] md:h-[1.875rem]' viewBox="0 0 19 38" fill="none">
                            <path d="M2 1L17 19.5L2 37" stroke="#888888" stroke-width="3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ServiceDetail
