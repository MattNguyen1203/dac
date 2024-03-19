"use client"
import useStore from '@/(store)/store'
import useDebounce from '@/hooks/useDebounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { NEWS_SEARCH_INPUT_QUERY } from '@/graphql/news-blog/query'
import { PRODUCT_SEARCH_INPUT_QUERY } from '@/graphql/product/query'
import { JOB_SEARCH_INPUT_QUERY } from '@/graphql/recruitment/query'
import Image from 'next/image'
import Link from 'next/link'
import img from '@/assets/imgs/imageDefault.png'
import Loading from './Loading'

const arrProductCateVi = ["bao-bi-thuoc-la-vi",
"bao-bi-thuc-pham-vi",
"thuong-mai-vat-tu-nghanh-in-vi",
"cho-thue-van-phong-vi",
"bao-bi-nong-san-vi",
"bao-bi-hang-tieu-dung-vi",
"bao-bi-duoc-my-pham-vi",
"bao-bi-bia-ruou-nuoc-giai-khat-vi"]

const arrProductCateEn = ["bao-bi-thuoc-la-en",
"bao-bi-thuc-pham-en",
"thuong-mai-vat-tu-nghanh-in-en",
"cho-thue-van-phong-en",
"bao-bi-nong-san-en",
"bao-bi-hang-tieu-dung-en",
"bao-bi-duoc-my-pham-en",
"bao-bi-bia-ruou-nuoc-giai-khat-en"]

const arrNewsCateVi = [
  "con-nguoi-app",
  "khach-hang",
  "nha-dau-tu",
  "khac"
]
const arrNewsCateEn = [
  "app-people",
  "customers",
  "investors",
  "others"
]


