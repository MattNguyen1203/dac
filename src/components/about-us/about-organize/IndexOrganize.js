'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Banner from '@/components/common/Banner'
import TitlePage_About_Us from '@/components/common/TitlePage_About_Us'
import HandleChangeSlug from '@/components/common/HandleChangeSlug'

export const IndexOrganize = ({ data, lang, slugPage, titlePage, listSlug }) => {
  const [active,setActive] = useState(false)
  const dataOrganize = data?.data?.page?.translation
  return (
    <section>
      <Banner
        image={dataOrganize?.organize?.banner?.imageBanner?.sourceUrl}
        altText={dataOrganize?.organize?.banner?.imageBanner?.altText}
        textAboutUs={dataOrganize?.organize?.banner?.textBanner}
        check={true}
      />
      <HandleChangeSlug listSlug={listSlug} />
      <main className='content pb-[2.31rem] containerWrapper'>
        <TitlePage_About_Us check={3} lang={lang} slugPage={slugPage} titlePage={titlePage} />
        <h1 className='heading pl-[5.47rem] mt-[4.32rem]'>{dataOrganize?.organize?.content?.heading}</h1>
        <Image 
          src={dataOrganize?.organize?.content?.diagram?.sourceUrl} 
          width={1600} 
          quality={100} 
          height={1000} 
          alt={dataOrganize?.organize?.content?.diagram?.altText || 'organize'} 
          className='mt-[4.5rem] md:w-[91.25rem] md:h-[49.53125rem] object-contain w-[91.2rem] h-[49.86667rem]' 
          onClick={() => setActive(true)}
        />
        <div className='flex justify-center md:mt-[3rem] mt-[9.6rem] max-md:mb-[9.3rem] max-md:flex-col'>
          {data?.data?.page?.translation?.organize?.content?.summary?.map((item, index) => (
            <p
              className={`lg:text-[1.047rem] md:text-[1.4rem] text-[2.93333rem] text-[#888] ${index === 0 ? 'md:mr-[7.68rem]' : ''}`}
              key={index}
              dangerouslySetInnerHTML={{ __html: `${item?.text}` }}>
            </p>
          ))}
        </div>

        {active && (
          <div className='fixed h-[130rem] w-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#fff] md:hidden shadow-lg transition-all duration-500'>
            <Image 
              src={dataOrganize?.organize?.content?.diagram?.sourceUrl} 
              width={1600} 
              quality={100} 
              height={1600} 
              alt={dataOrganize?.organize?.content?.diagram?.altText || 'organize'} 
              className='object-contain fixed w-full h-full' 
              onClick={() => setActive(false)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setActive(false)} className='absolute top-[5%] right-[5%] w-[4rem] h-[4rem]'  viewBox="0 0 22 22" fill="none">
              <path d="M1.57785 20.0493C1.6417 20.1132 1.71752 20.1639 1.80098 20.1985C1.88445 20.2331 1.97391 20.2509 2.06426 20.2509C2.1546 20.2509 2.24407 20.2331 2.32753 20.1985C2.41099 20.1639 2.48681 20.1132 2.55066 20.0493L11 11.5999L19.4529 20.0493C19.5819 20.1783 19.7568 20.2508 19.9393 20.2508C20.1217 20.2508 20.2967 20.1783 20.4257 20.0493C20.5547 19.9203 20.6271 19.7453 20.6271 19.5629C20.6271 19.3804 20.5547 19.2055 20.4257 19.0765L11.9728 10.6271L20.4222 2.17429C20.5512 2.04529 20.6237 1.87032 20.6237 1.68788C20.6237 1.50544 20.5512 1.33048 20.4222 1.20148C20.2932 1.07247 20.1183 1 19.9358 1C19.7534 1 19.5784 1.07247 19.4494 1.20148L11 9.65429L2.54722 1.20491C2.4157 1.09228 2.24653 1.03343 2.0735 1.04011C1.90047 1.0468 1.73634 1.11852 1.6139 1.24096C1.49146 1.3634 1.41973 1.52754 1.41305 1.70056C1.40636 1.87359 1.46522 2.04277 1.57785 2.17429L10.0272 10.6271L1.57785 19.0799C1.4498 19.2087 1.37793 19.383 1.37793 19.5646C1.37793 19.7462 1.4498 19.9205 1.57785 20.0493Z" fill="#171717"/>
            </svg>
          </div>
        )}
      </main>
    </section>
  )
}
