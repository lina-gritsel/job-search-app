import { Vacation } from '../../../api'

export interface ParsedVacation {
  id: string
  profession: string
  salary: string
  position: string
  city: string
}

export const parseVacanciesData = (data: Vacation[]): ParsedVacation[] => {
  return data.map((vacancy: Vacation) => {
    return {
      id: vacancy.id?.toString(),
      profession: vacancy.profession,
      salary: vacancy.payment_from,
      position: vacancy.type_of_work.title,
      city: vacancy.town.title,
    }
  })
}
