'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
function Product({ data }) {
    const [click,setClick] = useState(false)
    const refArrow = useRef()
    gsap.registerPlugin(ScrollToPlugin);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0 && click) {
                setClick(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [click]);

    const handleArrowClick = () => {
        setClick(true);
        gsap.to(window, { duration: 1, scrollTo: { y: refArrow.current.offsetTop, autoKill: false } });
    };
    return (
        <>
            <section>
            <div className='md:pt-[5.1rem]  md:pl-[11.67rem] md:pr-[12.03rem] md:pb-[6.56rem] pb-[9rem] flex justify-between max-md:flex-col max-md:px-[4.27rem]'>
                <h2 className='heading md:w-[45.5rem] max-md:py-[8.33rem]'>{data?.heading}</h2>
                <div className='flex flex-col md:w-[29rem] md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] leading-[1.2] md:tracking-[-0.09479rem] text-[#444] '>
                    <div className='product-list-title md:text-[1.5rem] lg:text-[1.35417rem] leading-[1.2] md:tracking-[-0.09479rem] tracking-[-0.29867rem] text-[4.26667rem]' dangerouslySetInnerHTML={{ __html: `${data?.description}` }}></div>
                    <svg onClick={handleArrowClick} xmlns="http://www.w3.org/2000/svg" className='max-md:hidden md:w-[2.60417rem] cursor-pointer md:h-[2.23958rem] md:mt-[0.42rem]' viewBox="0 0 43 50" fill="none">
                        <path d="M43 32.0963L43 20.834L25.0162 35.8155L25.0162 -5.78718e-07L17.9911 -8.04783e-07L17.9911 35.8155L2.57768e-06 20.834L1.90898e-06 32.0963L21.5 50L43 32.0963Z" fill="#444444" />
                    </svg>
                </div>
            </div>
            </section >
            <div ref={refArrow}></div>
        </>
    )
}

export default Product
