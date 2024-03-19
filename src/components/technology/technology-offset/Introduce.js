import React from 'react'

function Introduce({dataIntro}) {
   
    return (
        <section className='md:pt-[6.15rem] pt-[6.93rem] md:pr-[11.72rem] md:pl-[43.44rem] bg-[#F5F5F5] max-md:px-[4.27rem]'>
            <h2 className='heading text-justify max-md:!text-[6.93333rem] md:!tracking-[-0.1375rem] max-md:!tracking-[-0.13867rem]'>{dataIntro?.heading}</h2>
            <p className='md:py-[2.5rem] py-[6.93rem] description max-md:!leading-[1.2] max-md:!tracking-[-0.128rem] text-justify !font-normal'>
                {dataIntro?.description}
            </p>
        </section>
    )
}

export default Introduce