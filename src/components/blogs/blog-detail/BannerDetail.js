import Banner from '@/components/common/Banner'
import React from 'react'
function BannerDetail({data}) {
    return (
        <Banner
            image={data?.background?.sourceUrl}
            altText={data?.background?.altText}
            title={data?.title}
            description={data?.subtitle}
            classTitle={'md:text-[3.4375rem] text-[8.53333rem]'}
            classDesc={'md:text-[1.875rem] text-[4.27rem]'}
            positionAndBox={'md:w-[31.45833rem] max-md:left-[4rem] max-md:bottom-[17rem] md:right-[11.72rem] md:bottom-[2rem]'}
        />
    )
}

export default BannerDetail
