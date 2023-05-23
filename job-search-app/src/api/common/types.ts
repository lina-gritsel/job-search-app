export interface Vacancy {
  id: number
  profession: string
  payment_from: string
  type_of_work: TypeWork
  town: TypeTown
}

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

export interface FetchVacanciesParams {
  page: number
  paymentFrom: number | ''
  paymentTo: number | ''
  industry: string
  search: string
  count: number
}

export interface Industries {
  key: number
  title: string
  title_rus: string
  title_trimmed: string
  url_rus: string
}

export interface Vacancies{
  data: Vacancy[]
  total: number
}