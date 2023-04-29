import { Vacation } from '../../../api'

export const parseVacanciesData = (data: Vacation[]) => {
  return data.map((vacancy: Vacation) => {
    return {
      profession: vacancy.profession,
      salary: vacancy.payment_from,
      position: vacancy.type_of_work.title,
      city: vacancy.town.title,
    }
  })
}
