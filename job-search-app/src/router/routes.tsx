import { PATHS } from './paths'
import FavoritesPage from '../pages/FavoritesPage'
import VacationsPage from '../pages/VacationsPage'

export const routes = [
  { path: PATHS.VACATIONS, component: VacationsPage },
  { path: PATHS.FAVORITES, component: FavoritesPage },
]
