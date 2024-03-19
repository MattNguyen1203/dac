import ScrollToTop from '@/components/common/ScrollToTop'
import Recruitment from '@/components/recruitment/Recruitment'
import { fetchData } from '@/data/fetchData'
import getData from '@/data/getData'
import getDataPage from '@/data/getDataPage'
import { getMeta } from '@/graphql/metaData/getMeta'
import { GET_ALL_SEARCH_BY_SERVER, GET_DATA_RECRUIMENT_PAGE, META_RECRUITMENT_QUERY, SLUG_RECRUITMENT_QUERY } from '@/graphql/recruitment/query'
import { Suspense } from 'react'

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    // Also supported by less commonly used
    // interactiveWidget: 'resizes-visual',
  }
export async function generateMetadata({ params: { lang } }) {
    const res = await fetchData(META_RECRUITMENT_QUERY, { language: lang?.toUpperCase() })
    const home = res?.data?.page?.translation?.seo
    const featuredImage = res?.data?.page?.translation?.featuredImage
    const title = home?.title
    const excerpt = home?.metaDesc
    return getMeta(title, excerpt, featuredImage)
}
export default async function page({ params, searchParams }) {
    let data = await getDataPage(params?.lang, GET_DATA_RECRUIMENT_PAGE)
    const dataRecruitment = data?.data?.page?.translation?.recruiment
    const offset = (searchParams?.page - 1) * 4 || 0
    const text = searchParams?.text || ''
    const dataFirstIn = await getData(GET_ALL_SEARCH_BY_SERVER(offset, params?.lang?.toUpperCase(), text))
    const listSlugRecruitment = await getDataPage( params?.lang?.toUpperCase(),SLUG_RECRUITMENT_QUERY(data?.data?.page?.translation?.id))
    const listSlug = {
        slugVi:'/'+ (listSlugRecruitment?.data?.page?.translations[0]?.language?.code==='VI'?listSlugRecruitment?.data?.page?.translations[0]?.slug:listSlugRecruitment?.data?.page?.slug),
        slugEn:'/en/' +(listSlugRecruitment?.data?.page?.translations[0]?.language?.code==='EN'?listSlugRecruitment?.data?.page?.translations[0]?.slug:listSlugRecruitment?.data?.page?.slug)
    }
    return (
            <Suspense fallback={<div>...loading</div>}>
                <ScrollToTop />
                <Recruitment listSlug={listSlug} dataFirstIn={dataFirstIn?.data?.allJobOpportunity} lang={params?.lang} data={dataRecruitment} />
            </Suspense>
    )
}