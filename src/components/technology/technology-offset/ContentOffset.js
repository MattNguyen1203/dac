import TextnologyContent from '@/components/common/TextnologyContent'
import React from 'react'
function ContentOffset({dataContent}) {
    return (
      <section className='md:pt-[4.32rem] pt-[8.53rem] md:px-[4.17rem] bg-[#001936] max-md:overflow-x-hidden'>
        <h2 className='heading-primary md:w-[33.1875rem] w-[65rem] max-md:!text-[8.53333rem] max-md:px-[4.27rem]'>
          {dataContent?.heading}
        </h2>
        <div className='flex md:pb-[7rem] md:pt-[4rem] pt-[5rem] max-md:flex-col max-md:px-[4.27rem]'>
          <div
            className='md:mr-[10.68rem] priDesc  md:w-[28.59375rem]'
            dangerouslySetInnerHTML={{ __html: `${dataContent?.description}` }}
          ></div>
          <div className='md:grid flex flex-col grid-cols-2 gap-x-[5.31rem] gap-y-[3.2rem] max-md:pt-[7rem]'>
            {dataContent?.listContent?.map((item, index) => {
              return (
                <TextnologyContent
                  key={index}
                  icon={item?.icon}
                  text={item?.text}
                  className={`${index === 0 ? 'max-md:order-3' : index === 1 ? 'max-md:order-2' : 'max-md:order-1'}`}
                />
              )
            })}
          </div>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-full'
          viewBox='0 0 1762 2'
          fill='none'
        >
          <path
            d='M1 1L1761 0.999846'
            stroke='white'
            stroke-linecap='round'
          />
        </svg>
      </section>
    )
}

export default ContentOffset