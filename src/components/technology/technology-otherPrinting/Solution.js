import Image from 'next/image'
import React from 'react'
import chatMb from '@/assets/imgs/chartMb.png'
function Solution({ dataSolution }) {
    return (
        <section className='md:pt-[3.07rem] md:pb-[5.73rem] pt-[6.4rem] max-md:px-[4.27rem]'>
            <h2 className='heading md:text-center max-md:!text-[6.93333rem] md:mb-[1.87rem] mb-[5rem] md:pl-[10.43rem] md:pr-[12.03rem] md:h-[12.03125rem]'>
                {dataSolution?.title}
            </h2>
            <div className='md:pl-[5.78rem] md:pr-[11.67rem] relative flex max-md:flex-col items-center md:justify-between'>
                <Image src={dataSolution?.image?.sourceUrl || chatMb} alt={dataSolution?.image?.altText} quality={100} width={1000} height={1000} className="w-[34.6875rem] max-md:w-[85.06667rem] max-md:h-[74.4rem] h-[34.89583rem] object-cover" />
                <div className='flex flex-col items-end md:pt-[1.5rem] max-md:mt-[4rem] md:ml-[3.5rem] text-justify'>
                    {dataSolution?.listSolution?.map((item, index) => (
                        <div key={index} className='md:flex'>
                            <Image src={item?.icon?.sourceUrl} quality={100} width={1000} height={1000} alt={item?.icon?.altText || 'icon'} className='max-md:hidden w-[4.53125rem] h-[4.0625rem] object-contain' />
                            <div 
                            className='list_solutions md:text-[1.5rem] lg:text-[1.35417rem] md:ml-[2rem] text-[4.27rem] md:tracking-[-0.04063rem] tracking-[-0.128rem] text-[#444] leading-[1.2] w-full md:w-[39.03125rem] md:mb-[2.19rem] max-md:mb-[6rem]'
                            dangerouslySetInnerHTML={{ __html: `${item?.solution}` }}
                            >
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Solution