import HomePage from "@/components/home/Home";
import { fetchData } from "@/data/fetchData";
import getDataPage from "@/data/getDataPage";
import getDataHomePage from "@/data/homePage/getDataHomePage";
import { GET_DATA_HOMEPAGE, GET_META_HOME, GET_NEWS_HOMEPAGE } from "@/graphql/home/query";
import { getMeta } from "@/graphql/metaData/getMeta";
import { GET_DATA_CATEGORY_PRODUCT_SERVICE, SLUG_CATE_QUERY, SLUG_FEATURE_PRODUCT_QUERY } from "@/graphql/product/query";

export async function generateMetadata({ params: { lang } }) {
  const res = await fetchData(GET_META_HOME, { language: lang?.toUpperCase() })
  const home = res?.data?.page?.translation?.seo
  const featuredImage = res?.data?.page?.translation?.featuredImage
  const title = home?.title
  const excerpt = home?.metaDesc
  return getMeta(title, excerpt, featuredImage)
}


export default async function Page({ params: { lang } }) {

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
  let language = lang.toUpperCase()
  let data = await getDataHomePage(language, GET_DATA_HOMEPAGE)
  let dataCategory = await getDataPage(lang, GET_DATA_CATEGORY_PRODUCT_SERVICE)
  let dataNewsHomepage = await fetchData(GET_NEWS_HOMEPAGE,{language:lang?.toUpperCase()})
  return (
    <main>
      <HomePage
        data={data}
        lang={lang}
        dataProductList={dataCategory?.data?.allCategoryProducts?.nodes}
        dataNewsHome={dataNewsHomepage?.data?.posts?.nodes}
        slugProducts={slugProducts}
      />
    </main>
  )
}
