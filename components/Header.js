import React from 'react'
import Link from "next/link"
import styles from "../styles/Header.module.css"
import Search from './Search'
export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
        <Link href="/">
            <a>Blood Quests</a>
        </Link>
        </div>
        <Search/>
    <nav>
        <ul>
            <li>
                <Link href="/events">
                <a>Active Requirements</a>
                </Link>

            </li>
        </ul>
    </nav>
    </header>
  )
}
