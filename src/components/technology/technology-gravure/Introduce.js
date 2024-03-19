import React from 'react'

function Introduce({ dataIntro }) {

    return (
        <section className='md:pt-[6.15rem] pt-[6.4rem] md:pr-[11.72rem] md:pl-[43.44rem] max-md:px-[4.27rem] bg-[#F5F5F5] max-md:pb-[6rem]'>
            <h2 className='heading text-justify md:!tracking-[-0.1375rem] max-md:!text-[6.93333rem] max-md:mb-[4rem]'>{dataIntro?.heading}</h2>
            <p className='md:py-[2.5rem] md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] leading-[1.2] md:tracking-[-0.04063rem] tracking-[-0.13867rem] text-justify font-normal'>
                {dataIntro?.description}
            </p>
        </section>
    )
}

export default Introduce