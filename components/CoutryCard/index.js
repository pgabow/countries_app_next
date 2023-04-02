import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import preparePeopleCount from '@/utils/preparePeopleCount'

const CountryCard = ({ name, population, region, capital, flag, alt }) => {
  return (
    <div className='country-card'>
      <Link href={`/countries/${encodeURIComponent(name)}`}>
          {/* <Image src={flag} alt={alt} title={name} width={100%} height={150} /> */}
        <div className='card-image'>
          <img src={flag} alt={alt} title={name} />
        </div>
        <div className='card-content'>
          <h1>{name}</h1>
          <h2>
            Население: <span>{preparePeopleCount(population)}</span>
          </h2>
          <h3>
            Регион: <span>{region}</span>
          </h3>
          <h4>
            Столица: <span>{capital}</span>
          </h4>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard
