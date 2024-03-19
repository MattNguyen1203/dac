'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function ItemBlogMobile({ data, lang, dataSlide }) {
    const [number, setNumber] = useState(1)
    const handleClick = () => {
        setNumber(number + 1)
    }
    const dataOtherNews = dataSlide?.othernews?.slice(0, number)
    return (
        <section className='md:hidden'>
            {dataOtherNews?.map((blog, index) => (
                <Link href={`/${lang}/tin-tuc-su-kien/${blog?.slug}`} key={index} className={`flex flex-shrink-0 flex-col md:mr-[2.6rem]`}>
                    <Image src={blog?.featuredImage?.node?.sourceUrl} width={1600} height={1000} quality={100} alt={blog?.featuredImage?.node?.altText || 'img'} className='w-full h-[91.46667rem] pointer-events-none object-cover' />
                    <p className='description !font-normal md:mt-[2.08rem] max-md:my-[5rem] flex justify-center'>{blog?.news?.name}</p>
                </Link>
            ))}
            {
                number < dataSlide?.othernews?.length && <p onClick={handleClick} className='md:hidden text-[4.26667rem] leading-[116.662%] underline text-center text-[#00A84F] max-md:mb-[7rem] cursor-pointer'>Xem thêm</p>
            }
        </section>
    )
}

export default ItemBlogMobile
