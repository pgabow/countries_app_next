export const API_URL_ALL = `${process.env.NEXT_PUBLIC_API_COUNTRIES_BASE_URL}/all?fields=flags,name,population,region,capital`

export const API_URL_FULLNAME = (name) =>
  `${process.env.NEXT_PUBLIC_API_COUNTRIES_BASE_URL}/name/${name}?fullText=true`

export const API_URL_BORDERS = (borders) =>
  `${process.env.NEXT_PUBLIC_API_COUNTRIES_BASE_URL}/alpha?codes=${borders}`
  // `https://restcountries.com/v3.1/alpha?codes=${borders}`
	
