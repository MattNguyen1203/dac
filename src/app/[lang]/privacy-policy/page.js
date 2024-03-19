import Privacy from '@/components/privacy-policy/Privacy'
import { fetchData } from '@/data/fetchData'
import getDataPage from '@/data/getDataPage'
import { PRIVACY_POLICY, SLUG_POLICY_QUERY } from '@/graphql/policy/query'

export async function generateStaticParams() {
  return [{ lang: "en" }];
}
async function page({ params: { lang } }) {
    const data = await fetchData(PRIVACY_POLICY, { language: lang?.toUpperCase()})
    const listSlugCookie = await getDataPage(lang,SLUG_POLICY_QUERY(data?.data?.page?.translation?.id))
    const listSlug = {
        slugVi:'/'+ (listSlugCookie?.data?.page?.translations[0]?.language?.code==='VI'?listSlugCookie?.data?.page?.translations[0]?.slug:listSlugCookie?.data?.page?.slug),
        slugEn:'/en/' +(listSlugCookie?.data?.page?.translations[0]?.language?.code==='EN'?listSlugCookie?.data?.page?.translations[0]?.slug:listSlugCookie?.data?.page?.slug)
    }
  return (
    <Privacy listSlug={listSlug} />
  )
}

export default page