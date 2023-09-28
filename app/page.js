'use client'
import Image from 'next/image'
import {Draft} from '@/components/Draft'
import Header from '@/components/Header'
import {NextUIProvider} from "@nextui-org/react";
export default function Home() {
  return (
    
      <NextUIProvider>
      <Header />
      <Draft/>
       </NextUIProvider>
   



  )
}
