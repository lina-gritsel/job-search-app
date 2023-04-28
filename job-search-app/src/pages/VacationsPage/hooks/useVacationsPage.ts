import { useEffect, useState } from 'react'
import { getIndustrys } from '../../../api/requests'

export const useVacationsPage = () => {
  const [industrys, setIndustrys] = useState<string[]>([])

  useEffect(() => {
    const fectIndustrys = async () => {
      const data = await getIndustrys()
      setIndustrys(data)
    }
    fectIndustrys()
  }, [])

  return { industrys }
}