function PopupSearch() {
  const setSearch = useStore((state) => state.setSearch)
  let lang = useStore((state) => state.lang);
  let language = lang?.toUpperCase()
  const router = useRouter();
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const textParam = searchParams.get('text') || ''
  const [text, setText] = useState(textParam)
  const [dataSearch,setDataSearch] = useState([])
  const [number,setNumber] = useState(5)
  const textSearch = useDebounce(text, 500)

  const handleChangeInput = (e) => {
    setText(e.target.value)
  }
  useEffect(() => {
    const paramNew = new URLSearchParams(searchParams)
    if (!textSearch) {
      paramNew.set('text', '')
      return router.replace(pathName, {
          scroll: false,
      })
    }else{
        paramNew.set('text', textSearch)
        router.push(pathName + '?' + paramNew.toString(), {
            scroll: false,
        })
    }
  }, [textSearch])

  const { data: jobsResult,refetch:refetchJob,loading:loadingJob } = useQuery(JOB_SEARCH_INPUT_QUERY,{
    variables: {
      language,
      offset:0,
      size:5,
      text: textSearch,
    }
  });
  
  const { data: productsResult, refetch:refetchProduct,loading:loadingProduct} = useQuery(PRODUCT_SEARCH_INPUT_QUERY,{
    variables: {
      language,
      offset:0,
      size:5,
      text: textSearch,
      term: lang === 'vi' ? arrProductCateVi : arrProductCateEn
    }
  });

  const { data: newsResult, refetch:refetchNew,loading:loadingNews } = useQuery(NEWS_SEARCH_INPUT_QUERY,{
    variables: {
      language,
      offset:0,
      size:5,
      text: textSearch,
      term: lang === 'vi' ? arrNewsCateVi : arrNewsCateEn
    }
  });

  const newsResultData = newsResult?.posts?.nodes
  const jobsResultData = jobsResult?.allJobOpportunity?.nodes
  const productsResultData = productsResult?.allServiceProduct?.nodes
  const dataFinal = newsResultData?.concat(jobsResultData, productsResultData);
  
  useEffect(()=>{
    refetchJob({
      language,
      offset:0,
      size:number,
      text: textSearch,
    })

    refetchProduct({
      language,
      offset:0,
      size:number,
      text: textSearch,
      term: lang === 'vi' ? arrProductCateVi : arrProductCateEn
    })

    refetchNew({
      language,
      offset:0,
      size:number,
      text: textSearch,
      term: lang === 'vi' ? arrNewsCateVi : arrNewsCateEn
    })
    // setDataSearch((prevDataSearch) => [...prevDataSearch,...dataFinal])
  },[textSearch, number])

  const dataLoading = new Array(10).fill(0)
  return (
    <div className='max-md:hidden w-[100vw] h-[100vh] fixed z-[100]'>
      <div className='absolute inset-0 z-[-1]' style={{ background: 'rgba(0, 0, 0, 0.6)' }}></div>
      <div className='w-[60rem] h-[40rem] relative bg-white  overflow-auto top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
        <div className='flex '>
          <input 
            placeholder={lang === 'vi' ? 'Tìm kiếm...' : 'Search...'}
            onChange={handleChangeInput}
            className='border-none outline-none h-[4rem] px-[1rem] w-full' 
          />
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setSearch(false)} className='absolute cursor-pointer top-[3%] right-[3%] w-[1.2rem] h-[1.2rem]'  viewBox="0 0 22 22" fill="none">
              <path d="M1.57785 20.0493C1.6417 20.1132 1.71752 20.1639 1.80098 20.1985C1.88445 20.2331 1.97391 20.2509 2.06426 20.2509C2.1546 20.2509 2.24407 20.2331 2.32753 20.1985C2.41099 20.1639 2.48681 20.1132 2.55066 20.0493L11 11.5999L19.4529 20.0493C19.5819 20.1783 19.7568 20.2508 19.9393 20.2508C20.1217 20.2508 20.2967 20.1783 20.4257 20.0493C20.5547 19.9203 20.6271 19.7453 20.6271 19.5629C20.6271 19.3804 20.5547 19.2055 20.4257 19.0765L11.9728 10.6271L20.4222 2.17429C20.5512 2.04529 20.6237 1.87032 20.6237 1.68788C20.6237 1.50544 20.5512 1.33048 20.4222 1.20148C20.2932 1.07247 20.1183 1 19.9358 1C19.7534 1 19.5784 1.07247 19.4494 1.20148L11 9.65429L2.54722 1.20491C2.4157 1.09228 2.24653 1.03343 2.0735 1.04011C1.90047 1.0468 1.73634 1.11852 1.6139 1.24096C1.49146 1.3634 1.41973 1.52754 1.41305 1.70056C1.40636 1.87359 1.46522 2.04277 1.57785 2.17429L10.0272 10.6271L1.57785 19.0799C1.4498 19.2087 1.37793 19.383 1.37793 19.5646C1.37793 19.7462 1.4498 19.9205 1.57785 20.0493Z" fill="#171717"/>
          </svg>
        </div>
        <hr/>
        {
          loadingJob && loadingNews && loadingProduct ? 
          (<div className='pt-[1rem] px-[1rem]'>
              {dataLoading?.map((item)=>(
                <Loading className={'h-[4rem] mt-[1rem]'} />
              ))}
          </div>) 
          : 
          (
          <div className='pt-[1rem] px-[1rem]'>
            {dataFinal?.map((item,index)=>{
              return(
                <Link onClick={() => setSearch(false)} href={`/${lang}/${
                  lang === 'vi' 
                  ?
                  (
                    item?.__typename === 'Post'
                    ? "tin-tuc-su-kien" : item?.__typename === 'JobOpportunity' ? "tuyen-dung" : "san-pham-dich-vu")
                  :
                  (item?.__typename === 'Post' ? 'news' : item?.__typename === 'JobOpportunity' ? 'recruitment' : 'products')
                }/${item?.__typename === 'Post' ? item?.categories?.nodes[0]?.slug : ''}/${item?.slug}`} key={index} className='flex items-center bg-slate-50 hover:bg-slate-100 mb-[1rem] transition-all'>
                  <Image src={item?.featuredImage?.node?.sourceUrl?item?.featuredImage?.node?.sourceUrl:img} alt={item?.featuredImage?.node?.altText || 'image'}
                  width={300} height={200} className='object-contain w-[4rem] h-[4rem]'  />
                  <h3 className='ml-[1rem] text-[1.1rem]'>{item?.title}</h3>
                </Link>
              )
            })}
          </div>
          )
        }
        
        {
          (!loadingJob && !loadingNews && !loadingProduct) && (
            <p onClick={() => setNumber(number + 5)} className='text-[1.35147rem] cursor-pointer text-[#00A84F] mt-[3rem] mb-[2rem] leading-[116.662%] underline text-center'>{lang === 'vi' ? 'Xem thêm' : 'Seemore'}</p>
          ) 
        }
      </div>
    </div>
  )
}

export default PopupSearch