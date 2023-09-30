'use client'
import React from 'react'
import {GhIcon} from "../public/github";
import {Chip} from "@nextui-org/react";
 const Header = () => {
  
  return (
    <div className='flex justify-end p-1 '>
            <a  href='https://github.com/Ebrahim-Ramadan/customizable-accordion' target='_blank' className='p-1 '>
        <Chip color="default" variant="bordered" startContent={<GhIcon />} style={{ color: '#EEE' }}
          className='hover:bg-sky-800 transition-all ease-in-out duration-300'
        >Source Code</Chip>
      </a>
</div>
  )
}
export default Header