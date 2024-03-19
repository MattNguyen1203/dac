import React from 'react'
import BannerDetail from './BannerDetail'
import ContentDetail from './ContentDetail'
import ItemBlogMobile from './ItemBlogMobile'
import HandleChangeSlug from '@/components/common/HandleChangeSlug'

function IndexBlogDetail({ data, lang,listSlug }) {
    const dataBanner = data?.news?.banner
    return (
        <>
            <HandleChangeSlug listSlug={listSlug}/>
            <BannerDetail data={dataBanner} />
            <ContentDetail data={data?.news?.content} dataSlide={data?.news} lang={lang} />
            <ItemBlogMobile data={data?.news?.content} dataSlide={data?.news} lang={lang} />
        </>
    )
}

export default IndexBlogDetail
