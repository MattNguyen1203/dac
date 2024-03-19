import Image from 'next/image'
import React from 'react'

function System({ dataSystem }) {
    return (
        <section className='md:pt-[5.05rem] px-[4.27rem] md:px-[12.03rem] md:pb-[9.03rem] '>
            {
                dataSystem?.gallery?.length >= 0 &&
                <Image src={dataSystem?.gallery[0]?.sourceUrl} alt={dataSystem?.gallery[0]?.altText} quality={100} width={1000} height={1000} className='md:w-[50%] max-md:my-[10.13rem] md:h-[12.76042rem] md:hidden object-cover' />
            }
            <div className='flex max-md:flex-col max-md:pb-[6rem]'>
                <div className='md:mr-[2.6rem] max-md:mb-[6rem]'>
                    <h2 className='heading md:w-[31.40625rem] max-md:!text-[6.93333rem]'>{dataSystem?.title}</h2>
                    <div className='md:w-[36.66667rem] md:text-[1.35417rem] text-[4.26667rem] md:tracking-[-0.04063rem] leading-[1.2] tracking-[-0.128rem] !font-normal text-justify md:mt-[1.77rem] mt-[3rem]'
                        dangerouslySetInnerHTML={{ __html: `${dataSystem?.description}` }}>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:gap-y-[2rem] max-md:gap-[1rem]'>
                    {dataSystem?.gallery?.map((item, index) => (
                        <div key={index} className={`${index === 0 ? 'col-span-2 md:h-[22.1875rem] h-[54.4rem] max-md:hidden ' : 'md:h-[12.76042rem] h-[34.66667rem]'}`} >
                            <Image src={item?.sourceUrl} alt={item?.altText} quality={100} width={500} height={500} className='md:w-full h-full object-cover' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default System