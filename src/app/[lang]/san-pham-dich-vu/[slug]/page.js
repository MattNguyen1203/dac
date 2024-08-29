import ScrollToTop from '@/components/common/ScrollToTop'
import ServiceDetail from '@/components/service/service-detail/ServiceDetail'
import { fetchData } from '@/data/fetchData'
import getDataDetail from '@/data/getDataDetail'
import getDataPage from '@/data/getDataPage'
import { getMeta } from '@/graphql/metaData/getMeta'
import {
  GET_DATA_PRODUCT_DETAIL,
  META_PRODUCT_DETAIL_QUERY,
  OTHER_PRODUCT_QUERY,
  SLUG_PRODUCT_DETAIL_QUERY,
  SUBTITLE_PRODUCT_QUERY
} from '@/graphql/product/query'
import React from 'react'

const GET_PARAMS_ALL_PRODUCTS = `query ($language: LanguageCodeFilterEnum!) {
    allServiceProduct(first: 100, where: {language: $language}) {
      nodes {
        slug
      }
    }
  }`
export async function generateStaticParams({ params: { lang } }) {
  const { data } = await fetchData(GET_PARAMS_ALL_PRODUCTS, { language: 'VI' })

  const products = data?.allServiceProduct?.nodes || []
  return products.map((post) => ({
    slug: post?.slug || undefined
  }))
}

export async function generateMetadata({ params: { lang, slug } }) {
  const res = await fetchData(META_PRODUCT_DETAIL_QUERY, { language: lang?.toUpperCase(), slug: slug })
  const servProduct = res?.data?.serviceProduct?.translation?.seo
  const featuredImage = res?.data?.serviceProduct?.translation?.featuredImage
  const title = servProduct?.title
  const excerpt = servProduct?.metaDesc
  return getMeta(title, excerpt, featuredImage)
}

export default async function page({ params: { lang, slug } }) {
  let data = await getDataDetail(lang, slug, GET_DATA_PRODUCT_DETAIL)
  const idCate = data?.data?.serviceProduct?.translation?.categoryProducts?.nodes[0]?.id
  const product = await fetchData(OTHER_PRODUCT_QUERY, { taxonomyId: idCate })
  const subTitle = await fetchData(SUBTITLE_PRODUCT_QUERY, { termTaxonomId: idCate, language: lang?.toUpperCase() })
  const otherProduct = product?.data?.allCategoryProducts?.nodes[0]?.serviceProduct?.nodes?.filter(
    (item) => item?.slug !== slug
  )

  const listSlugProductDetail = await getDataPage(
    lang,
    SLUG_PRODUCT_DETAIL_QUERY(data?.data?.serviceProduct?.translation?.id)
  )
  const listSlug = {
    slugVi:
      '/san-pham-dich-vu/' +
      (listSlugProductDetail?.data?.serviceProduct?.translations[0]?.language?.code === 'VI'
        ? listSlugProductDetail?.data?.serviceProduct?.translations[0]?.slug
        : listSlugProductDetail?.data?.serviceProduct?.slug),
    slugEn:
      '/en/products/' +
      (listSlugProductDetail?.data?.serviceProduct?.translations[0]?.language?.code === 'EN'
        ? listSlugProductDetail?.data?.serviceProduct?.translations[0]?.slug
        : listSlugProductDetail?.data?.serviceProduct?.slug)
  }
  return (
    <>
      <ScrollToTop />
      <ServiceDetail
        data={data?.data?.serviceProduct?.translation}
        lang={lang}
        otherProduct={otherProduct}
        subTitle={subTitle?.data?.allCategoryProducts?.nodes[0]?.product_category?.info?.subTitle}
        listSlug={listSlug}
      />
    </>
  )
}
