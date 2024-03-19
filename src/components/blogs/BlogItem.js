import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BlogItem({ lang,data,slug }) {
    return (
        <Link href={`/${lang}/${lang === 'vi' ? 'tin-tuc-su-kien' : 'news'}/${slug}/${data?.slug}`} className='flex flex-col relative  items-center '>
            <div className='blog_item_animate overflow-hidden w-full'>
                <Image src={data?.featuredImage?.node?.sourceUrl} alt={data?.featuredImage?.node?.altText || 'imgItem'} quality={100} width={1000} height={1000} className='md:w-[20.98958rem] w-full h-[91.46667rem] md:h-[28.02083rem] object-contain' />
            </div>
            <div className='flex flex-col justify-center items-center max-md:mt-[3.47rem] max-md:mb-[7rem] max-md:flex-col-reverse'>
                <h4 className='description md:mt-[1.35rem] max-md:!text-[6.93333rem]'>{data?.news?.name}</h4>
                <span className='subDescription md:mt-[0.5rem] max-md:mb-[4rem]'>{data?.news?.time}</span>
            </div>
        </Link>
        
    )
}

export default BlogItem
