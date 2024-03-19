import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function OpportunityItem1({ lang, data }) {
    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let formattedDate = (day < 10 ? "0" + day : day) + "/" + (month < 10 ? "0" + month : month) + "/" + year;
    let formatFinal = formattedDate?.split("/")?.reverse().join("/")

    return (
        <div className={`flex flex-col max-md:flex-row max-md:mb-[12rem]`}>
            <div className={`relative md:mb-[2.5rem] mb-[4rem] md:w-[5.26089rem] w-[18.13493rem] h-[18.13493rem] md:h-[5.62552rem] max-md:mr-[6.4rem]`}>
                <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[5.26089rem] md:h-[5.62552rem] w-[18.13493rem] h-[18.13493rem] ' viewBox="0 0 68 73" fill="none">
                    <g clip-path="url(#clip0_2118_1253)">
                        <path d="M2.67347 72.7128H0V69.8475H1.03529V71.6058H2.67347V72.7128Z" fill="#00A84F"/>
                        <path d="M1.03529 65.3869H0V60.9197H1.03529V65.3869ZM1.03529 56.4525H0V51.9852H1.03529V56.4525ZM1.03529 47.518H0V43.0508H1.03529V47.518ZM1.03529 38.5836H0V34.1163H1.03529V38.5836ZM1.03529 29.6491H0V25.1819H1.03529V29.6491ZM1.03529 20.7147H0V16.2474H1.03529V20.7147ZM1.03529 11.7802H0V7.31299H1.03529V11.7802Z" fill="#00A84F"/>
                        <path d="M1.03529 2.85876H0V0H2.67347V1.10704H1.03529V2.85876Z" fill="#00A84F"/>
                        <path d="M61.1487 1.10704H56.9711V0H61.1487V1.10704ZM52.7934 1.10704H48.6157V0H52.7934V1.10704ZM44.438 1.10704H40.2603V0H44.438V1.10704ZM36.0826 1.10704H31.905V0H36.0826V1.10704ZM27.7273 1.10704H23.5496V0H27.7273V1.10704ZM19.3719 1.10704H15.1942V0H19.3719V1.10704ZM11.0165 1.10704H6.83887V0H11.0165V1.10704Z" fill="#00A84F"/>
                        <path d="M67.9999 2.85876H66.9646V1.10704H65.3203V0H67.9999V2.85876Z" fill="#00A84F"/>
                        <path d="M46.7948 72.7128H42.9338V71.6058H46.7522C46.9653 71.6058 47.1785 71.6058 47.3916 71.5993L47.4221 72.7063C47.215 72.7128 47.0079 72.7193 46.8009 72.7193L46.7948 72.7128ZM38.4577 72.7128H33.9877V71.6058H38.4577V72.7128ZM29.5177 72.7128H25.0477V71.6058H29.5177V72.7128ZM20.5777 72.7128H16.1077V71.6058H20.5777V72.7128ZM11.6377 72.7128H7.16772V71.6058H11.6377V72.7128ZM51.9469 72.0291L51.6911 70.9546C53.0979 70.5769 54.4681 70.0299 55.7713 69.3396L56.2342 70.3294C54.87 71.0588 53.4267 71.6318 51.9469 72.0291ZM60.083 67.6856L59.4314 66.826C60.558 65.8492 61.5933 64.7421 62.5068 63.5374L63.3167 64.2342C62.3606 65.504 61.2705 66.6697 60.083 67.6921V67.6856ZM65.7832 60.1121L64.8575 59.6172C65.503 58.2302 66.0146 56.7584 66.3678 55.2542L67.3726 55.5212C67.0011 57.1036 66.4713 58.6469 65.7892 60.1121H65.7832ZM67.9938 50.6828L66.9585 50.6502C66.9646 50.4288 66.9707 50.2139 66.9707 49.9925V45.8899H68.006V49.9925C68.006 50.2269 68.006 50.4548 67.9938 50.6828ZM68.006 41.1036H66.9707V36.3238H68.006V41.1036ZM68.006 31.544H66.9707V26.7642H68.006V31.544ZM68.006 21.9844H66.9707V17.2046H68.006V21.9844ZM68.006 12.4248H66.9707V7.64502H68.006V12.4248Z" fill="#00A84F"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2118_1253">
                        <rect width="68" height="72.7129" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <Image src={data?.recruimentDetail?.infoJob?.icon?.sourceUrl || data?.translation?.recruimentDetail?.infoJob?.icon?.sourceUrl} width={200} height={200} alt={data?.recruimentDetail?.infoJob?.icon?.altText || 'icon'} quality={100} className='md:w-[3.74297rem] w-[12.90267rem] h-[12.41573rem] md:h-[3.85135rem] object-contain absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div>
                <Link href={`/${lang}/${lang === 'vi' ? 'tuyen-dung' : 'recruitment'}/${data?.slug || data?.translation?.slug}`}>
                    <h3 className='jobText md:mb-[0.5rem] mb-[3rem]'>{data?.recruimentDetail?.infoJob?.nameJob || data?.translation?.recruimentDetail?.infoJob?.nameJob}</h3>
                </Link>
                <div className={`md:w-[21.04167rem] flex flex-col relative max-md:top-[-1.5rem]`}>
                    {(data?.recruimentDetail?.infoJob?.listInfoDetail || data?.translation?.recruimentDetail?.infoJob?.listInfoDetail)?.map((item, index) => (
                        <div key={index} className={`flex ${index === 0 ? '' : '' }`}>
                            <p className='description md:mb-[0.5rem] mb-[3rem] md:mr-[0.5rem] mr-[1rem]'>{item?.title}</p>
                            <p className='description !font-normal md:mb-[0.5rem] mb-[3rem] relative bototm-[-0.25rem]'> {item?.text}</p>
                        </div>
                    ))}
                </div>
                {(new Date(formatFinal) <= new Date(data?.recruimentDetail?.infoJob?.expirationDate?.split("/")?.reverse().join("/"))) ? (
                    <p className='description md:mb-[0.5rem] md:mr-[0.5rem]'>{`${lang === 'vi' ? 'Ngày hết hạn: ' : 'Expiration date: '}`}
                        <span className='description !font-normal md:mb-[0.5rem]'>{data?.recruimentDetail?.infoJob?.expirationDate || data?.translation?.recruimentDetail?.infoJob?.expirationDate}</span>
                    </p>
                ) : 
                (<p className='description !text-[red] md:mb-[0.5rem] md:mr-[0.5rem]'>
                    {lang === 'vi' ? 'Đã hết hạn' : 'Expired'}
                </p>) 
                }
                <Link href={`/${lang}/${lang === 'vi' ? 'tuyen-dung' : 'recruitment'}/${data?.slug || data?.translation?.slug}`}>
                <p className='md:w-[21.04167rem] md:mt-[1.3rem] mt-[3rem] cursor-pointer description !text-[#888] underline !font-normal'>{data?.recruimentDetail?.infoJob?.applyText || data?.translation?.recruimentDetail?.infoJob?.applyText}</p>
                </Link>
            </div>
        </div>
    )
}

export default OpportunityItem1