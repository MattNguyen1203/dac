'use client'
import useStore from '@/(store)/store'
import { usePathname } from 'next/navigation'
import  { useEffect } from 'react'

export default function HandleChangeSlug({listSlug}) {
    const pathName = usePathname()
    const setSlug = useStore((state) => state.setSlug )
    useEffect(()=>{
       setSlug(listSlug)
       return ()=>{
        setSlug({})
       }
    },[pathName])
  return (
    <></>
  )
}
