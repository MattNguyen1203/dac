import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Design({ lang, dataDesign }) {
  return (
    <div className='design md:pt-[3.56rem] pt-[6.93rem]'>
      <div className='max-md:hidden md:ml-auto md:w-[61.4375rem] md:pr-[14.44rem] max-md:px-[4.27rem]'>
        <h3 dangerouslySetInnerHTML={{ __html: `${dataDesign?.heading}` }} className='md:text-[3.4375rem] md:w-[44rem] text-[6.93333rem] text-[#444] leading-[1.2] md:tracking-[-0.12375rem] tracking-[-0.208rem] title'>
        </h3>
        <div className='md:grid grid-cols-2 list-content gap-x-[3.19rem] gap-y-[1.87rem] mt-[3.25rem] flex flex-col'>
          {dataDesign?.aboutCompany?.map((item, index) => (
            <div key={index} className={`text-[1.35417rem] md:w-[20.9rem] md:pt-[2.19rem] pt-[4.8rem] border-t border-solid max-md:pb-[4rem] border-[#888] ${index === 0 ? 'max-md:border-none' : ''}`}>
                    <Link href={`/${lang}/${lang === 'vi' ? 've-chung-toi' : 'about-us'}/${
                     lang === 'vi' ? ( index === 0
                    ? "tam-nhin"
                    : index === 1
                    ? "so-do-to-chuc"
                    : index === 2
                    ? "chang-duong-phat-trien"
                    : "chung-nhan"
                    )
                    :(
                      index === 0
                      ? "vision"
                      : index === 1
                      ? "company-structure"
                      : index === 2
                      ? "history"
                      : "awards"
                    )
                  }`}>
                  <h4 className='font-bold text-[#444] md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] mb-[1.35417rem]'>{item?.title}</h4>
                </Link>
              <p className='text-[#888] md:text-[1.5rem]  md:mt-[1rem] leading-[116.662%] md:tracking-[-0.04063rem] tracking-[-0.128rem] lg:text-[1.35417rem] text-[4.26667rem] text-justify'>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex md:px-[9.43rem] mt-[5.4rem] md:gap-[5.16rem] items-center max-md:flex-col'>
        <div className="left md:w-[36.7rem] max-md:bg-[#444545] flex flex-col items-center">
          <div className='max-md:flex items-center w-full max-md:px-[4.27rem]'>
            <span className='md:hidden text-[#fff] text-[22.93333rem] font-bold'>&</span>
            <div className="scrolling-words-container max-md:w-full">
              <div className="scrolling-words-box max-md:w-full">
                <ul>
                  {dataDesign?.textAnimation?.listTextScroll?.map((item, index) => (
                    <li className='list-none md:text-[4rem] text-[8.53333rem] md:text-[#888] text-[#fff] uppercase' key={index}>{item?.text}</li>
                  ))}
                </ul>
              </div>
              <div className='flex text-[#fff]  md:justify-center block-scroll-word font-bold items-end w-full'>
                <Link href={`/${lang}/${lang === 'vi' ? 'thiet-ke' : 'design'}`}>
                  <span className='text-[8.53333rem] md:text-[4rem] uppercase md:text-[#444] leading-[1.2] max-md:w-[60rem] max-md:bottom-[-2rem]'>{dataDesign?.textAnimation?.textOnTop}</span>
                </Link>
                <span className='text-[22.93333rem] max-md:hidden md:text-[2rem] md:text-[#444] relative md:bottom-[0.25rem] leading-[1.2]'>&</span>
              </div>
            </div>
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: `${dataDesign?.textAnimation?.description}` }}
            className='md:text-[1.5rem] md:mt-[1rem] tracking-[-0.06771rem] lg:text-[1.35417rem] text-[4.26667rem] leading-[1.2] max-md:text-[#fff] max-md:my-[6rem] max-md:px-[4.27rem] text-justify' >
          </p>
        </div>
        <div className="right max-md:w-full">
          <Image src={dataDesign?.textAnimation?.image?.sourceUrl} width={500} height={500} alt='box' className='md:w-[39.27rem] w-full md:h-[47.76rem] h-[67.46667rem] object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Design