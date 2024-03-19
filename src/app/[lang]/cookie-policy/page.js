import Cookie from '@/components/cookie-policy/Cookie'
import { fetchData } from '@/data/fetchData'
import getDataPage from '@/data/getDataPage'
import { POLICY_COOKIE_QUERY, SLUG_POLICY_QUERY } from '@/graphql/policy/query'

export async function generateStaticParams() {
  return [{ lang: "en" }];
}
async function page({ params: { lang } }) {
  const data = await fetchData(POLICY_COOKIE_QUERY, { language: lang?.toUpperCase()})
  const listSlugCookie = await getDataPage(lang,SLUG_POLICY_QUERY(data?.data?.page?.translation?.id))
    const listSlug = {
        slugVi:'/'+ (listSlugCookie?.data?.page?.translations[0]?.language?.code==='VI'?listSlugCookie?.data?.page?.translations[0]?.slug:listSlugCookie?.data?.page?.slug),
        slugEn:'/en/' +(listSlugCookie?.data?.page?.translations[0]?.language?.code==='EN'?listSlugCookie?.data?.page?.translations[0]?.slug:listSlugCookie?.data?.page?.slug)
    }
  return (
    <Cookie listSlug={listSlug}  />
  )
}

export default page