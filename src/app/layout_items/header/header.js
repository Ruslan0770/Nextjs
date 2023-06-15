import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
  return (
    <div className={styles.header}>
           <Link href="/">
           <Image 
            src="/image/komendant.png"
            alt='komendant'
            unoptimized
            width={206}
            height={48}
            />
           </Link>
    </div>
  )
}
