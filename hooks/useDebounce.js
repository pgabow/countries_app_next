import { useState, useEffect } from 'react'

const useDebounce = ( value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export { useDebounce }

// export default function useDebounce(func, delay, cleanUp = false) {
//   const timeoutRef = useRef()

//   // Очистка таймера
//   function clearTimer() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current)
//       timeoutRef.current = undefined
//     }
//   }

//   useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp])

//   return (...args) => {
//     clearTimer()
//     timeoutRef.current = setTimeout(() => func(...args), delay)
//   }
// }

