import { useState, useEffect } from 'react'
import axios from 'axios'

const useTranslateCounty = (value) => {
  const [translateValue, setTranslateValue] = useState(value)
// console.log(value)
  useEffect(() => {
    const options = {
      method: 'POST',
      url: process.env.NEXT_PUBLIC_API_DEEP_TRANSLATE_BASE_URL,
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_DEEP_TRANSLATE_KEY,
        'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
      },
      data: `{"q": "${value}","source":"en","target":"ru"}`,
    }

    axios
      .request(options)
      .then(function (response) {
        setTranslateValue(response.data.data.translations.translatedText)
        console.log(response.data.data.translations.translatedText)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [value])

  return translateValue
}

export { useTranslateCounty }
