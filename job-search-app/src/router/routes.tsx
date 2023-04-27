import { PATHS } from './paths'
import FavoritesPage from '../pages/FavoritesPage'
import VacationsPage from '../pages/VacationsPage'
import Page404 from '../pages/404Page'

export const routes = [
  { path: PATHS.VACATIONS, component: VacationsPage },
  { path: PATHS.FAVORITES, component: FavoritesPage },
  { path: PATHS.PAGE_404, component: Page404 },
]
