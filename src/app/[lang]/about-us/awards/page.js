import React from 'react'
import getDataPage from '@/data/getDataPage'
import {
  GET_DATA_ABOUT_US_PRIZE,
  META_PRIZE_QUERY,
  SLUG_JOURNEY_QUERY,
  SLUG_ORGANIZE_QUERY,
  SLUG_PRIZE_QUERY,
  SLUG_VISION_PAGE_QUERY,
  SLUG_VISION_QUERY
} from '@/graphql/about-us/query'
import { IndexPrize } from '@/components/about-us/about-prize/IndexPrize'
import { fetchData } from '@/data/fetchData'
import { getMeta } from '@/graphql/metaData/getMeta'
import ScrollToTop from '@/components/common/ScrollToTop'
const PARAM_ARR = [SLUG_VISION_QUERY, SLUG_JOURNEY_QUERY, SLUG_PRIZE_QUERY, SLUG_ORGANIZE_QUERY]
export async function generateMetadata({ params: { lang } }) {
  const res = await fetchData(META_PRIZE_QUERY, { language: lang?.toUpperCase() })
  const home = res?.data?.page?.translation?.seo
  const featuredImage = res?.data?.page?.translation?.featuredImage
  const title = home?.title
  const excerpt = home?.metaDesc
  return getMeta(title, excerpt, featuredImage)
}

async function page({ params }) {
  let language = params?.lang?.toUpperCase() || 'VI'
  let data = await getDataPage(language, GET_DATA_ABOUT_US_PRIZE)
  const [slugVision, slugJourney, slugPrize, slugOrganize] = await Promise.all(
    PARAM_ARR.map((item) => {
      return fetchData(item, { language: language })
    })
  )
  const slugV = slugVision?.data?.page?.translation?.slug
  const slugJ = slugJourney?.data?.page?.translation?.slug
  const slugP = slugPrize?.data?.page?.translation?.slug
  const slugO = slugOrganize?.data?.page?.translation?.slug
  const titleV = slugVision?.data?.page?.translation?.vision?.tilePage
  const titleJ = slugJourney?.data?.page?.translation?.journey?.banner?.titlePage
  const titleP = slugPrize?.data?.page?.translation?.prize?.titlePage
  const titleO = slugOrganize?.data?.page?.translation?.organize?.titlePage
  const slugPage = [slugV, slugJ, slugP, slugO]
  const titlePage = [titleV, titleJ, titleP, titleO]

  // get slug VI, EN
  const listSlugAboutUs = await getDataPage(language, SLUG_VISION_PAGE_QUERY(data?.data?.page?.translation?.id))
  const listSlug = {
    slugVi:
      '/ve-chung-toi/' +
      (listSlugAboutUs?.data?.page?.translations[0]?.language?.code === 'VI'
        ? listSlugAboutUs?.data?.page?.translations[0]?.slug
        : listSlugAboutUs?.data?.page?.slug),
    slugEn:
      '/en/about-us/' +
      (listSlugAboutUs?.data?.page?.translations[0]?.language?.code === 'EN'
        ? listSlugAboutUs?.data?.page?.translations[0]?.slug
        : listSlugAboutUs?.data?.page?.slug)
  }
  return (
    <>
      <ScrollToTop />
      <IndexPrize
        slugPage={slugPage}
        titlePage={titlePage}
        data={data}
        lang={params?.lang}
        listSlug={listSlug}
      />
    </>
  )
}

export default page
