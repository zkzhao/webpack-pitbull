import { useState } from 'react'

type returned = [string, (e: React.ChangeEvent<HTMLInputElement>) => void]

export const useSearch = (value = '', callback: (keywords: string) => void): returned => {
  const [keywords, setKeywords] = useState(value)
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setKeywords(value)
    callback(value)
  }
  return [keywords, handleChange]
}
