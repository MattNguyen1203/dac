import React from 'react'

function Button({ text,className }) {
    return (
        <button type='submit' className={`md:w-[12rem] lg:w-[9.6875rem] cursor-pointer w-[32.8rem] relative h-[10.93333rem] rounded-[11.46667rem] flex justify-center items-center md:h-[4rem] lg:h-[3.02083rem] md:rounded-[2.23958rem] bg-[#000D10] md:px-[1.3rem] md:py-[1rem] px-[5.87rem] py-[3.5rem] ${className}`}>
            <span className='subDescription !font-bold !text-[#fff] max-md:!text-[3.2rem]'>{text}</span>
        </button>
    )
}

export default Button