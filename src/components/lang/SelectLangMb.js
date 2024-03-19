'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '../../../i18n-config'
import { useState } from 'react'
import useStore from '@/(store)/store'

function SelectLangMb({ lang, handleCloseModal }) {
    const pathName = usePathname()
    const slug = useStore((state) => state.slug);
    const [lng, setLng] = useState(lang)
    const redirectedPathName = (locale) => {
        if (!pathName) return `/${currentLang}`
        const segments = pathName.split('/')
        if (segments[1] !== 'it' && segments[1] !== 'en' && segments[1] !== 'fr') {
            segments.splice(1, 0, locale)
            return segments.join('/')
        }
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <div className='flex flex-col items-center select-lang fixed top-[27.5rem] right-[6.27rem]'>
            {i18n?.lo?.map((locale, index) => (
                <Link
                    // onClick={() => {
                    //     setLng(locale.locale)
                    //     handleCloseModal
                    // }}
                    key={index}
                    // href={redirectedPathName(locale.locale)}
                    // href={locale.locale==='vi'?slug?.slugVi||'/':slug?.slugEn||'/en'}
                    href={locale.locale==='vi'? '/': '/en'}
                    className={`flex link items-center w-full  border-solid  px-[0.6rem] ${index === 0 ? 'border-b border-solid pb-[1rem] border-[#000]' : ''} ${lng === locale.locale ? 'active' : ''}`}
                >
                    <span className={`uppercase text-[3.2rem] text-black`}>{locale.locale}</span>
                </Link>
            ))}
        </div>
    )
}

export default SelectLangMb
