import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <div className='bg-orange rounded-full w-[30px] h-[30px] text-white text-center flex items-center justify-center'>K</div>
      <span className={styles.navigationItem}>Kinka finance</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Calculator
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog" activeClassName="active">
          Service
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
