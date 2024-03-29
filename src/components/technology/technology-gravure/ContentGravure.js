import React from 'react'
import TextnologyContent from '@/components/common/TextnologyContent'
import Image from 'next/image'
function ContentGravure({ dataContent }) {
    return (
      <section className='contentWrapper bg-[#001936] overflow-x-hidden'>
        <h2 className='heading-primary md:w-[33.1875rem] max-md:!text-[8.53333rem] w-[60rem] max-md:mb-[6rem]'>
          {dataContent?.heading}
        </h2>
        <div className='flex md:pb-[7rem] md:pt-[4rem] max-md:flex-col'>
          <div
            className='md:mr-[10.68rem] priDesc  md:w-[27.59375rem] text-justify max-md:mb-[6rem]'
            dangerouslySetInnerHTML={{ __html: `${dataContent?.description}` }}
          ></div>
          <div className='md:grid grid-cols-2 gap-x-[5.31rem] gap-y-[3.2rem]'>
            {dataContent?.listContent?.map((item, index) => {
              return (
                <TextnologyContent
                  key={index}
                  icon={item?.icon}
                  text={item?.text}
                />
              )
            })}
          </div>
        </div>
        <div className='md:pl-[38.44rem] md:mb-[6.67rem] md:h-[27.8125rem]'>
          <Image
            src={dataContent?.image?.sourceUrl}
            alt={dataContent?.image?.altText || 'image'}
            width={1500}
            height={1000}
            quality={100}
            className='w-full max-md:hidden object-cover md:h-[27.8125rem]'
          />
        </div>

        <div className='w-full h-[2px] bg-[#fff] opacity-30'></div>
      </section>
    )
}

export default ContentGravure