import React from 'react'
import Link from 'next/link'
function TitlePage_About_Us({ lang, slugPage, titlePage, check }) {
  return (
    <div className='max-md:hidden'>
      <ul className='flex content pt-[3.8rem]'>
        {titlePage?.map((item, index) => (
          <Link
            href={`/${lang}/${lang === 'vi' ? 've-chung-toi' : 'about-us'}/${slugPage[index]}`}
            key={index}
            className={`uppercase lg:text-[1.04167rem] md:text-[1.2rem] mr-[3.91rem] cursor-pointer ${check === index && 'text-[#00A84F]'} }`}
          >
            {item}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default TitlePage_About_Us