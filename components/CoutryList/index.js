import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllCountries } from '@/store/countriesSlice'
import { useDebounce } from '@/hooks/useDebounce'

import CountryFilter from '../CoutryFilter'
import CountryCard from '../CoutryCard'
import Loader from '../Loader'
import { CircularProgress } from '@mui/material'

const CountryList = () => {
  const countries = useSelector(getAllCountries)
  const [filteredCountry, setfilteredCountry] = useState(countries)
  const [searchInput, setSearchInput] = useState('')
  const [selectRegion, setSelectRegion] = useState('')

  const debouncedQuery = useDebounce(searchInput, 500)

  const onSearchCountry = (value) => {
    setSearchInput(value.toLowerCase())
  }

  const onSelectRegion = (value) => {
    setSelectRegion(value)
  }

  useEffect(() => {
    const filteringCountry = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(debouncedQuery) &&
        country.region.toLowerCase().includes(selectRegion)
    )
    setfilteredCountry(filteringCountry)
  }, [debouncedQuery, countries, selectRegion])

  return (
    <>
      <CountryFilter
        propsOnSearchCountry={onSearchCountry}
        propsOnSelectRegion={onSelectRegion}
        propsOnSearchValue={searchInput}
      ></CountryFilter>
      <div className='country-list__grid'>
        {filteredCountry.map((country, index) => {
          return (
            <CountryCard
              key={index}
              name={country.name.common}
              population={country.population.toLocaleString()}
              region={country.region}
              capital={country.capital}
              flag={country.flags.svg}
              alt={country.flags.alt}
            ></CountryCard>
          )
        })}
      </div>
      <div className='loader_list'>
        {!filteredCountry.length > 0 && <CircularProgress color='info' />}
        {!filteredCountry.length > 0 && <p>Ищемс...</p>}
      </div>
    </>
  )
}

export default CountryList
