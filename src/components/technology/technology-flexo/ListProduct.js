import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/imgs/Flexo1.png'
function ListProduct({ dataProductList }) {
    return (
        <section className='md:pt-[6.04rem] pt-[4.27rem] max-md:px-[4.27rem] flex md:px-[12.03rem] md:pb-[6.35rem] max-md:flex-col'>

            {dataProductList?.gallery?.length >= 0 &&
                <Image src={dataProductList?.gallery[0]?.sourceUrl} alt={dataProductList?.gallery[0]?.altText || 'image'} quality={100} width={1000} height={1000} className='md:w-[36.66667rem] md:h-[22.1875rem] h-[55rem] md:hidden mb-[7.47rem] object-cover md:mb-[1.93rem]' />
            }
            <div className='flex flex-col md:w-[36.66667rem] md:mr-[2.6rem] max-md:mb-[4.8rem]'>
                <h2 className='heading md:mb-[1.77rem] mb-[3rem] max-md:!text-[6.93333rem] md:pr-[11.87rem]'>{dataProductList?.title || 'Các máy Flexo tại App'}</h2>
                <div className='md:text-[1.35417rem] text-[4.26667rem] gap-[1.5rem] leading-[1.2] !font-normal md:tracking-[-0.02708rem] tracking-[-0.08533rem] grid max-md:gap-[4rem]' dangerouslySetInnerHTML={{ __html: `${dataProductList?.description}` }}>
                </div>
            </div>
            <div className='max-md:mb-[4.8rem]'>
                {dataProductList?.gallery?.map((item, index) => (
                    <div key={index}>
                        <Image src={item?.sourceUrl || img1} alt={item?.altText || 'image'} quality={100} width={1000} height={1000} className={`md:w-[36.66667rem] h-[37rem] md:h-[22.1875rem] object-cover md:mb-[1.93rem] ${index === 0 ? 'max-md:hidden' : ''}`} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ListProduct