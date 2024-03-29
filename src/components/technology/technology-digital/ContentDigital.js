import React from 'react'
import layer4 from '@/assets/imgs/Layer_4.svg'
import TextnologyContent from '@/components/common/TextnologyContent'
function ContentDigital({ dataContent }) {
    return (
      <section className='contentWrapper bg-[#001936] overflow-x-hidden'>
        <h2 className='heading-primary md:w-[39.16667rem] max-md:!text-[8.53333rem] w-[65rem] max-md:mb-[6rem]'>
          {dataContent?.heading}
        </h2>
        <div className='flex md:pb-[7rem] md:pt-[4rem] max-md:flex-col'>
          <div
            className='md:mr-[10.68rem] priDesc list_solutions !text-start md:w-[27.59375rem] max-md:mb-[7rem]'
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

        <div className='w-full h-[2px] bg-[#fff] opacity-30'></div>
      </section>
    )
}

export default ContentDigital