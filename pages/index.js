import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCountries } from '@/store/countriesSlice'
import { API_URL_ALL } from '@/store/constants'
import axios from 'axios'

import CountryList from '@/components/CoutryList'

export default function Home() {
  const dispatch = useDispatch()
	// console.log('API_URL_ALL ' + API_URL_ALL) 
	// console.log('API_URL_ALL ' + process.env.NEXT_PUBLIC_API_COUNTRIES_BASE_URL)
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(API_URL_ALL).catch((error) => {
        console.log('Error: ' + error)
      })

      dispatch(setCountries(response.data))
    }
    fetchCountries()
  }, [dispatch])

  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>
      <div className='rest-countries__home'>
        <div className='container-fluid'>
          <CountryList />
        </div>
      </div>
    </>
  )
}
