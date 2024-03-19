import React from 'react'
import Image from 'next/image'
function Motto({data}) {
  return (
    <div className="md:px-[4.17rem] px-[4.27rem]">
      <div className='flex md:gap-x-[15.6rem] pt-[3.65rem] md:pb-[5rem] pb-[12rem] max-md:flex-col'>
        <h3 className='heading whitespace-nowrap'>{data?.heading}</h3>
        <ul className='grid md:grid-cols-2 gap-x-[5.26rem] max-md:gap-[8rem] gap-y-[3rem] max-md:mt-[7rem]'>
          {data?.listMotto?.map((item, index) => (
            <li key={index} className={`flex flex-col ${index === 0 ? 'max-md:order-0' : index === 1 ? 'max-md:order-2' : index === 2 ? 'max-md:order-1' : index === 3 ? 'max-md:order-[3]' : 'max-md:order-[4]'}`}>
              <Image src={item?.icon?.sourceUrl} width={1000} height={1000} className='max-md:w-[18.13493rem] w-[5.78177rem] h-[5.78177rem] max-md:h-[18.13493rem]' alt='icon' />
              <p className='md:text-[1.5rem] text-justify lg:text-[1.35417rem] text-[4.26667rem] leading-[1.2] md:tracking-[-0.02708rem] max-md:tracking-[-0.08533rem] md:mt-[1.46rem] mt-[5.87rem]' dangerouslySetInnerHTML={{ __html: `${item?.description}` }}></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Motto