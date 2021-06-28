import Link from 'next/link';
import { ReactElement } from 'react';
import styles from './header.module.scss';

export default function Header(): ReactElement {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <img src="/images/logo.svg" alt="logo" />
      </a>
    </Link>
  );
}
