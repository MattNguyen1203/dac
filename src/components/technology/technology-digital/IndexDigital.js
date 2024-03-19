import React from 'react'
import Introduce from './Introduce'
import System from './System'
import ContentDigital from './ContentDigital'
import Banner from '@/components/common/Banner'
import TitlePage_Tech from '@/components/common/TitlePage_Tech'
import HandleChangeSlug from '@/components/common/HandleChangeSlug'

function IndexDigital({ data,slugPage,lang,titlePage,listSlug }) {
    const dataDigital = data?.data?.page?.translation?.technology_common?.content
    const dataBanner = data?.data?.page?.translation?.technology_common
    return (
        <> 
            <Banner
                 image={dataBanner?.banner?.background?.sourceUrl}
                 altText={dataBanner?.banner?.background?.altText}
                 title={dataBanner?.banner?.title}
                 positionAndBox={'md:right-[14.47rem] md:bottom-[8rem] max-md:left-[4.27rem] bottom-[3.73rem] md:w-[27rem] w-[75rem]'}
                 classTitle={'md:text-[3.4375rem] text-[8.53333rem]'}
                 background={'bg-[#f5f5f5]'}
            />
            <main className='containerWrapper'>
                <HandleChangeSlug listSlug={listSlug} />
                <TitlePage_Tech check={3} lang={lang} slugPage={slugPage} titlePage={titlePage} />
                <Introduce dataIntro={dataDigital?.introduce} />
                <System dataSystem={dataDigital?.system} />
                <ContentDigital dataContent={dataDigital?.mainContent} />
            </main>
            
        </>
    )
}

export default IndexDigital