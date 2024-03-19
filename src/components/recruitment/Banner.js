import React from 'react'
import BannerCom from '../common/Banner'
import imgBanner from '@/assets/imgs/RecruitmentBanner.png'
function Banner({ dataBanner }) {
    return (
        <BannerCom
            background={'bg-[#F5F5F5]'}
            image={dataBanner?.background?.sourceUrl || imgBanner}
            altText={dataBanner?.background?.altText}
            title={dataBanner?.title || 'Tuyển dụng'}
            description={dataBanner?.subTitle || 'Các vị trí tuyển dụng'}
            classTitle={'md:text-[3.4375rem] text-[8.53333rem]'}
            classDesc={'md:text-[1.875rem] md:tracking-[-0.05625rem] text-[4.26667rem]'}
            positionAndBox={'md:right-[9.9rem] md:bottom-[4.72rem] bottom-[3.73rem] max-md:left-[4.27rem] md:w-[28.64583rem] md:h-[9.6875rem]'}
        />
    )
}

export default Banner