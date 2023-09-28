'use client'

import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export const Real = ({selectedIcon, Title, HeaderBG, bodyBG, HeaderColor, Body, BodyColor, accordionRounded, gapY}) => {
  const [isActive, setIsActive] = React.useState(false);

  let roundedValue = 'rounded-none';
  if (accordionRounded > '000000') {
    roundedValue = 'rounded-full'
  } else {
    switch (accordionRounded) {
      case '0':
        roundedValue = 'rounded-sm';
        break;
      case '00':
        roundedValue = 'rounded';
        break;
      case '000':
        roundedValue = 'rounded-md';
        break;
      case '0000':
        roundedValue = 'rounded-lg';
        break;
      case '00000':
        roundedValue = 'rounded-xl';
        break;
      case '000000':
        roundedValue = 'rounded-2xl';
        break;
      default:
        roundedValue = 'rounded-none';
    }
  }

  return (
 
        <div className={`h-full p-2 mb-2 w-1/2 flex flex-col gap-y-${gapY?gapY:1}`}>
      <div className={`${roundedValue?roundedValue:''} flex justify-between items-center`}
      style={{
        backgroundColor: isActive && HeaderBG || 'transparent',
        transition: 'background-color 0.3s ease-in-out',
      }}>

        <button
          className='w-full text-left p-2 '
          style={{
            color:HeaderColor ? HeaderColor : 'white'
          }}
      onClick={()=> setIsActive(!isActive)}
    >
      {Title?Title:'title goes here'}
          </button>
          <FontAwesomeIcon icon={selectedIcon?selectedIcon:faArrowUp} className={`p-2 transition-transform duration-200 ease-in-out  ${
          isActive ?
          (
            selectedIcon?.iconName == 'plus' && 'rotate-[-45deg]' || selectedIcon?.iconName == 'arrows-up-down' &&
            'rotate-[-90deg]'
          ) : 'rotate-[-180deg]'
          
          
              }`} />
          

</div>
    <div
      className={`p-2 ${
        isActive ? "block" : "hidden"
          }`}
          style={{
            backgroundColor: isActive && bodyBG || 'transparent',
            transition: 'background-color 0.3s ease-in-out',
            color:BodyColor ? BodyColor : 'white'
          }}
    >
      {Body?Body:'some content goes here'}
      </div>
</div>
      
  )
}
