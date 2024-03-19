import React from 'react'
import ServiceItem from '../common/ServiceItem'

function Culture({ dataCulture }) {
    return (
        <section className='md:pt-[4rem] pt-[3.73rem] md:pb-[6rem] max-md:pb-[10rem] px-[4.27rem] md:px-[4.17rem] flex max-md:flex-col bg-[#F5F5F5]'>
            <div className='md:mr-[10.36rem]'>
                <h2 className='heading md:!tracking-[-0.17188rem] md:mb-[1.4rem] max-md:mb-[4.2rem]'>{dataCulture?.heading}</h2>
                <p className='description !leading-[1.2] md:!tracking-[-0.05417rem] !font-normal md:w-[28.80208rem] text-justify'>{dataCulture?.description}</p>
            </div>
            <div className='grid md:grid-cols-2  md:gap-x-[9.52rem] max-md:flex flex-col md:gap-y-[1rem] max-md:mt-[8rem]'>
                {dataCulture?.listCulture?.map((item, index) => (
                    <ServiceItem classNameCus={`md:!w-[21rem] md:!h-auto md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] max-md:mt-[4rem] tracking-[-0.128rem] leading-[1.2] md:tracking-[-0.04063rem] text-justify`} key={index} className={`max-md:mb-[5rem] ${index === 0 ? 'max-md:order-[2]' : index === 1 ? 'max-md:order-[3]' :'max-md:order-[1]'}`} icon={item?.icon?.sourceUrl} textEdit={item?.title} text={item?.description} />
                ))}
            </div>
        </section>
    )
}

export default Culture