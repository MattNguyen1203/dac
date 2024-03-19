import Image from 'next/image'
import React from 'react'

function TextnologyContent({ icon, text,className }) {
    return (
        <div className={`flex flex-col md:w-[23.54167rem] max-md:mb-[7rem] ${className}`}>
            <Image src={icon?.sourceUrl} alt={icon?.altText || 'icon'} width={100} height={100} quality={100} className='md:w-[5.78125rem] md:h-[5.78125rem] w-[18.13333rem] h-[18.08693rem]' />
            <p className='md:mt-[2.14rem] mt-[5rem] priDesc '
                dangerouslySetInnerHTML={{ __html: `${text}` }}>

            </p>
        </div>
    )
}

export default TextnologyContent