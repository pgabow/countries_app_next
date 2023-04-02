import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { selectCountry, getSelectedCountry, removeSelectedCountry } from '@/store/countriesSlice'
import { API_URL_FULLNAME, API_URL_BORDERS } from '@/store/constants'
import Link from 'next/link'
import axios from 'axios'
import prepareName from '@/utils/prepareName'
import preparePeopleCount from '@/utils/preparePeopleCount'
import { useTranslateCounty } from '@/hooks/useTranslateCounty'
import { CircularProgress } from '@mui/material'

const CountryDetails = () => {
  const router = useRouter()
  const name = router.query.name
  const translateName = useTranslateCounty(name)
  const dispatch = useDispatch()
  const country = useSelector(getSelectedCountry)
  const [borders, setBorders] = useState([])

  const fetchCountryBorders = async () => {
    await axios
      .get(API_URL_BORDERS(localStorage.getItem('countryCode')))
      .then((response) => {
        return response.data
      })
      .then((data) => {
        setBorders(data.map((item) => item.name.common))
      })
      .catch((error) => {
        return 'NO BORDERS' + error.message
      })
  }

  useEffect(() => {
    if (!router.isReady) return

    const fetchCountryDetails = async () => {
      const response = await axios.get(API_URL_FULLNAME(name)).catch((error) => {
        console.log(error)
      })

      const countryDetails = response.data.map((item) => {
        let object = {}

        object.name = item.name.common
        object.nativeName = item.name.nativeName
        object.borders = item.borders
        object.population = item.population
        object.tld = item.tld
        object.currencies = item.currencies
        object.region = item.region
        object.languages = item.languages
        object.subregion = item.subregion
        object.capital = item.capital
        object.continents = item.continents
        object.flags = item.flags
        // console.log(object.nativeName)
        return object
      })

      dispatch(selectCountry(countryDetails))

      const findBorder = response.data.find((item) => item.borders)

      if (findBorder !== undefined) {
        localStorage.setItem(
          'countryCode',
          response.data.map((item) => item.borders)
        )
      }
    }

    fetchCountryDetails()

    setTimeout(() => {
      if (localStorage.getItem('countryCode') !== null) {
        fetchCountryBorders()
      }
    }, 500)

    return () => {
      dispatch(removeSelectedCountry([]))
      localStorage.removeItem('countryCode')
    }
  }, [dispatch, router.isReady, name])

  return (
    <>
      <Head>
        <title>{translateName}</title>
      </Head>
      <section className='rest-countries__details'>
        <div className='container-fluid'>
          <Link className='details-back' href='/'>
            <svg
              width='24'
              height='24'
              xmlns='http://www.w3.org/2000/svg'
              fillRule='evenodd'
              clipRule='evenodd'
            >
              <path d='M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z' />
            </svg>
            Назад
          </Link>
          {country.map((item, index) => {
            return (
              <div className='details-grid' key={index}>
                <div className='details-image'>
                  <img src={item.flags.svg} alt={item.flags.alt} />
                </div>
                <div className='details-info'>
                  <h1>{translateName}</h1>
                  <div className='info-wrapper'>
                    <h2 className='context'>
                      Название:
                      {prepareName(item.name, item.nativeName).map((keys, index) => {
                        return (
                          <span key={index}>
                            {keys}
                            {prepareName(item.name, item.nativeName).length - 1 !== index
                              ? ','
                              : ''}
                          </span>
                        )
                      })}
                    </h2>
                    <h3 className='context'>
                      Континент: <span>{item.continents}</span>
                    </h3>
                    <h4 className='context'>
                      Население: <span>{preparePeopleCount(item.population.toLocaleString())}</span>
                    </h4>
                    <h5 className='context'>
                      Валюта:
                      <span>
                        {Object.values(item.currencies)[0].name} (&nbsp;
                        {Object.values(item.currencies)[0].symbol}&nbsp;)
                      </span>
                    </h5>
                    <h6 className='context'>
                      Регион:<span>{item.region}</span>
                    </h6>
                    <div className='context'>
                      Домен:
                      <span>{item.tld[0]}</span>
                    </div>
                    <div className='context'>
                      Языки:
                      {Object.keys(item.languages).map((keys, index) => {
                        return (
                          <span key={index}>
                            {' '}
                            {item.languages[keys]}
                            {Object.keys(item.languages).length - 1 !== index ? ',' : ''}
                          </span>
                        )
                      })}
                    </div>
                    <div className='context'>
                      Область региона:<span>{item.subregion}</span>
                    </div>
                    <div className='context'>
                      Столица:<span>{item.capital}</span>
                    </div>
                  </div>
                  {item.borders === undefined ? null : (
                    <div className='border-wrapper'>
                      Соседние страны:
                      <div className='border-list'>
                        {borders.map((items, index) => {
                          return (
                            <Link
                              key={index}
                              className='border-item'
                              href={`/countries/${encodeURIComponent(items)}`}
                            >
                              <span>{items}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <div className='loader_list'>
            {!country.length > 0 && <CircularProgress color='info' />}
            {!country.length > 0 > 0 && <p>Ищемс...</p>}
          </div>
        </div>
      </section>
    </>
  )
}

export default CountryDetails
