import { fetchData } from "@/data/fetchData"
import { i18n } from "../../../i18n-config"

// tieu de
const NEWS_QUERY = `{
  posts(first: 1000, where: {language: VI}) {
    nodes {
      slug
      date
      categories{
        nodes{
          slug
        }
      }
    }
  }
}`

const NEWS_QUERY_EN = `{
  posts(first: 1000, where: {language: EN}) {
    nodes {
      slug
      date
      categories{
        nodes{
          slug
        }
      }
    }
  }
}`


// opporturnity
const JOB_QUERY = `{
 allJobOpportunity(first:1000, where: {language: VI}){
    nodes{
      slug
      date
    }
  }
}`

const JOB_QUERY_EN = `{
  allJobOpportunity(first:1000, where: {language: EN}){
     nodes{
       slug
       date
     }
   }
 }`

// thuoc la, ...
const PRODUCT_QUERY = `{
 allServiceProduct(first:1000, where: {language: VI}){
    nodes{
      slug
      date
    }
  }
}`
const PRODUCT_QUERY_EN = `{
  allServiceProduct(first:1000, where: {language: EN}){
     nodes{
       slug
       date
     }
   }
 }`


export default async function sitemap() {
  const news = await fetchData(NEWS_QUERY)
  const newsEn = await fetchData(NEWS_QUERY_EN)
  const jobs = await fetchData(JOB_QUERY)
  const jobsEn = await fetchData(JOB_QUERY_EN)
  const products = await fetchData(PRODUCT_QUERY)
  const productsEn = await fetchData(PRODUCT_QUERY_EN)
  const { locales } = i18n
  const arrLocales = [
    { value: 'vi', id: 'TGFuZ3VhZ2U6dmk=' },
    { value: 'en', id: 'TGFuZ3VhZ2U6ZW4=' }
  ]
  
  const arrNews = news?.data?.posts?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/tin-tuc-su-kien/${e?.categories?.nodes[0]?.slug}/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrNewsEn = newsEn?.data?.posts?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/news/${e?.categories?.nodes[0]?.slug}/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrJobs = jobs?.data?.allJobOpportunity?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/tuyen-dung/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrJobsEn = jobsEn?.data?.allJobOpportunity?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/recruitment/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrProducts = products?.data?.allServiceProduct?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/san-pham-dich-vu/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrProductsEn = productsEn?.data?.allServiceProduct?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/products/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  

  return [
    {
      url: process.env.DOMAIN,
      lastModified: new Date(),
      priority: 1
    },
    {
      url: `${process.env.DOMAIN}/en`,
      lastModified: new Date(),
      priority: 1
    },
    {
      url: `${process.env.DOMAIN}/san-pham-dich-vu`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/products`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/thiet-ke`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/design`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/ve-chung-toi/tam-nhin`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/about-us/vision`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/ve-chung-toi/chang-duong-phat-trien`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/about-us/journey`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/ve-chung-toi/chung-nhan`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/about-us/awards`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/ve-chung-toi/so-do-to-chuc`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/about-us/company-structure`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/tin-tuc-su-kien`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/news`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/tuyen-dung`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/recruitment`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/lien-he`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/contact`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/cong-nghe/in-offset`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/technology/offset-printing`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/cong-nghe/flexo`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/technology/flexography`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/cong-nghe/gravure`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/technology/gravure-printing`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/cong-nghe/digital`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/technology/digital-printing`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/cong-nghe/khac`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/technology/others`,
      lastModified: new Date(),
      priority: 0.9
    },
    ...arrNews,
    ...arrNewsEn,
    ...arrJobs,
    ...arrJobsEn,
    ...arrProducts,
    ...arrProductsEn
  ]
}

