import React from 'react'
import vision from '@/assets/imgs/vision.jpg'
import Image from 'next/image'

function Story({data}) {
  return (
    <div className='md:px-[4.17rem]'>
      <div className='flex max-md:flex-col gap-x-[7.68rem] pt-[6.82rem] pb-[5.9rem] md:border-b border-solid border-[#444]'>
        <div className="left max-md:px-[4.27rem]">
          <h3 className='heading'>
            {data?.heading}
          </h3>
          <div className='md:text-[1.5rem] lg:text-[1.35417rem] md:w-[31.25rem] text-[4.26667rem] leading-[1.2] tracking-[0.02708rem] max-md:tracking-[-0.128rem] text-justify md:mt-[1.6rem] max-md:my-[6rem] text-[#444]' dangerouslySetInnerHTML={{ __html: `${data?.descriptionHeading}` }}></div>
        </div>
        <div className="right">
          <Image src={data?.image?.sourceUrl || vision} width={1000} height={1000} alt={data?.altText || 'vision'} className='md:w-[52.55rem] md:h-[32.9rem] h-[62.63627rem] object-cover' />
          <div className='flex justify-between md:mt-[2.86rem] mt-[10.56rem] max-md:flex-col max-md:px-[4.27rem]'>
            <p className='md:text-[1.5rem] lg:text-[1.35417rem] md:w-[23.59375rem] text-[4.26667rem] text-justify text-[#444] leading-[1.2] max-md:mb-[10.56rem]' dangerouslySetInnerHTML={{ __html: `${data?.subdescription1}` }}></p>
            <p className='md:text-[1.5rem] lg:text-[1.35417rem] md:w-[23.54167rem] text-[4.26667rem] text-justify text-[#444] leading-[1.2]' dangerouslySetInnerHTML={{ __html: `${data?.subdescription2}` }}></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story