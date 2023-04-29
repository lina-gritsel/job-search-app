export interface Vacation {
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
