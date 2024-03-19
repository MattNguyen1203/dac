'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '../../../i18n-config'
import useStore from '@/(store)/store'
import { useEffect } from 'react'

function SelectLang({ lang, checkHome, color }) {
  const pathName = usePathname()
  const slug = useStore((state) => state.slug);
  const redirectedPathName = (locale) => {
    if (!pathName) return `/${currentLang}`
    const segments = pathName.split('/')
    if (segments[1] !== 'en') {
      segments.splice(1, 0, locale)
      return segments.join('/')
    }
    segments[1] = locale
    return segments.join('/')
  }

  useEffect(()=>{
    const body = document.querySelector('body');
    const priDesc = document.querySelectorAll('.priDesc');
    const job_Info = document.querySelectorAll('.job_Info');
    if(pathName.includes('/en')){
      body.classList.add('active_lang');
      priDesc.forEach((i)=>{
        i.classList.add('active_lang');
      })
      job_Info.forEach((i)=>{
        i.classList.add('active_lang');
      })
    }else{
      body.classList.remove('active_lang');
      priDesc.forEach((i)=>{
        i.classList.remove('active_lang');
      })
      job_Info.forEach((i)=>{
        i.classList.remove('active_lang');
      })
    }
  },[lang,pathName])

  return (
    <div className='flex items-center select-lang max-md:hidden'>
      {i18n?.lo?.map((locale, index) => (
        <Link
          key={index}
          // href={redirectedPathName(locale.locale)}
          href={locale.locale==='vi'? '/': '/en'}
          className={`flex link items-center w-full border-r border-solid  last:border-none px-[0.6rem] ${checkHome ? 'border-black' : ''} border-[${color}] ${lang==='vi'&&index===0?'active':''} ${lang==='en'&&index===1?'active':''}`}
        >
          <span className={`uppercase lg:text-[1rem] md:text-[1.2rem]  ${checkHome ? '!text-black' : 'text-white'} !text-[${color}]`}>{locale.locale}</span>
        </Link>
      ))}
    </div>
  )
}

export default SelectLang
