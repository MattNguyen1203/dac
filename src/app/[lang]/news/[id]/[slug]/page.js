import IndexBlogDetail from '@/components/blogs/blog-detail/IndexBlogDetail'
import ScrollToTop from '@/components/common/ScrollToTop';
import { fetchData } from '@/data/fetchData';
import getDataDetail from '@/data/getDataDetail'
import getDataPage from '@/data/getDataPage';
import { getMeta } from '@/graphql/metaData/getMeta';
import { GET_DATA_NEWS_DETAIL, META_NEWS_DETAIL_QUERY, SLUG_BLOG_DETAIL_QUERY } from '@/graphql/news-blog/query';
import React from 'react'

const GET_PARAMS_ALL_NEWS = `query ($language: LanguageCodeFilterEnum!) {
  posts(first: 100, where: {language: $language}) {
    nodes {
      slug
      categories {
        nodes {
          slug
        }
      }
    }
  }
}`
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

export async function generateStaticParams({ params: { lang } }) {
    const { data } = await fetchData(GET_PARAMS_ALL_NEWS,{language:"VI"})
  
    const posts = data?.posts?.nodes || []
    
    return posts.map((post) => ({
      id:post?.categories?.nodes[0]?.slug,
      slug: post?.slug || undefined,
    }))

}

export async function generateMetadata({ params: { lang, slug} }) {
    const res = await fetchData(META_NEWS_DETAIL_QUERY, { language: lang?.toUpperCase(), slug: slug })
    const news = res?.data?.post?.translation?.seo
    const featuredImage = res?.data?.post?.translation?.featuredImage
    const title = news?.title
    const excerpt = news?.metaDesc
    return getMeta(title, excerpt, featuredImage)
}

export default async function page({ params: { lang, slug, id  } }) {
    let data = await getDataDetail(lang, slug, GET_DATA_NEWS_DETAIL)
    const dataDetail = data?.data?.post?.translation
    const listSlugBlogDetail = await getDataPage(lang,SLUG_BLOG_DETAIL_QUERY(data?.data?.post?.translation?.id))
    const item = listSlugNews.find((e)=>{
      if(lang==='vi' && e?.slugVi?.includes(id)) return e
      if(lang==='en' && e?.slugEn?.includes(id)) return e
    })
    
    const listSlug = {
        slugVi:item?.slugVi + "/" + (listSlugBlogDetail?.data?.post?.translations[0]?.language?.code==='VI'?listSlugBlogDetail?.data?.post?.translations[0]?.slug:listSlugBlogDetail?.data?.post?.slug),
        slugEn:item?.slugEn + "/" + (listSlugBlogDetail?.data?.post?.translations[0]?.language?.code==='EN'?listSlugBlogDetail?.data?.post?.translations[0]?.slug:listSlugBlogDetail?.data?.post?.slug)
    }
    return (
      <>
        <ScrollToTop />
        <IndexBlogDetail listSlug={listSlug} lang={lang} data={dataDetail} />
      </>
    )
}


