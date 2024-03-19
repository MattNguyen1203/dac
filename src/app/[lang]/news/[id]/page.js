import Blog from '@/components/blogs/Blog'
import ScrollToTop from '@/components/common/ScrollToTop'
import { fetchData } from '@/data/fetchData'
import { getMeta } from '@/graphql/metaData/getMeta'
import { ALL_NEW_V2_QUERY, GET_META_NEWS, NEWS_QUERY, SLUG_BLOG_QUERY } from '@/graphql/news-blog/query'

const listSlugNews = [
  {
    slugVi:"/tin-tuc-su-kien/con-nguoi-app",
    slugEn:"/en/news/app-people",
  },
  {
    slugVi:"/tin-tuc-su-kien/nha-dau-tu",
    slugEn:"/en/news/investor",
  },
  {
    slugVi:"/tin-tuc-su-kien/khach-hang",
    slugEn:"/en/news/customers",
  },
  {
    slugVi:"/tin-tuc-su-kien/khac",
    slugEn:"/en/news/others",
  },
]


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export async function generateMetadata({ params: { lang } }) {
  const res = await fetchData(GET_META_NEWS, { language: lang?.toUpperCase() })
  const home = res?.data?.page?.translation?.seo
  const featuredImage = res?.data?.page?.translation?.featuredImage
  const title = home?.title
  const excerpt = home?.metaDesc
  return getMeta(title, excerpt, featuredImage)
}

async function page({ params: { lang,id } }) {
  let dataNews = await fetchData(NEWS_QUERY, { language: lang?.toUpperCase()})
  const item = listSlugNews?.find((e)=>{
      if(lang==='vi' && e?.slugVi?.includes(id)) return e
      if(lang==='en' && e?.slugEn?.includes(id)) return e
  })
  const listSlug = {
    slugVi:item?.slugVi,
    slugEn:item?.slugEn
  }
  const dataNewsV2 = await fetchData(ALL_NEW_V2_QUERY,{ language: lang?.toUpperCase(),term:id})
  return (
    <>
      <ScrollToTop />
      <Blog 
        listSlug={listSlug} 
        slug={id} 
        dataBlog={dataNews?.data?.page?.translation} 
        lang={lang} 
        dataNewsV2 = {dataNewsV2 || []}
      />
    </>
  )
}

export default page