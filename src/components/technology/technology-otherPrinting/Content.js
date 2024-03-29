import React from 'react'
import TextnologyContent from '@/components/common/TextnologyContent'
function Content({ dataContent }) {
    return (
      <section className='md:pt-[4.32rem] md:px-[4.17rem] px-[4.27rem] bg-[#001936] overflow-x-hidden max-md:pt-[12rem] '>
        <h2 className='heading-primary md:w-[33.1875rem] max-md:!text-[8.53333rem] w-[60rem] max-md:mb-[5rem]'>
          {dataContent?.heading}
        </h2>
        <div className='flex md:pb-[7rem] md:pt-[4rem] max-md:flex-col'>
          <div
            className='md:mr-[10.68rem] priDesc  md:w-[28.59375rem]  max-md:mb-[6rem]'
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
        {/*  */}
        <div
          className='priDesc md:pl-[39rem] md:pb-[3.94rem] max-md:pb-[12rem] content_other_print max-md:hidden'
          dangerouslySetInnerHTML={{ __html: `${dataContent?.subContent}` }}
        ></div>
        <div className='w-full h-[2px] bg-[#fff] opacity-30'></div>
      </section>
    )
}

export default Content