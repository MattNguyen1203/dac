import React from 'react'
import svg from '@/assets/imgs/GroupContact.svg'
import Image from 'next/image'
import Link from 'next/link'
function Branch({ dataBranch,lang }) {
    return (
        <section className='md:pt-[7rem] pt-[7.47rem] md:px-[4.17rem] px-[4.27rem]'>
            <div className='flex max-md:flex-col'>
                <div className='flex flex-col '>
                    <h2 className='heading2 md:!tracking-[-0.17188rem] md:mr-[6rem] font-bold md:w-[24.4375rem]' dangerouslySetInnerHTML={{ __html: `${dataBranch?.heading}` }} ></h2>
                    {/* <div className='grid grid-cols-2 gap-[1rem] w-fit md:mt-[4rem]'>
                        <Link href={`tel:${listSocial?.phone}`}>
                            <Image src={icon3} alt='phone' className='w-[4rem] h-[4rem] object-contain' />
                        </Link>
                        <Link href={`${listSocial?.zalo}`}>
                            <Image src={icon2} alt='zalo' className='w-[4rem] h-[4rem] object-contain' />
                        </Link>
                        <Link href={`${listSocial?.facebook}`}>
                            <Image src={icon1} alt='facebook' className='w-[4rem] h-[4rem] object-contain' />
                        </Link>
                        <Link href={`${listSocial?.linkedin}`}>
                            <Image src={icon4} alt='linkedin' className='w-[4rem] h-[4rem] object-contain' />
                        </Link>
                    </div> */}
                </div>
                <div className='max-md:mt-[12rem] max-md:mb-[12rem]'>
                    <div className='grid md:grid-cols-2 gap-x-[4.9rem] gap-y-[12rem] md:gap-y-[2.08rem] md:mb-[4rem]'>
                        {dataBranch?.listContentAddress?.map((item, index) => (
                            <div className='flex flex-col' key={index}>
                                <div className={`relative md:mb-[2.5rem] mb-[4rem] md:w-[5.26089rem] w-[18.13493rem] h-[18.13493rem] md:h-[5.62552rem] max-md:mr-[6.4rem] `}>
                                    <Image src={svg} alt='vector' width={200} height={200} className='md:w-[5.26089rem] md:h-[5.62552rem] w-[18.13493rem] h-[18.13493rem]' />
                                    <Image src={item?.icon?.sourceUrl} width={200} height={200} alt='icon' quality={100} className='md:w-[3.74297rem] w-[12.90267rem] h-[12.41573rem] md:h-[3.85135rem] object-contain absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2' />
                                </div>
                                <div className='text-[#444] md:w-[27rem] lg:text-[1.35417rem] leading-[1.2] md:text-[1.5rem] text-[4rem] md:tracking-[-0.02708rem] tracking-[-0.2rem]'>
                                    <p className='font-bold'>{item?.title}</p>
                                    <p className='max-md:mb-[4rem]'>{item?.subTitle}</p>
                                    <p className='max-md:mb-[2rem]' dangerouslySetInnerHTML={{ __html: `${item?.infomation}` }}></p>
                                    <Link 
                                    href={
                                        index === 0 ? 
                                        'https://www.google.com/maps/place/C%C3%B4ng+Ty+C%E1%BB%95+Ph%E1%BA%A7n+Bao+B%C3%AC+%26+In+N%C3%B4ng+Nghi%E1%BB%87p/@20.9985006,105.8400452,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ac7abda1f031:0xcf4610975c64fec8!8m2!3d20.9985006!4d105.8400452!16s%2Fg%2F1pzrn4t86?hl=vi&entry=ttu'
                                        : index === 1 ? 
                                        'https://www.google.com/maps/place/Cty+CP+Bao+B%C3%AC+v%C3%A0+In+N%C3%B4ng+Nghi%E1%BB%87p/@20.950711,106.0221108,17.75z/data=!4m14!1m7!3m6!1s0x3135ad00fe74ffe5:0xd5813080ea2e5bb6!2zQ8O0bmcgdHkgVE5ISCBDw7RuZyBOZ2jhu4cgQ2jhu5FuZyBHaeG6oyBEQUM!8m2!3d20.9985006!4d105.8400452!16s%2Fg%2F11h44p76g8!3m5!1s0x3135a54f414813cf:0xbbf05df144c83c20!8m2!3d20.951361!4d106.0228099!16s%2Fg%2F11v11t3lsp?entry=ttu'

                                         
                                        : 
                                        'https://www.google.com/maps/place/C%C3%B4ng+ty+TNHH+C%C3%B4ng+Ngh%E1%BB%87+Ch%E1%BB%91ng+Gi%E1%BA%A3+DAC/@20.9985019,105.8394015,19z/data=!3m1!4b1!4m6!3m5!1s0x3135ad00fe74ffe5:0xd5813080ea2e5bb6!8m2!3d20.9985006!4d105.8400452!16s%2Fg%2F11h44p76g8?entry=ttu'

                                        
                                    } 
                                    target='_blank'
                                    className='text-[#888] info_address md:text-[1.04167rem] text-[3.46667rem]  tracking-[-0.12133rem] leading-[1.2] md:tracking-[-0.03646rem] underline'>{lang === 'vi' ? 'Xem bản đồ' :'View the map'}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Image src={dataBranch?.image?.sourceUrl} alt={dataBranch?.image?.altText || 'image'} quality={100} width={1600} height={1000} className='object-cover max-md:hidden md:h-[31.875rem] w-full' />
                </div>
            </div>

            <div className='md:px-[4.17rem] h-[1px] bg-[#000] md:my-[5.94rem]'></div>
        </section>
    )
}

export default Branch