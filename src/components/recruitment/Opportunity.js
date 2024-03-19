import React from 'react'
import OpportunityItem1 from '../common/OppoturnityItem1'
function Opportunity({ dataOp, dataPagination, lang }) {

    return (
        <section className='md:pt-[5.1rem]  px-[4.27rem]  md:px-[4.17rem]'>
            <h2 className='heading max-md:hidden md:mb-[5.1rem] max-md:!text-[6.93333rem]'>{dataOp?.subTitle}</h2>
            <div className='max-md:flex flex-col-reverse'>
                <div className='md:grid grid-cols-4 gap-x-[2.6rem]'>
                    {dataPagination?.nodes?.map((item, index) => (
                        <OpportunityItem1 lang={lang} key={index} data={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Opportunity