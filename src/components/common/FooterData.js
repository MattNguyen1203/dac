import React from 'react'
import Footer from './Footer'
import { COOKIE_QUERY, DATA_SOCIAL_FOOTER, GET_DATA_FOOTER, POLICY_QUERY, TERM_CONDITION_QUERY } from '@/graphql/home/query';
import { fetchData } from '@/data/fetchData';

const ARR_FUNC_FOOTER = [
    GET_DATA_FOOTER,
    POLICY_QUERY,
    TERM_CONDITION_QUERY,
    COOKIE_QUERY,
    DATA_SOCIAL_FOOTER
]

async function FooterData({lang}) {
    let [
        dataFooter,
        dataPolicy,
        dataTerm,
        dataCookie,
        dataSocialFooter
    ] = await Promise.all(ARR_FUNC_FOOTER.map((item) => {
        return fetchData(item,{language:lang?.toUpperCase()})
    }))
    const dataFooterFinal = dataFooter?.data?.page?.translation;

  return (
    <Footer
        lang={lang}
        data={dataFooterFinal}
        dataSocialFooter={dataSocialFooter}
        dataPolicy={dataPolicy?.data?.page?.translation}
        dataTerm={dataTerm?.data?.page?.translation}
        dataCookie={dataCookie?.data?.page?.translation}
    />
  )
}

export default FooterData
