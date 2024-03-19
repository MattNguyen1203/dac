import React from 'react'
import Image from 'next/image'
function Banner({ data }) {
    return (
        <section className='banner-service banner_home relative md:w-full md:h-[70vh] lg:h-[100vh] h-[100rem] md:rounded-br-[13.54rem] rounded-br-[22rem]'>
            <Image src={data?.background?.sourceUrl} width={1600} height={1000} alt={data?.background?.altText || 'banner'} quality={100} priority className="w-full h-full object-cover md:rounded-br-[13.54rem] max-md:rounded-br-[22rem]" />
        </section>
    )
}

export default Banner
