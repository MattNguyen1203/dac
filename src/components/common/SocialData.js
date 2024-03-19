import getDataPage from '@/data/getDataPage'
import SocialActionMb from './SocialActionMb'
import { DATA_SOCIAL_FOOTER } from '@/graphql/home/query'

async function SocialData({lang}) {
    const getDataSocial = await getDataPage(lang,DATA_SOCIAL_FOOTER)
    const dataPartner = getDataSocial?.data?.page?.translation?.homepage?.partners
  return (
    <SocialActionMb lang={lang} dataPartner={dataPartner} />
  )
}

export default SocialData