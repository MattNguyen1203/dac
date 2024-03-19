import Image from 'next/image'
import React from 'react'

function System({dataSystem}) {
    const imgDefault ='https://cms-dac.okhub.tech/wp-content/uploads/2023/11/Rectangle-86.png'
    return (
        <section className='md:pt-[5.05rem] px-[4.27rem] md:px-[12.03rem] md:pb-[9.03rem]'>
            <div className='flex max-md:flex-col'>
                {dataSystem?.gallery?.length >=0 && 
                    <Image src={dataSystem?.gallery[0]?.sourceUrl || imgDefault} quality={100} width={1000} height={1000} className='md:w-full md:hidden h-[55rem] md:h-[22.1875rem] object-contain' />
                }
                <div className='md:mr-[2.6rem]'>
                    <h2 className='heading md:w-[31.40625rem]'>{dataSystem?.title}</h2>
                    <div className='md:w-[36.66667rem] description max-md:!tracking-[-0.128rem] !leading-[1.2] !font-normal text-justify md:mt-[1.77rem] mt-[5rem]' dangerouslySetInnerHTML={{ __html: `${dataSystem?.description}` }}>
                    </div>
                </div>
                <div className='flex flex-col'>
                    {dataSystem?.gallery?.map((item,index)=>(
                        <div key={index}>
                            <Image src={item?.sourceUrl || imgDefault} quality={100} alt={item?.altText || 'img'} width={500} height={500} className={`md:w-full h-[55rem] md:h-[22.1875rem] object-contain ${index === 0 ? 'max-md:hidden' : ''}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default System