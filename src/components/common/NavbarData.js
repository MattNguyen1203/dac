import React from 'react'
import Navbar from './Navbar'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_CATEGORY_PRODUCT_SERVICE, SLUG_CATE_QUERY, SLUG_FEATURE_PRODUCT_QUERY } from '@/graphql/product/query'
import { fetchData } from '@/data/fetchData'
async function NavbarData({ lang }) {
    const dataCategory = await getDataPage(lang, GET_DATA_CATEGORY_PRODUCT_SERVICE)
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
    return (
        <Navbar
            lang={lang}
            dataProductList={dataCategory?.data?.allCategoryProducts?.nodes}
            slugProducts={slugProducts}
        />
    )
}

export default NavbarData
