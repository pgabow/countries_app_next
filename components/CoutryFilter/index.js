import React from 'react'
import { MdSearch, MdOutlineSearch, MdClear } from 'react-icons/md'
import { IconContext } from 'react-icons'

const CountryFilter = ({ propsOnSearchCountry, propsOnSelectRegion, propsOnSearchValue }) => {
  const onSearchCountry = (event) => {
    let value = event.target.value
    propsOnSearchCountry(value)
  }

  const onClearSearchCountry = () => {
    propsOnSearchCountry('')
  }

  const onSelectRegion = (event) => {
    let value = event.target.value
    propsOnSelectRegion(value)
  }

  return (
    <div className='country-list__filter'>
      <div className='filter-search'>
        <svg
          className='svg-icon search-icon'
          aria-label='search-icon'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 19.9 19.7'
        >
          <g className='search-path' fill='none' stroke='#848F91'>
            <path strokeLinecap='square' d='M18.5 18.3l-5.4-5.4' />
            <circle cx='8' cy='8' r='7' />
          </g>
        </svg>
        {/* <IconContext.Provider value={{}}> */}
        {/* <MdOutlineSearch /> */}
        {/* </IconContext.Provider> */}
        <input
          type='text'
          onChange={onSearchCountry}
          placeholder='Поиск по странам...'
          value={propsOnSearchValue}
        />
        <MdClear color='#848F91' cursor='pointer' onClick={onClearSearchCountry} />
      </div>
      <div className='filter-region'>
        <select aria-label='select-region' defaultValue={''} onChange={onSelectRegion}>
          <option value='' disabled>
            Фильтр по регионам
          </option>
          <option value='africa'>Африка</option>
          <option value='america'>Америка</option>
          <option value='asia'>Азия</option>
          <option value='europe'>Европа</option>
          <option value='oceania'>Океания</option>
        </select>
      </div>
    </div>
  )
}

export default CountryFilter
