import { useEffect, useState } from 'react'
import { getIndustrys, getVacancies } from '../../../api/requests'

interface TypeWork {
  id: number
  title: string
}

interface TypeTown {
  id: number
  title: string
  declension: string
  hasMetro: boolean
  genitive: string
}
interface Vacation {
  profession: string
  payment_from: string
  type_of_work: TypeWork
  town: TypeTown
}

export const useVacationsPage = () => {
  const [industrys, setIndustrys] = useState<string[]>([])
  const [vacancies, setVacancies] = useState<Vacation[]>([])

  useEffect(() => {
    const fectIndustrys = async () => {
      const allIndustrys = await getIndustrys()
      const allVacancies = await getVacancies()

      setIndustrys(allIndustrys)
      setVacancies(allVacancies)
    }
    fectIndustrys()
  }, [])

  return { industrys, vacancies }
}
