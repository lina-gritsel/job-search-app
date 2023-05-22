import { FC } from 'react'

import styles from './Header.module.scss'
import Logo from '../../assets/icons/Logo'
import Menu from '../Menu'

const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Logo className={styles.logo} />
          <div className={styles.title}>jobored</div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default Header
