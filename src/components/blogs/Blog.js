'use client'
import React, { useEffect, useRef, useState } from 'react'
import Banner from './Banner'
import BlogItem from './BlogItem'
import { useMediaQuery } from 'react-responsive'
import useDebounce from '@/hooks/useDebounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import HandleChangeSlug from '../common/HandleChangeSlug'
import FireQuoteWidget from '../common/FireQuoteWidget'
import Loading from '../common/Loading'
function Blog({ lang, dataBlog, slug, listSlug, dataNewsV2 }) {
  const searchParams = useSearchParams()
  const page = searchParams?.get('page') || 1
  const textParam = searchParams?.get('text') || ''
  const [text, setText] = useState(textParam)
  const [number, setNumber] = useState(0)
  // const [dataNew, setDataNew] = useState([])
  const textSearch = useDebounce(text, 500)
  const pathName = usePathname()
  const router = useRouter()
  const eleRef = useRef()
  const seeMoreRef = useRef()
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
  const [currentPage, setCurrentPage] = useState(page - 1 || 0)
  const [postsPerPage, setPostsPerPage] = useState(isMobile ? 3 : 9)
  const lastPostIndex = (isMobile ? number + 1 : currentPage + 1) * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const dataSearch = dataNewsV2?.data?.posts?.nodes?.filter((item) =>
    item?.news?.name?.toLowerCase()?.includes(textSearch)
  )
  const dataFinal = dataSearch ? dataSearch : dataNewsV2?.data?.posts?.nodes
  const currentPosts = dataFinal?.slice(isMobile ? 0 : firstPostIndex, lastPostIndex)
  function handleInput(searchText) {
    setText(searchText)
    const paramNew = new URLSearchParams(searchParams)
    paramNew.set('page', page)
    paramNew.set('text', searchText)
    router.push(pathName + '?' + paramNew.toString(), {
      scroll: false
    })
  }
  const handleChangePage = (index) => {
    setCurrentPage(index)
    router.push(`?page=${index + 1}&text=${textSearch}`, {
      scroll: false
    })
  }
  ///////////////////////////////////////////// handle click mobile//////////////////////////////////////////
  const handleClick = () => {
    setNumber(number + 1)
  }
  const pageInfo = dataSearch && dataSearch?.length > 0 ? dataFinal?.length : dataNewsV2?.data?.posts?.nodes?.length
  const totalPage = Math?.ceil(pageInfo / 9)
  const allNews =
    currentPosts?.length === 0
      ? dataNewsV2?.data?.posts?.nodes?.slice(isMobile ? 0 : firstPostIndex, lastPostIndex)
      : currentPosts
  useEffect(() => {
    if (number === Math?.ceil(dataSearch?.length / 3) - 1 && seeMoreRef?.current) {
      seeMoreRef.current.style.display = 'none'
    } else {
      seeMoreRef.current.style.display = 'block'
    }
  }, [number, textSearch])

  // list category
  const listCategoryNews = [
    {
      nameVi: 'Con người app',
      nameEn: 'APP people',
      slug: 'con-nguoi-app',
      slugEn: 'app-people'
    },
    {
      nameVi: 'dành cho nhà đầu tư',
      nameEn: 'Investor',
      slug: 'nha-dau-tu',
      slugEn: 'investors'
    },
    {
      nameVi: 'dành cho doanh nghiệp',
      nameEn: 'Customer',
      slug: 'khach-hang',
      slugEn: 'customer'
    },
    {
      nameVi: 'Tin tức khác',
      nameEn: 'Others',
      slug: 'khac',
      slugEn: 'others'
    }
  ]

  const arrSke = new Array(8).fill(0)
  return (
    <>
      <Banner dataBanner={dataBlog} />
      <HandleChangeSlug listSlug={listSlug} />
      <section
        ref={eleRef}
        className='md:px-[7.17rem] containerWrapper max-md:mt-[4rem] blog_news md:pt-[3.13rem] md:pb-[2.97rem] max-md:flex flex-col-reverse'
      >
        <span
          ref={seeMoreRef}
          onClick={handleClick}
          className='md:!hidden text-[4.26667rem] text-[#00A84F] leading-[116.662%] underline text-center mb-[8.1rem] mt-[2rem]'
        >
          {lang === 'vi' ? 'Xem thêm' : 'See more'}
        </span>
        <div className='flex md:mb-[5.21rem] max-md:order-1 max-md:flex-col max-md:justify-center max-md:items-center max-md:mt-[8.27rem]'>
          {listCategoryNews?.map((item, index) => {
            return (
              <Link
                className='max-md:mb-[4.8rem]'
                key={index}
                href={`/${lang}/${lang === 'vi' ? 'tin-tuc-su-kien' : 'news'}/${
                  lang === 'vi' ? item?.slug : item?.slugEn || item?.slug
                }`}
              >
                <h2
                  className={`uppercase lg:text-[1.04167rem] md:text-[1.2rem] text-[4.26667rem] mr-[3.91rem] cursor-pointer ${
                    pathName?.endsWith(item?.slug) || pathName?.endsWith(item?.slugEn)
                      ? 'text-[#00A84F]'
                      : 'text-[#444]'
                  }`}
                >
                  {lang === 'vi' ? item?.nameVi : item?.nameEn}
                </h2>
              </Link>
            )
          })}
        </div>
        {!allNews ? (
          <div className='grid md:grid-cols-3 md:gap-x-[2.6rem] md:gap-y-[4.43rem] max-md:px-[4.27rem] md:mt-[2rem]'>
            {arrSke?.map((item, index) => {
              return (
                <Loading
                  className={'md:h-[28.02083rem] h-[91.46667rem]'}
                  key={index}
                />
              )
            })}
          </div>
        ) : (
          <div className='grid md:grid-cols-3 md:gap-x-[2.6rem] md:gap-y-[4.43rem] max-md:px-[4.27rem] md:mt-[2rem]'>
            {allNews?.map((item, index) => (
              <BlogItem
                slug={slug}
                lang={lang}
                key={index}
                data={item}
              />
            ))}
          </div>
        )}
        {/* input search */}
        <div className='searchTextBlog flex justify-center md:mt-[2.97rem] md:mb-[1rem] max-md:pt-[3.73rem] max-md:pb-[4.8rem]'>
          <input
            onChange={(e) => handleInput(e.target.value)}
            placeholder={`${lang === 'vi' ? 'Tìm Kiếm' : 'Search'}`}
            className='md:px-[0.8rem] md:pb-[0.25rem] md:w-[10.625rem] w-[42.4576rem] md:h-[2.1875rem] h-[8.8rem] md:rounded-[2.23958rem] rounded-[11.46667rem] bg-[#F0F0F0]'
          />
        </div>

        {/* pagination */}
        <div className='flex justify-center max-md:hidden items-center relative md:mt-[1rem]'>
          {Array.from({ length: totalPage }, (_, index) => (
            <div
              key={index}
              onClick={() => handleChangePage(index)}
              className={`${totalPage > 1 ? 'cursor-pointer md:w-[1.125rem] md:h-[2.125rem]' : 'hidden'}`}
            >
              <span className={`${currentPage === index ? 'text-[#00A84F]' : 'text-[#444]'}`}>{index + 1}</span>
            </div>
          ))}
        </div>
        {(pathName?.includes('/nha-dau-tu') || pathName?.includes('/investor')) && (
          <div className='max-md:order-2 mt-[4rem] max-md:mt-[1rem]'>
            <FireQuoteWidget></FireQuoteWidget>
          </div>
        )}
      </section>
    </>
  )
}

export default Blog
