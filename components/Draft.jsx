'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faSortUp,
  faChevronUp,
  faAnglesUp,
  faArrowsUpDown,
  faPlus,
  faSquareCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { Real } from './Real';

export const Draft = () => {
  const [state, setState] = useState({
    selectedIcon: '',
    Title: '',
    Body: '',
    HeaderBG: '',
    bodyBG: '',
    accordionRounded: '',
    HeaderColor: '',
    BodyColor: '',
    gapY:''
  });

  const { selectedIcon, Title, Body, HeaderBG, bodyBG, HeaderColor, BodyColor, accordionRounded, gapY } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleIconClick = (icon) => {
    setState((prevState) => ({
      ...prevState,
      selectedIcon: icon,
    }));
  };

  return (
    <div className='flex min-h-screen flex-row gap-x-2'>
      <div className='w-1/2 p-4 flex flex-col gap-y-4'>
        <div className='flex flex-row gap-x-2'>
          <label>Title?</label>
          <input
            name='Title'
            placeholder='Write an accordion header'
            className='bg-black outline-none border-none w-full'
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-row gap-x-2'>
          <label>Body?</label>
          <input
            name='Body'
            placeholder='Write some body'
            className='bg-black outline-none border-none w-full'
            onChange={handleInputChange}
          />
        </div>
        <div className='rounded-xl border-2 border-gray-500 flex flex-row gap-2 p-2 hover:[&>*]:bg-gray-600 [&>*]:p-2 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out'>
          {[
            faArrowUp,
            faSortUp,
            faChevronUp,
            faAnglesUp,
            faArrowsUpDown,
            faPlus,
            faSquareCaretUp,
          ].map((icon) => (
            <button key={icon.iconName} onClick={() => handleIconClick(icon)}>
              <FontAwesomeIcon icon={icon} />
            </button>
          ))}
        </div>

        {selectedIcon && <p>Selected Icon: {selectedIcon.iconName || 'No Icon Name'}</p>}

        <div className='flex flex-row gap-x-2'>
          <label>Header BG on Open?</label>
          <input
            name='HeaderBG'
            type='color'
            value={HeaderBG}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-row gap-x-2'>
          <label>Body BG on Open?</label>
          <input
            name='bodyBG'
            type='color'
            value={bodyBG}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-row gap-x-2'>
          <label>Header Color?</label>
          <input
            name='HeaderColor'
            type='color'
            value={HeaderColor}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-row gap-x-2'>
          <label>Body Color?</label>
          <input
            name='BodyColor'
            type='color'
            value={BodyColor}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-row gap-x-2'>
          <label>Accordion Smmary Rounded</label>
          <input
            name='accordionRounded'
            className='bg-black outline-none border-none w-1/2'
            placeholder='000'
            type='text'
            value={accordionRounded}
            onChange={handleInputChange}
          />
        </div>
        <div className='flex flex-row gap-x-2'>
          <label>gapY</label>
          <input
            name='gapY'
            className='bg-black outline-none border-none w-1/2'
            placeholder='2, 4, 8'
            type='text'
            value={gapY}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <Real
        selectedIcon={selectedIcon ? selectedIcon : null}
        Title={Title}
        HeaderBG={HeaderBG}
        bodyBG={bodyBG}
        Body={Body}
        accordionRounded={accordionRounded}
        HeaderColor={HeaderColor}
        BodyColor={BodyColor}
        gapY={gapY}
      />
    </div>
  );
};
