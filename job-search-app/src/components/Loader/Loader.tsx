import { FC } from 'react'
import classNames from 'classnames'

import styles from './Loader.module.scss'

const Loader: FC<{ className?: string }> = ({ className }) => {
  return <span className={classNames(styles.loader, className)}></span>
}

export default Loader
