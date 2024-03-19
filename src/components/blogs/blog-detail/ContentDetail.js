'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
function ContentDetail({ data, lang, dataSlide }) {

    return (
        <section className='max-md:px-[4.27rem] max-md:pt-[7rem]'>
            <div className='flex flex-col md:pt-[4.11rem] md:pb-[5.25rem]'>
                {/* Text heading */}
                <div className='flex justify-end md:px-[12rem]'>
                    <h2 className='heading md:w-[44.84375rem] max-md:text-justify max-md:!tracking-[-0.27733rem] max-md:!text-[6.93333rem] md:line-clamp-5 md:tracking-[-0.1375rem] text-justify'>{data?.heading}</h2>
                </div>
                <div className='line-detail'></div>
                {data?.listcontent?.map((item, index) => (
                    <div key={index}>
                        <div className={`flex md:justify-end md:px-[12rem] ${index === data?.listContent?.length - 1 ? 'max-md:flex-col-reverse' : 'max-md:flex-col'}`}>
                            <h2 className={`heading md:w-[30.40625rem] max-md:!text-[6.93333rem] max-md:mb-[4rem] ${index === 0 ? 'w-[60rem]' : ''}`}>{item?.titleContent}</h2>
                            <div>
                                <div
                                    className={`description content_news !font-normal md:!tracking-[-0.02708rem] md:!leading-[1.2] md:w-[44.47917rem] text-justify md:mb-[3rem] mb-[7rem]`}
                                    dangerouslySetInnerHTML={{ __html: `${item?.text}`}}
                                >
                                </div>
                                <div className={`flex gap-[2.6rem] max-md:flex-col`}>
                                    {item?.gallery?.map((gallery, index) => {
                                        if (item?.gallery?.length < 2) {
                                            return (<Image key={index} src={gallery?.sourceUrl} alt={gallery?.altText} width={1000} height={1000} quality={100} className='md:w-[44.53125rem] w-full h-[61.05333rem] md:h-[29.73958rem] object-cover' />)
                                        } else {
                                            return (<Image key={index} src={gallery?.sourceUrl} alt={gallery?.altText} width={1000} height={1000} quality={100} className={`md:w-[20.98958rem] w-full h-[61.05333rem] md:h-[14.01042rem] object-cover ${index !== 0 ? 'max-md:hidden' :'' }`} />)
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={`line-detail ${index === 1 && 'max-md:hidden'}`}></div>
                    </div>
                ))}
            </div>
            <div className='md:mr-[4.17rem] md:ml-[4.17rem] md:pb-[2.67rem] flex md:overflow-x-scroll max-md:flex-col slideBlog_detail'>
                <h2 className={`heading md:w-[30.40625rem] md:hidden max-md:!text-[6.93333rem] max-md:mb-[4rem]`}>{dataSlide?.subtitleMobile}</h2>
                <div className='max-md:hidden w-full'>
                    <Swiper
                        slidesPerView={3}
                        className="mySwiper"
                    >
                        {dataSlide?.othernews?.map((blog, index) => (
                            <SwiperSlide key={index}>
                                <Link href={`/${lang}/tin-tuc-su-kien/${blog?.slug}`} className={`flex flex-shrink-0 flex-col blogItem_hidden md:mr-[2.6rem]`}>
                                    <Image src={blog?.featuredImage?.node?.sourceUrl} width={1600} height={1000} quality={100} alt={blog?.featuredImage?.node?.altText || 'img'} className=' w-full h-[91.46667rem] pointer-events-none md:h-[19.89583rem] object-cover' />
                                    <p className='description !font-normal md:mt-[2.08rem] max-md:my-[5rem] flex justify-center'>{blog?.news?.name}</p>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    )
}

export default ContentDetail
