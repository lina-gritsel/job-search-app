import { FC, ReactNode } from 'react'
import Menu from '../Menu'

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
