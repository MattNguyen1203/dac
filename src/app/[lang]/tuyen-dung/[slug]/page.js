import ScrollToTop from '@/components/common/ScrollToTop';
import IndexRecruitmentDetail from '@/components/recruitment/recruitment-detail/IndexRecruitmentDetail'
import { fetchData } from '@/data/fetchData';
import getDataDetail from '@/data/getDataDetail'
import getDataPage from '@/data/getDataPage';
import { getMeta } from '@/graphql/metaData/getMeta';
import { GET_DATA_NEW_JOBS, GET_DATA_RECRUIMENT_DETAIL, META_RECRUITMENT_DETAIL_QUERY, SLUG_RECRUITMENT_DETAIL_QUERY } from '@/graphql/recruitment/query';
import React from 'react'


const GET_PARAMS_ALL_JOBS = `query ($language: LanguageCodeFilterEnum!) {
    allJobOpportunity(first: 100, where: {language: $language}) {
       nodes {
         slug
       }
     }
   }`
export async function generateStaticParams({ params: { lang } }) {
    const { data } = await fetchData(GET_PARAMS_ALL_JOBS,{language:"VI"})
  
    const jobs = data?.allJobOpportunity?.nodes || []
    
    return jobs.map((post) => ({
      slug: post?.slug || undefined,
    }))
}


export async function generateMetadata({ params: { lang, slug } }) {
    const res = await fetchData(META_RECRUITMENT_DETAIL_QUERY, { language: lang?.toUpperCase(), slug: slug })
    const recruiment = res?.data?.jobOpportunity?.translation?.seo
    const featuredImage = res?.data?.jobOpportunity?.translation?.featuredImage
    const title = recruiment?.title
    const excerpt = recruiment?.metaDesc
    return getMeta(title, excerpt, featuredImage)
}

async function page({ params: { lang, slug } }) {
    let data = await getDataDetail(lang, slug, GET_DATA_RECRUIMENT_DETAIL)
    let dataJob = await getDataPage(lang, GET_DATA_NEW_JOBS)
    const dataDetail = data?.data?.jobOpportunity?.translation
    const dataJobNew = dataJob?.data?.allJobOpportunity?.nodes
    const listSlugRecruitmentDetail = await getDataPage(lang,SLUG_RECRUITMENT_DETAIL_QUERY(data?.data?.jobOpportunity?.translation?.id))
    const listSlug = {
        slugVi:'/tuyen-dung/'+ (listSlugRecruitmentDetail?.data?.jobOpportunity?.translations[0]?.language?.code==='VI'?listSlugRecruitmentDetail?.data?.jobOpportunity?.translations[0]?.slug:listSlugRecruitmentDetail?.data?.jobOpportunity?.slug),
        slugEn:'/en/recruitment/' +(listSlugRecruitmentDetail?.data?.jobOpportunity?.translations[0]?.language?.code==='EN'?listSlugRecruitmentDetail?.data?.jobOpportunity?.translations[0]?.slug:listSlugRecruitmentDetail?.data?.jobOpportunity?.slug)
    }
    return (
      <>
        <ScrollToTop />
        <IndexRecruitmentDetail listSlug={listSlug} lang={lang} dataJobNew={dataJobNew} data={dataDetail} />
      </>
    )
}

export default page