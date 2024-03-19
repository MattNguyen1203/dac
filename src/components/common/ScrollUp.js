'use client'
import scrollDown from '@/hooks/scrollDown'
import React, { useEffect, useRef } from 'react'
import arrowUp from '@/assets/imgs/arrow2.svg'
import Image from 'next/image'
function ScrollUp() {
  const arrowRef = useRef()
 
  useEffect(()=>{
    const handleClick = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    window.addEventListener('click',(e)=>{
        if(e.target === arrowRef?.current){
            handleClick()
        }
    })
    return () => {
        window.removeEventListener('click',handleClick)
    }
  },[])
  return (
    <div className='fixed arrow_up z-50 bottom-[2rem] right-[1.5rem]'>
        <Image ref={arrowRef} src={arrowUp} alt='arrow' className='md:w-[2.29167rem] md:h-[2.13542rem] w-[4.3rem] h-[4.3rem]' />
    </div>
  )
}

export default ScrollUp