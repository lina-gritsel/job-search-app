import { FC } from 'react'

import { fetchFavorites } from './hooks'
import VacancyCard from '../VacationsPage/components/VacancyCard'
import { parseVacanciesData } from '../VacationsPage/helpers'

const FavoritesPage: FC = () => {
  // const { favorites } = fetchFavorites()
  // const parseFavorites = parseVacanciesData(favorites)

  // console.log(parseFavorites)
  return (
    <div>
      {
        // parseFavorites.map((vacancy)=>{
        //   <VacancyCard />
        // })
      }
    </div>
  )
}

export default FavoritesPage
