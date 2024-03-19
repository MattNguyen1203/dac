import React from 'react'

function Introduce({ dataIntro }) {
    return (
        <section className='md:pt-[5.57rem] pt-[6.4rem] md:pr-[11.72rem] md:pl-[43.44rem] max-md:px-[4.27rem] bg-[#F5F5F5] max-md:pb-[6rem]'>
            <h2 className='heading max-md:mb-[4rem] text-justify max-md:!tracking-[-0.27733rem] max-md:!text-[6.93333rem]'>{dataIntro?.heading}</h2>
            <p className='md:py-[2.5rem] leading-[1.2] md:text-[1.35417rem] text-[4.26667rem] md:tracking-[-0.04063rem] tracking-[-0.128rem] font-normal text-justify'>
                {dataIntro?.description}
            </p>
        </section>
    )
}

export default Introduce