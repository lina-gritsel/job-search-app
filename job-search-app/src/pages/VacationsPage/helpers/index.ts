import { Vacancy } from '../../../api'

export interface ParsedVacation {
  id: string
  profession: string
  salary: string
  position: string
  city: string
}

export const parseVacanciesData = (data: Vacancy[] = []): ParsedVacation[] => {
  return data.map((vacancy: Vacancy) => {
    return {
      id: vacancy.id?.toString(),
      profession: vacancy.profession,
      salary: vacancy.payment_from,
      position: vacancy.type_of_work.title,
      city: vacancy.town.title,
    }
  })
}

export const parseVacancy = (vacancy: Vacancy) => {
  return {
    id: vacancy?.id?.toString(),
    profession: vacancy?.profession,
    salary: vacancy?.payment_from,
    position: vacancy?.type_of_work?.title,
    city: vacancy?.town?.title,
  }
}
