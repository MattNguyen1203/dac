import ScrollToTop from '@/components/common/ScrollToTop'
import Contact from '@/components/contact/Contact'
import { fetchData } from '@/data/fetchData'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_CONTACT_PAGE, META_CONTACT_QUERY, SLUG_CONTACT_QUERY } from '@/graphql/contact/query'
import { getMeta } from '@/graphql/metaData/getMeta'
import React, { Suspense } from 'react'

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
export async function generateStaticParams() {
  return [{ lang: "en" }];
}
export async function generateMetadata({ params: { lang } }) {
    const res = await fetchData(META_CONTACT_QUERY, { language: lang?.toUpperCase() })
    const home = res?.data?.page?.translation?.seo
    const featuredImage = res?.data?.page?.translation?.featuredImage
    const title = home?.title
    const excerpt = home?.metaDesc
    return getMeta(title, excerpt, featuredImage)
}

async function page({ params: { lang } }) {
    let data = await getDataPage(lang, GET_DATA_CONTACT_PAGE)
    const listSlugContact = await getDataPage(lang,SLUG_CONTACT_QUERY(data?.data?.page?.translation?.id))
    const listSlug = {
        slugVi:'/'+ (listSlugContact?.data?.page?.translations[0]?.language?.code==='VI'?listSlugContact?.data?.page?.translations[0]?.slug:listSlugContact?.data?.page?.slug),
        slugEn:'/en/' +(listSlugContact?.data?.page?.translations[0]?.language?.code==='EN'?listSlugContact?.data?.page?.translations[0]?.slug:listSlugContact?.data?.page?.slug)
    }
    return (
        <>
            <Suspense>
                <ScrollToTop />
                <Contact 
                    dataContact={data?.data?.page?.translation?.contact} 
                    lang={lang} 
                    listSlug={listSlug}
                />
            </Suspense>
        </>
    )
}

export default page