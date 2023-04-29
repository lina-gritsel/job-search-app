import { useEffect, useState } from 'react'

import { fetchIndustries, fetchAllVacancies } from '../../../api/requests'
import { Vacation } from '../../../api/types'

export const useVacationsPage = () => {
  const [industries, setIndustries] = useState<string[]>([])
  const [vacancies, setVacancies] = useState<Vacation[]>([])

  useEffect(() => {
    const fetchDataForVacationsPage = async () => {
      const allIndustries = await fetchIndustries()
      const allVacancies = await fetchAllVacancies()

      setIndustries(allIndustries)
      setVacancies(allVacancies)
    }
    fetchDataForVacationsPage()
  }, [])

  return { industries, vacancies }
}
