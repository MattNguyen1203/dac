import React from 'react'

function Introduce({ dataIntro }) {
    return (
        <section className='md:pt-[6.15rem] pt-[6.4rem] md:pr-[11.72rem] md:pl-[43.44rem] max-md:px-[4.27rem] bg-[#F5F5F5] max-md:pb-[5rem]'>
            <h2 className='heading text-justify md:!tracking-[-0.06875rem] max-md:!tracking-[-0.13867rem] max-md:mb-[4rem] max-md:!text-[6.93333rem]'>{dataIntro?.heading}</h2>
            <p className='md:py-[2.5rem] leading-[1.2] md:text-[1.35417rem] text-[4.26667rem] md:tracking-[-0.04063rem] tracking-[-0.08533rem] text-justify font-normal'>
                {dataIntro?.description}
            </p>
        </section>
    )
}

export default Introduce