import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function OpportunityItem({ icon, data, title, desc, className, classCus, check }) {
    return (
        <div className={`flex flex-col ${classCus} ${check ? 'max-md:mb-[12rem]' : ''}`}>
            <div className={`relative md:mb-[2.5rem] mb-[4rem] md:w-[5.26089rem] w-[18.13493rem] h-[18.13493rem] md:h-[5.62552rem] max-md:mr-[6.4rem] ${check ? 'max-md:mb-[6rem]' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[5.26089rem] md:h-[5.62552rem] w-[18.13493rem] h-[18.13493rem] ' viewBox="0 0 111 111" fill="none">
                    <g clip-path="url(#clip0_417_572)">
                        <path d="M4.36405 111H0V106.626H1.68995V109.31H4.36405V111Z" fill="#444545" />
                        <path d="M1.68995 99.8165H0V92.997H1.68995V99.8165ZM1.68995 86.1775H0V79.3581H1.68995V86.1775ZM1.68995 72.5386H0V65.7192H1.68995V72.5386ZM1.68995 58.8997H0V52.0803H1.68995V58.8997ZM1.68995 45.2608H0V38.4414H1.68995V45.2608ZM1.68995 31.6219H0V24.8025H1.68995V31.6219ZM1.68995 17.983H0V11.1636H1.68995V17.983Z" fill="#444545" />
                        <path d="M1.68995 4.36405H0V0H4.36405V1.68995H1.68995V4.36405Z" fill="#444545" />
                        <path d="M99.8169 1.68995H92.9975V0H99.8169V1.68995ZM86.178 1.68995H79.3586V0H86.178V1.68995ZM72.5391 1.68995H65.7197V0H72.5391V1.68995ZM58.9002 1.68995H52.0808V0H58.9002V1.68995ZM45.2613 1.68995H38.4419V0H45.2613V1.68995ZM31.6224 1.68995H24.803V0H31.6224V1.68995ZM17.9835 1.68995H11.1641V0H17.9835V1.68995Z" fill="#444545" />
                        <path d="M111 4.36405H109.31V1.68995H106.626V0H111V4.36405Z" fill="#444545" />
                        <path d="M76.3856 111H70.0831V109.31H76.316C76.6639 109.31 77.0119 109.31 77.3598 109.3L77.4095 110.99C77.0715 111 76.7335 111.01 76.3955 111.01L76.3856 111ZM62.7765 111H55.4799V109.31H62.7765V111ZM48.1833 111H40.8867V109.31H48.1833V111ZM33.59 111H26.2934V109.31H33.59V111ZM18.9968 111H11.7002V109.31H18.9968V111ZM84.7956 109.956L84.3781 108.316C86.6744 107.739 88.9111 106.904 91.0385 105.851L91.794 107.362C89.5672 108.475 87.2112 109.35 84.7956 109.956ZM98.0766 103.326L97.0129 102.013C98.852 100.522 100.542 98.8324 102.033 96.9933L103.355 98.057C101.794 99.9955 100.015 101.775 98.0766 103.336V103.326ZM107.381 91.7644L105.87 91.0089C106.924 88.8915 107.759 86.6449 108.336 84.3485L109.976 84.7561C109.369 87.1717 108.505 89.5277 107.391 91.7644H107.381ZM110.99 77.37L109.3 77.3203C109.31 76.9823 109.32 76.6543 109.32 76.3163V70.0535H111.01V76.3163C111.01 76.6741 111.01 77.0221 110.99 77.37ZM111.01 62.747H109.32V55.4503H111.01V62.747ZM111.01 48.1537H109.32V40.8571H111.01V48.1537ZM111.01 33.5605H109.32V26.2639H111.01V33.5605ZM111.01 18.9673H109.32V11.6707H111.01V18.9673Z" fill="#444545" />
                    </g>
                    <defs>
                        <clipPath id="clip0_417_572">
                            <rect width="111" height="111" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <Image src={icon} alt='icon' quality={100} className='md:w-[3.74297rem] w-[12.90267rem] h-[12.41573rem] md:h-[3.85135rem] object-cover absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2' />
            </div>

            {title && desc &&
                (<div className={`md:mb-[1rem] ${check ? ' max-md:mb-[6rem]' : ''}`}>
                    <p className={`description2`}>{title}</p>
                    <p className='description2'>{desc}</p>
                </div>)}
            <div>
                <div className={`md:w-[21.04167rem] md:mb-[1.5rem] flex flex-col relative max-md:top-[-1.5rem] ${className}`}>
                    {data?.map((item, index) => (
                        <p key={index} className='description !font-normal md:mb-[0.5rem] mb-[3rem]'>{item?.text}</p>
                    ))}
                </div>
                <Link className={`${check ? 'hidden' : ''}`} href={`/tuyen-dung/a`}>
                    <p className='md:w-[21.04167rem] cursor-pointer description !text-[#888] underline !font-normal'>Ứng tuyển ngay</p>
                </Link>
            </div>
        </div>
    )
}

export default OpportunityItem