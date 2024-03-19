import React from 'react'
import Introduce from './Introduce'
import System from './System'
import ContentGravure from './ContentGravure'
import Banner from '@/components/common/Banner'
import TitlePage_Tech from '@/components/common/TitlePage_Tech'
import HandleChangeSlug from '@/components/common/HandleChangeSlug'

function IndexGravure({ data,slugPage,lang,titlePage,listSlug }) {
    const dataGravure = data?.data?.page?.translation?.technology_common?.content
    const dataBanner = data?.data?.page?.translation?.technology_common
    return (
        <>
            <Banner
                image={dataBanner?.banner?.background?.sourceUrl}
                altText={dataBanner?.banner?.background?.altText}
                title={dataBanner?.banner?.title}
                positionAndBox={'md:right-[14.47rem] md:bottom-[8rem] max-md:left-[4.27rem] bottom-[3.73rem] md:w-[22rem] w-[60rem]'}
                classTitle={'md:text-[3.4375rem] text-[8.53333rem]'}
                background={'bg-[#f5f5f5]'}
            />
            <main className='containerWrapper'>
                <HandleChangeSlug listSlug={listSlug} />
                <TitlePage_Tech check={2} lang={lang} slugPage={slugPage} titlePage={titlePage} />
                <Introduce dataIntro={dataGravure?.introduce} />
                <System dataSystem={dataGravure?.system} />
                <ContentGravure dataContent={dataGravure?.mainContent} />
            </main>
            
        </>
    )
}

export default IndexGravure