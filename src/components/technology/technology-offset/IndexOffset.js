import React from 'react'
import Introduce from './Introduce'
import System from './System'
import ContentOffset from './ContentOffset'
import Banner from '@/components/common/Banner'
import TitlePage_Tech from '@/components/common/TitlePage_Tech'
import HandleChangeSlug from '@/components/common/HandleChangeSlug'

function IndexOffset({ data,slugPage,titlePage,lang,listSlug}) {
    const dataOffset = data?.data?.page?.translation?.technology_common
    return (
      <div>
        <Banner
          image={dataOffset?.banner?.background?.sourceUrl}
          altText={dataOffset?.banner?.background?.altText}
          title={dataOffset?.banner?.title}
          positionAndBox={
            'md:right-[14.47rem] md:bottom-[8rem] max-md:left-[4.27rem] bottom-[3.73rem] md:w-[19rem] w-[55rem]'
          }
          classTitle={'md:text-[3.4375rem] text-[8.53333rem]'}
          background={'bg-[#f5f5f5]'}
        />
        <main className='containerWrapper'>
          <HandleChangeSlug listSlug={listSlug} />
          <TitlePage_Tech
            check={0}
            lang={lang}
            slugPage={slugPage}
            titlePage={titlePage}
          />
          <Introduce dataIntro={dataOffset?.content?.introduce} />
          <System dataSystem={dataOffset?.content?.system} />
          <ContentOffset dataContent={dataOffset?.content?.mainContent} />
        </main>
      </div>
    )
}

export default IndexOffset