import React from 'react'
import Link from 'next/link'
function TitlePage_Tech({ lang, slugPage, titlePage, check }) {
  return (
    <div className='max-md:hidden bg-[#f5f5f5]'>
      <ul className='flex content pt-[3.8rem]'>
        {titlePage?.map((item, index) => (
          <Link
            href={`/${lang}/${lang === 'vi' ? 'cong-nghe' : 'technology'}/${slugPage[index]}`}
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

export default TitlePage_Tech