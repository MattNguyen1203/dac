import React from 'react'
import BannerDetail from './BannerDetail'
import Infomation from './Infomation'
import HandleChangeSlug from '@/components/common/HandleChangeSlug'

function IndexRecruitmentDetail({ data, dataJobNew, lang,listSlug}) {
    return (
        <>
            <BannerDetail dataBanner={data?.recruimentDetail?.banner} />
            <HandleChangeSlug listSlug={listSlug}/>
            <main className='containerWrapper'>
                <Infomation lang={lang} dataJobNew={dataJobNew} dataContent={data?.recruimentDetail?.content} />
            </main>
        </>
    )
}

export default IndexRecruitmentDetail