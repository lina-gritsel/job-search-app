import { FC } from 'react'
import { MENU_ITEMS } from './constants'
import { NavLink } from 'react-router-dom'

const Menu: FC = () => {
  return (
    <div>
      {MENU_ITEMS.map(({ to, label }, index) => (
        <NavLink key={index} to={to}>
          {label}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu
