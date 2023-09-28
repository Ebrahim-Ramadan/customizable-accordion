'use client'
import React from 'react'
import {GhIcon} from "../public/github";
import {Chip} from "@nextui-org/react";
 const Header = () => {
  
  return (
    <div className='flex justify-end p-1'>
            <a  href='https://github.com/ebrahim-Ramadan' target='_blank' className='p-1'>
        <Chip color="default" variant="bordered" startContent={<GhIcon />} style={{color:'#EEE'}}
        >Github</Chip>
      </a>
</div>
  )
}
export default Header