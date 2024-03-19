import ScrollToTop from '@/components/common/ScrollToTop'
import Service from '@/components/service/Service'
import { fetchData } from '@/data/fetchData'
import getDataPage from '@/data/getDataPage'
import { getMeta } from '@/graphql/metaData/getMeta'
import { GET_DATA_CATEGORY_PRODUCT_SERVICE, GET_DATA_PRODUCT_PAGE, META_SERVICE_PRODUCT_QUERY, SLUG_CATE_QUERY, SLUG_FEATURE_PRODUCT_QUERY, SLUG_PRODUCT_QUERY } from '@/graphql/product/query'
import React from 'react'

export async function generateMetadata({ params: { lang } }) {
    const res = await fetchData(META_SERVICE_PRODUCT_QUERY, { language: lang?.toUpperCase() })
    const home = res?.data?.page?.translation?.seo
    const featuredImage = res?.data?.page?.translation?.featuredImage
    const title = home?.title
    const excerpt = home?.metaDesc
    return getMeta(title, excerpt, featuredImage)
}

export default async function page({ params: { lang } }) {
    let data = await getDataPage(lang, GET_DATA_PRODUCT_PAGE)
    let dataCategory = await getDataPage(lang, GET_DATA_CATEGORY_PRODUCT_SERVICE)
    let slugCategory = await fetchData(SLUG_CATE_QUERY,{ language: lang?.toUpperCase() })
    const listSlugCateProduct = slugCategory?.data?.allCategoryProducts?.nodes

    const slugItems = await Promise.all(listSlugCateProduct?.map((item)=>{
        return fetchData(SLUG_FEATURE_PRODUCT_QUERY,{language:lang?.toUpperCase(),term:item?.slug})
    }))
    
    const slugProducts = slugItems.map((slugItem) => {
        const nodes = slugItem?.data?.allServiceProduct?.nodes;
        if (nodes && nodes.length > 0) {
          return nodes[0]?.slug;
        }
        return '/';
      });
    const listSlugProductPage = await getDataPage(lang,SLUG_PRODUCT_QUERY(data?.data?.page?.translation?.id))
    const listSlug = {
        slugVi:'/'+ (listSlugProductPage?.data?.page?.translations[0]?.language?.code==='VI'?listSlugProductPage?.data?.page?.translations[0]?.slug:listSlugProductPage?.data?.page?.slug),
        slugEn:'/en/' +(listSlugProductPage?.data?.page?.translations[0]?.language?.code==='EN'?listSlugProductPage?.data?.page?.translations[0]?.slug:listSlugProductPage?.data?.page?.slug)
    }
    return (
        <>
            <ScrollToTop />
            <Service
                data={data?.data?.page?.translation}
                lang={lang}
                dataCate={dataCategory?.data?.allCategoryProducts?.nodes}
                listSlug={listSlug}
                slugProducts={slugProducts}
            />
        </>
        
    )
}


