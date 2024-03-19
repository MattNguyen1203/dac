import React from 'react'
import fb from '@/assets/imgs/fb2.svg'
import zalo from '@/assets/imgs/zalo2.svg'
import phone from '@/assets/imgs/phone2.svg'
import linked from '@/assets/imgs/linked.svg'
import Image from 'next/image'
import Link from 'next/link'
import getDataPage from '@/data/getDataPage'
import { DATA_SOCIAL_FOOTER } from '@/graphql/home/query'
async function SocialAction({lang}) {
    const getDataSocial = await getDataPage(lang,DATA_SOCIAL_FOOTER)
    const dataPartner = getDataSocial?.data?.page?.translation?.homepage?.partners
    return (
        <div className='max-md:hidden popUpAction flex flex-col gap-[0.5rem] bg-[#A0A0A0] fixed z-50 right-0 top-[58%] -translate-y-[30%] px-[0.5rem] py-[1.5rem] rounded-bl-[1.97rem]'>
            <Link href={`tel:${dataPartner?.socialAction?.phone}`} className='transition-all hover:scale-95'>
              <Image className='w-[1.95rem] h-[1.95rem] object-contain' src={phone} width={'100%'} height={'100%'} alt='phone' />
            </Link>
            <Link href={`${dataPartner?.socialAction?.zalo}`} target='_blank' className='transition-all hover:scale-95'>
              <Image className='w-[1.95rem] h-[1.95rem] object-contain' src={zalo} width={'100%'} height={'100%'} alt='zalo' />
            </Link>
            <Link href={`${dataPartner?.socialAction?.facebook}`} target='_blank' className='transition-all hover:scale-95'>
              <Image className='w-[1.95rem] h-[1.95rem] object-contain' src={fb} width={'100%'} height={'100%'} alt='facebook' />
            </Link>
            <Link href={`${dataPartner?.socialAction?.linkedin}`} target='_blank' className='transition-all hover:scale-95'>
              <Image className='w-[1.95rem] h-[1.95rem] object-contain' src={linked} width={'100%'} height={'100%'} alt='facebook' />
            </Link>
        </div>
  )
}

export default SocialAction