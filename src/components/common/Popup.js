'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

function Popup({lang,listJob}) {
    const [check, setCheck] = useState(false);
    const [open, setOpen] = useState(false);
    const popUpRef = useRef()
    const pathName = usePathname()
    const infoJob = listJob?.data?.allJobOpportunity?.nodes

    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let formattedDate = (day < 10 ? "0" + day : day) + "/" + (month < 10 ? "0" + month : month) + "/" + year;
    let formatFinal = formattedDate?.split("/")?.reverse().join("/")
    useEffect(()=>{
        infoJob?.forEach((item)=>{
           if(new Date(formatFinal) <  new Date(item?.recruimentDetail?.infoJob?.expirationDate?.split("/")?.reverse().join("/"))){
                setOpen(true)
           }
        })
    },[pathName])
    useEffect(()=>{
        if(popUpRef.current){
            if(pathName.includes('tuyen-dung') || pathName.includes('recruitment')){
                popUpRef.current.style.transform = 'translateY(1000%)'
            }else{
                const timeoutId = setTimeout(() => {
                    if(popUpRef.current && !check){
                        popUpRef.current.style.transform = 'translateY(0)'
                    }
                }, 1000);
                if(popUpRef.current && check){
                    popUpRef.current.style.transform = 'translateY(1000%)'
                }
                return () => clearTimeout(timeoutId);
            }
        }
    },[check,pathName, open])
    return (
            open && (<div ref={popUpRef} className={`md:fixed max-md:hidden bottom-[10%] right-[0] z-[9] min-w-[20rem] popUpJob rounded-tl-[1rem] rounded-bl-[1rem] pl-[1rem] pr-[3rem] py-[0.5rem] `}>
            <div className='absolute inset-0 overlay_popup'></div>
            <Link
                href={{
                    pathname:`/${lang ==='vi' ? 'tuyen-dung' : '/en/recruitment'}`,
                    query:{id:'job-oppo'}
                }}
            >
                <p className='text-[1.35417rem] text-[#444] leading-[1.2] '>{lang === 'vi' ? '🔈 Chúng tôi đang tuyển dụng' : '🔈 We are recruiting'}</p>
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setCheck(true)} className='absolute top-[20%] right-[5%] w-[1rem] h-[1rem]'  viewBox="0 0 22 22" fill="none">
                <path d="M1.57785 20.0493C1.6417 20.1132 1.71752 20.1639 1.80098 20.1985C1.88445 20.2331 1.97391 20.2509 2.06426 20.2509C2.1546 20.2509 2.24407 20.2331 2.32753 20.1985C2.41099 20.1639 2.48681 20.1132 2.55066 20.0493L11 11.5999L19.4529 20.0493C19.5819 20.1783 19.7568 20.2508 19.9393 20.2508C20.1217 20.2508 20.2967 20.1783 20.4257 20.0493C20.5547 19.9203 20.6271 19.7453 20.6271 19.5629C20.6271 19.3804 20.5547 19.2055 20.4257 19.0765L11.9728 10.6271L20.4222 2.17429C20.5512 2.04529 20.6237 1.87032 20.6237 1.68788C20.6237 1.50544 20.5512 1.33048 20.4222 1.20148C20.2932 1.07247 20.1183 1 19.9358 1C19.7534 1 19.5784 1.07247 19.4494 1.20148L11 9.65429L2.54722 1.20491C2.4157 1.09228 2.24653 1.03343 2.0735 1.04011C1.90047 1.0468 1.73634 1.11852 1.6139 1.24096C1.49146 1.3634 1.41973 1.52754 1.41305 1.70056C1.40636 1.87359 1.46522 2.04277 1.57785 2.17429L10.0272 10.6271L1.57785 19.0799C1.4498 19.2087 1.37793 19.383 1.37793 19.5646C1.37793 19.7462 1.4498 19.9205 1.57785 20.0493Z" fill="#171717"/>
            </svg>
        </div>)

    )
}

export default Popup