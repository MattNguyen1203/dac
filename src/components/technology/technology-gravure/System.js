import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/imgs/Image_Gravue1.png'
function System({ dataSystem }) {
    return (
        <section className='md:pt-[5.05rem] md:px-[12.03rem] px-[4.27rem] md:pb-[6.35rem]'>
            <div className='flex max-md:flex-col'>
                {dataSystem?.gallery?.length >= 0 &&
                    <Image src={dataSystem?.gallery[0]?.sourceUrl || img1} alt={dataSystem?.gallery[0]?.altText || 'img'} quality={100} width={500} height={500} className='md:w-[36.66667rem] md:h-[22.1875rem] md:hidden object-cover md:mb-[1.93rem]' />
                }
                <div className='md:mr-[2.6rem]'>
                    <h2 className='heading md:w-[31.40625rem]'>{dataSystem?.title}</h2>
                    <div
                        className='md:w-[36.66667rem] md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] grid md:gap-[1.5rem] gap-[4rem] list_solutions md:tracking-[-0.02708rem] leading-[1.2] tracking-[-0.128rem] text-[#444] font-normal text-justify md:mt-[1.77rem] mt-[6.13rem]'
                        dangerouslySetInnerHTML={{ __html: `${dataSystem?.description}` }}
                    >
                    </div>
                </div>
                <div className='flex flex-col max-md:pb-[4rem]'>
                    {dataSystem?.gallery?.map((item, index) => (
                        <div key={index}>
                            <Image src={item?.sourceUrl} alt={item?.altText || 'img'} quality={100} width={1000} height={1000} className={`md:w-[36.66667rem] h-[55rem] md:h-[22.1875rem] object-cover md:mb-[1.93rem] ${index === 0 ? 'max-md:hidden' : ''}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default System