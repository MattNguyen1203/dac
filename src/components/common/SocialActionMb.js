'use client'
import React, { useState } from 'react'
import fb from '@/assets/imgs/fb2.svg'
import zalo from '@/assets/imgs/zalo2.svg'
import phone from '@/assets/imgs/phone2.svg'
import linked from '@/assets/imgs/linked.svg'
import close from '@/assets/imgs/close.svg'
import Image from 'next/image'
import Link from 'next/link'
function SocialActionMb({lang,dataPartner}) {
    const [active,setActive] = useState(false)
    return ( 
        <>
        {!active && (<Image onClick={() => setActive(true)} className='w-[12.5632rem] md:hidden fixed z-50 right-0 top-[82%] h-[12.50187rem] object-contain' src={phone} width={'100%'} height={'100%'} alt='phone' />)}
        
        <div className='md:hidden popUpAction  bg-transparent fixed z-50 right-[1rem] top-[58%] -translate-y-[30%] px-[0.5rem] py-[1.5rem] rounded-bl-[1.97rem]'>
            {active && (
                <div className='grid grid-cols-1 gap-[3.58rem] mb-[3.58rem]'>
                <Link href={`${dataPartner?.socialAction?.facebook}`} target='_blank' className='transition-all hover:scale-95'>
                <Image className='w-[12.5632rem] h-[12.50187rem] object-contain' src={fb} width={'100%'} height={'100%'} alt='facebook' />
                </Link>
                <Link href={`${dataPartner?.socialAction?.linkedin}`} target='_blank' className='transition-all hover:scale-95'>
                <Image className='w-[12.5632rem] h-[12.50187rem] object-contain' src={linked} width={'100%'} height={'100%'} alt='facebook' />
                </Link>
                <Link href={`${dataPartner?.socialAction?.zalo}`} target='_blank' className='transition-all hover:scale-95'>
                <Image className='w-[12.5632rem] h-[12.50187rem] object-contain' src={zalo} width={'100%'} height={'100%'} alt='zalo' />
                </Link>
                <Link href={`tel:${dataPartner?.socialAction?.phone}`} className='transition-all hover:scale-95'>
                <Image className='w-[12.5632rem] h-[12.50187rem] object-contain' src={phone} width={'100%'} height={'100%'} alt='phone' />
                </Link>
            </div>
            )}
            
            {active && (
                <div onClick={() => setActive(false)} className='relative'> 
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[12.564rem] h-[12.564rem]' viewBox="0 0 48 48" fill="none">
                    <circle cx="23.9939" cy="24.0061" r="23.5576" fill="white"/>
                </svg>
                <Image src={close} alt="close" className='object-contain w-[2.92ren] h-[2.92rem] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2' />
            </div>
            )}

        </div>
        </>
  )
}

export default SocialActionMb