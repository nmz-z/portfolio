"use client"
import React from 'react'
import styles from './cards.module.css'
import Image from 'next/image'

type DataCard = {
  title: string;
  description: string;
  src: any;
  href: string;
  alt?: string;
  github?: React.ReactElement;
  goToWebsite?: React.ReactElement;
}

export function Card({title, description, src, alt, href, github, goToWebsite}: DataCard) {
  return(
    <>
      <li>
        <div className={styles.card}>
          <a href={href}>
          <Image className={styles.card__image} src={src} alt={alt!} />
          </a>
          <div className={styles.card__overlay}>
            <div className={styles.card__header}>
              <h3 className={styles.card__title}>{title}</h3>
              {github}
              {goToWebsite}
            </div>
            <p className={styles.card__description}>{description}</p>
          </div>
        </div>
      </li>
    </>
)}