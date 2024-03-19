'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SelectLangMb from '../lang/SelectLangMb'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
function MenuMb({ data, handleCloseModal, lang,slugProducts }) {
    const [active,setActive] = useState(null)
    const [active2,setActive2] = useState(null)
    const [hiddenPlus,setHiddenPlus] = useState()
    const [hiddenMinus,setHiddenMinus] = useState()
    const [list,setList] = useState(null)
    
    useEffect(()=>{
        const listMenus = document.querySelectorAll('.menu_mobile_item')
        const plusIcons = document.querySelectorAll('.plus_icon')    
        const minusIcons = document.querySelectorAll('.minus_icon') 
        setList(listMenus)
        setHiddenPlus(plusIcons)
        setHiddenMinus(minusIcons)   
        
    },[active])
    
    return (
        <section className='pt-[6.93rem] px-[4.27rem] pb-[8.53rem] relative'>
            <svg onClick={handleCloseModal} xmlns="http://www.w3.org/2000/svg" className='w-[10.4rem] h-[10.4rem] fixed top-[6.23rem] right-[4.27rem]' viewBox="0 0 39 39" fill="none">
                <g clip-path="url(#clip0_1129_2615)">
                    <path d="M19.5029 39.0057C30.274 39.0057 39.0057 30.274 39.0057 19.5029C39.0057 8.73172 30.274 0 19.5029 0C8.73172 0 0 8.73172 0 19.5029C0 30.274 8.73172 39.0057 19.5029 39.0057Z" fill="#444545" />
                    <path d="M15 15L24.8913 24.8913" stroke="white" stroke-miterlimit="10" />
                    <path d="M15 24.8914L24.8913 15" stroke="white" stroke-miterlimit="10" />
                </g>
                <defs>
                    <clipPath id="clip0_1129_2615">
                        <rect width="39" height="39" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <SelectLangMb lang={lang} handleCloseModal={handleCloseModal} />

            <div className='flex flex-col'>
                {data?.map((item, index) => {
                    return (
                        <div key={index} className='mb-[2.67rem]'>
                            {
                                (item?.listContent && index !== 2) ?
                                    (
                                        <div className='flex gap-[2rem] items-center'>
                                            <Link
                                                href={`/${lang}/${lang === 'vi' ? item?.slug : item?.slugEn}`}
                                                className='text-[#444] text-[5.33333rem]  font-bold'
                                                key={index}>{lang === 'vi' ? item?.link : item?.linkEn}
                                            </Link>
                                            <span 
                                                onClick={()=>{
                                                    setActive(index)
                                                }} 
                                                className={`w-[5rem] relative top-[0.75rem] plus_icon`}
                                                style={
                                                    index === active ? {
                                                      display: hiddenPlus[active] || hiddenPlus[active - 1] ? 'none' : 'block'
                                                    } : {}
                                                  }
                                            >
                                                <AddCircleIcon className={`!w-full !h-full`} />
                                            </span>
                                            <span 
                                                onClick={()=>{
                                                    setActive(null)
                                                }} 
                                                className={`w-[5rem] minus_icon ${active2 === null ? 'hidden' :""}`}
                                                style={
                                                    index === active ? {
                                                      display: (hiddenMinus[active] || hiddenMinus[active - 1]) ? 'block' : 'none'
                                                    } : {}
                                                  }
                                            >
                                                <RemoveCircleSharpIcon className={`!w-full !h-full relative top-[0.75rem] `} />
                                            </span>
                                        </div>
                                    )
                                    : (item?.listContent && index == 2) ?
                                    (
                                        <div className='flex gap-[2rem] items-center'>
                                            <Link
                                                onClick={handleCloseModal}
                                                className='text-[#444]  text-[5.33333rem] font-bold'
                                                href={`/${lang}/${lang === 'vi' ? item?.slug : item?.slugEn || item?.slug}` || '/'}>{lang === 'vi' ? item?.link : item?.linkEn}
                                            </Link>
                                            <span 
                                                onClick={()=>{
                                                    setActive(index)
                                                }} 
                                                className={`w-[5rem] relative top-[0.75rem] plus_icon`}
                                                style={
                                                    index === active ? {
                                                      display: hiddenPlus[active] || hiddenPlus[active - 1] ? 'none' : 'block'
                                                    } : {}
                                                  }
                                            >
                                                <AddCircleIcon className={`!w-full !h-full`} />
                                            </span>
                                            <span 
                                                onClick={()=>{
                                                    setActive(null)
                                                }} 
                                                className={`w-[5rem] minus_icon ${active2 === null ? 'hidden' :""}`}
                                                style={
                                                    index === active ? {
                                                      display: (hiddenMinus[active] || hiddenMinus[active - 1]) ? 'block' : 'none'
                                                    } : {}
                                                  }
                                            >
                                                <RemoveCircleSharpIcon className={`!w-full !h-full relative top-[0.75rem] `} />
                                            </span>
                                        </div>
                                    )
                                    :
                                    (
                                        <Link
                                        onClick={handleCloseModal}
                                        className='text-[#444] mb-[2.67rem] text-[5.33333rem] font-bold'
                                        href={`/${lang}/${lang === 'vi' ? item?.slug : item?.slugEn || item?.slug}` || '/'}>{lang === 'vi' ? item?.link : item?.linkEn}
                                    </Link>
                                    )

                            }
                            {
                                item?.listContent && (
                                    <div
                                        className='flex flex-col mt-[2rem] ml-[5rem] menu_mobile_item'
                                        style={
                                           (index === active )
                                                ? 
                                                {
                                                    height:(list[active] && active === 0) ? list[active].scrollHeight : list[active-1].scrollHeight,
                                                    overflow:'visible'
                                                }
                                                : { height: '0px', overflow: 'hidden' }
                                        }
                                    >
                                        {item?.listContent?.map((mbItem, index) => {
                                            const slugProduct = slugProducts[index];
                                            return (
                                                <Link
                                                    onClick={handleCloseModal}
                                                    href={`/${lang}/${lang === 'vi' ? item?.slug2 : item?.slug2En || item?.slug2}/${(lang === 'vi' ? mbItem?.slug : mbItem?.slugEn) || slugProduct}` || '/'}
                                                    key={index}
                                                    dangerouslySetInnerHTML={{ __html: `${mbItem?.nameEn ? (lang === 'vi' ? mbItem?.name : mbItem?.nameEn) : mbItem.name}` }}
                                                    className='text-[#444] capitalize text-[3.46667rem] text_product_item_home leading-[116.662%] tracking-[-0.104rem] mb-[2.67rem]'>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                )
                            }
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default MenuMb
