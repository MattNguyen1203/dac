import React from 'react'
import Banner from './Banner'
import Branch from './Branch'
import HandleChangeSlug from '../common/HandleChangeSlug'

function Design({data,listSlug}) {
    return (
        <>
            <HandleChangeSlug listSlug={listSlug}/>
            <Banner data={data?.design?.banner} />
            <Branch data={data?.design?.content} />
        </>
    )
}

export default Design
