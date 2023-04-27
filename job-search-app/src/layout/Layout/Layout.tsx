import { FC, ReactNode } from 'react'

import Menu from '../Menu'

import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  )
}

export default Layout
