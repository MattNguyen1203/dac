import ScrollToTop from '@/components/common/ScrollToTop'
import Design from '@/components/design/Design'
import { fetchData } from '@/data/fetchData'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_DESIGN, GET_META_DESIGN, SLUG_DESIGN_QUERY } from '@/graphql/design/query'
import { getMeta } from '@/graphql/metaData/getMeta'
import React from 'react'

export async function generateStaticParams() {
    return [{ lang: "en" }];
}

export async function generateMetadata({ params: { lang } }) {
    const res = await fetchData(GET_META_DESIGN, { language: lang?.toUpperCase() })
    const home = res?.data?.page?.translation?.seo
    const featuredImage = res?.data?.page?.translation?.featuredImage
    const title = home?.title
    const excerpt = home?.metaDesc
    return getMeta(title, excerpt, featuredImage)
}
export default async function page({ params: { lang } }) {
    let language = lang?.toUpperCase()
    let data = await getDataPage(language, GET_DATA_DESIGN)
    const listSlugDesign = await getDataPage(lang,SLUG_DESIGN_QUERY(data?.data?.page?.translation?.id))
    const listSlug = {
        slugVi:'/'+ (listSlugDesign?.data?.page?.translations[0]?.language?.code==='VI'?listSlugDesign?.data?.page?.translations[0]?.slug:listSlugDesign?.data?.page?.slug),
        slugEn:'/en/' +(listSlugDesign?.data?.page?.translations[0]?.language?.code==='EN'?listSlugDesign?.data?.page?.translations[0]?.slug:listSlugDesign?.data?.page?.slug)
    }

    return (
        <>
            <ScrollToTop />
            <Design listSlug={listSlug} data={data?.data?.page?.translation} />
        </>
    )
}

