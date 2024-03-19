import Image from 'next/image'
import React from 'react'

function ProductItem({ image, text }) {
    return (
        <div className='relative overflow-hidden img_item_product'>
            <Image src={image?.sourceUrl} alt={image?.altText || 'image'} width={1000} height={1000} quality={100} className="md:h-[29.0625rem]  h-[100rem] md:w-[20.98958rem] object-cover" />
            <div className="overlay absolute top-0 w-full md:h-[100%] rotate-180 h-[100rem]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.00) 89.06%)' }}></div>
            <p 
                dangerouslySetInnerHTML={{ __html: `${text}` }}
                className='absolute text_item_product z-[1] max-md:right-[4.27rem] bottom-[4rem] md:bottom-[1.5rem] md:left-[2.34rem] left-[4.8rem] md:right-[3.85rem] md:w-[14.79167rem] text-[#fff] font-bold md:text-[1.875rem] text-[6.93333rem] md:leading-[116.662%] md:tracking-[-0.05625rem] md:line-clamp-2 md:h-[4.9rem]'>
            </p>
        </div>
    )
}

export default ProductItem
