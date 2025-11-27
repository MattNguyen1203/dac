import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Function to format date to dd/mm/yyyy
const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

function BlogItem({ lang,data,slug }) {
    return (
        <Link href={`/${lang}/${lang === 'vi' ? 'tin-tuc-su-kien' : 'news'}/${slug}/${data?.slug}`} className='flex flex-col relative  items-center '>
            <div className='blog_item_animate overflow-hidden w-full'>
                <Image src={data?.featuredImage?.node?.sourceUrl} alt={data?.featuredImage?.node?.altText || 'imgItem'} quality={100} width={1000} height={1000} className='md:w-[32.1rem] w-full h-[50.46667rem] md:h-[15.02083rem] object-cover' />
            </div>
            <div className='flex flex-col justify-center items-center max-md:mt-[3.47rem] max-md:mb-[7rem] max-md:flex-col-reverse'>
                <h4 className='description md:mt-[1.35rem] max-md:!text-[6.93333rem]'>{data?.news?.name}</h4>
                <span className='subDescription md:mt-[0.5rem] max-md:mb-[4rem]'>{formatDate(data?.news?.time)}</span>
            </div>
        </Link>
        
    )
}

export default BlogItem
