import React from 'react'
import History from './History'
import HistoryMobile from './HistoryMobile'
import Banner from '@/components/common/Banner'
import TitlePage_About_Us from '@/components/common/TitlePage_About_Us'
import HandleChangeSlug from '@/components/common/HandleChangeSlug'

function IndexJourney({ data, lang, slugPage, titlePage,listSlug }) {
  const dataJourney = data?.data?.page?.translation
  return (
    <>
      <Banner
        id={'banner_journey'}
        image={dataJourney?.journey?.banner?.imagebanner?.sourceUrl}
        altText={dataJourney?.journey?.banner?.imagebanner?.altText}
        textAboutUs={dataJourney?.journey?.banner?.textbanner}
        check={true}
      />
      <HandleChangeSlug listSlug={listSlug} />
      <main className='containerWrapper'>
        <TitlePage_About_Us check={1} lang={lang} slugPage={slugPage} titlePage={titlePage} />
        <div className='mt-[5.31rem]'>
          <div className='content' id='contentHisMb'>
            <h3 className='heading max-md:mb-[5rem]'>{dataJourney?.journey?.content?.title}</h3>
            <div className='lg:text-[1.35417rem] text-[4.26667rem] md:text-[1.5rem] md:mt-[1.6rem] md:tracking-[-0.02708rem] leading-[1.2] tracking-[-0.128rem] text-justify md:w-[44.375rem]' dangerouslySetInnerHTML={{ __html: `${dataJourney?.journey?.content?.description}` }}></div>
          </div>
          <History data={dataJourney?.journey?.content} />
          <HistoryMobile data={dataJourney?.journey?.content} />
        </div>
      </main>
    </>
  )
}

export default IndexJourney