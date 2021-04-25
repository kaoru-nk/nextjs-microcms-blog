import Link from 'next/link'
import React from 'react'

import { pagesPath } from '~/lib/$path'
import { Category } from '~/src/types/microCMS/api/Category'

import styles from './Breadcrumb.module.css'

type ContainerProps = {
  category?: Category
}

type Props = ContainerProps

const Component: React.FC<Props> = ({ category }) => (
  <ul className={styles.breadcrumb}>
    <li className={styles.breadcrumbList}>
      <Link href={pagesPath.$url()}>
        <a>記事一覧</a>
      </Link>
    </li>
    {category && (
      <li className={styles.breadcrumbList}>
        <Link href={`/category/${category.id}/page/1`}>{category.name}</Link>
      </li>
    )}
  </ul>
)

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
