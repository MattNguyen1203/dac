import Image from 'next/image'
import Link from 'next/link'

function Solution({ dataSolution }) {
  return (
    <div className='flex solution max-md:flex-col'>
      <div className="left bg-[#444] md:w-[32.9rem] max-md:h-[109.3rem] relative max-md:flex flex-row-reverse">
        <div className='md:hidden w-[50%] bg-[#B9B9B9] h-full'></div>
        <Image src={dataSolution?.thumbnail?.sourceUrl} width={1000} height={1000} quality={100} alt='phone' className='absolute bottom-0 md:z-10 max-md:h-full md:right-[-13rem] md:w-[56.25rem] md:h-[52.25rem] object-cover' />
      </div>
      <div className="right md:w-[67.135rem] md:bg-[#B9B9B9] bg-[#444] pb-[10.2rem] md:pl-[18.12rem] pl-[4.27rem] pr-[4.27rem] relative max-md:top-[-1rem]">
        <h3 className='md:text-[3.4375rem] text-[6.93333rem] md:text-[#444] text-[#fff] font-bold leading-[1.2] tracking-[-0.12375rem] title md:w-[39.4rem] pt-[6.46rem]'>
          {dataSolution?.title}
        </h3>
        <div className='md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] leading-[1.4] max-md:tracking-[-0.08533rem] md:text-[#444] text-[#fff] mt-[4rem] max-md:mb-[4rem]' dangerouslySetInnerHTML={{ __html: `${dataSolution?.listSolution}` }}></div>
        <div className='md:text-[1.5rem] lg:text-[1.35417rem] max-md:hidden md:tracking-[-0.02708rem] md:w-[44.3rem] text-justify text-[4.26667rem] leading-[1.2] md:text-[#444] text-[#fff] mt-[13rem]' dangerouslySetInnerHTML={{ __html: `${dataSolution?.description}` }}></div>
        <Link href='https://temchonggia.com.vn/' target='_blank' className='text-[4.26667rem] text_seemore md:text-[1.1rem] cursor-pointer leading-[116.662%] text-[#fff] md:text-[#444] underline tracking-[-0.04167rem] md:absolute md:right-[4.27rem]'>{dataSolution?.seemore}</Link>
      </div>
    </div>
  )
}

export default Solution