'use client'
import useDebounce from '@/hooks/useDebounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
function InputAndPagination({ dataFirstIn }) {
    const searchParams = useSearchParams()
    const textParam = searchParams.get('text') || ''
    const [text, setText] = useState(textParam)
    const router = useRouter()
    const pathName = usePathname()
    const page = searchParams.get('page') || 1
    const textSearch = useDebounce(text, 300)
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
        } else {
            paramNew.set('text', text)
            paramNew.set('page', '1')
            router.replace(pathName + '?' + paramNew.toString(), {
                scroll: false,
            })
        }
    }, [textSearch])

    const pageInfo = dataFirstIn?.pageInfo?.offsetPagination?.total
    const totalPage = Math.ceil(pageInfo / 4)
    const handleChangePage = (index) => {
        const paramNew = new URLSearchParams(searchParams)
        paramNew.set('page', index + 1)
        router.replace(pathName + '?' + paramNew.toString(), {
            scroll: false,
        })
    }

    return (
        <div className='md:pb-[8.56rem]'>
            <div className='searchTextBlog flex justify-center md:mt-[5.8rem] md:mb-[1rem] max-md:my-[7rem]'>
                <input placeholder='Tìm Kiếm' onChange={handleChangeInput} className=' md:w-[10.625rem] md:pb-[0.25rem] w-[42.46rem] h-[8.8rem] rounded-[11.46667rem] md:h-[2.1875rem] md:px-[0.5rem] md:rounded-[2.23958rem] bg-[#F0F0F0]' />
            </div>
            {/* pagination */}
            <div className='flex justify-center items-center max-md:hidden relative md:mt-[1rem]'>
                {Array.from({ length: totalPage }, (_, index) => (
                    <div
                        key={index}
                        onClick={() => handleChangePage(index)}
                        className={`${totalPage > 1 ? 'cursor-pointer md:w-[1.125rem] md:h-[2.125rem]' : 'hidden'}`}
                    >
                        <span className={`${page - 1 === index ? 'text-[#00A84F]' : 'text-[#444]'}`}>{index + 1}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InputAndPagination
