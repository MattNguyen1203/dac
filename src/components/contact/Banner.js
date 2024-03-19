import React from 'react'
import BannerCom from '../common/Banner'
function Banner({ dataBanner }) {
    return (
        <BannerCom
            image={dataBanner?.background?.sourceUrl}
            altText={dataBanner?.background?.altText}
            title={dataBanner?.title || 'Liên hệ'}
            description={dataBanner?.subTitle || 'Mọi thông tin chi tiết xin vui lòng liên hệ App'}
            classTitle={'md:text-[3.4375rem] text-[8.53333rem]'}
            classDesc={'md:text-[1.875rem] md:tracking-[-0.05625rem] max-md:w-[59rem] text-[4.26667rem]'}
            positionAndBox={'md:right-[8.85rem] md:bottom-[6.72rem] bottom-[3.73rem] max-md:left-[4.27rem] md:w-[28.64583rem] md:h-[9.6875rem]'}
        />
    )
}

export default Banner
