import React from "react"
import Head from "next/head"
import Link from "next/link"
import { VMainHeader } from "../mainheader"
import styles from './home.module.css'
export default function VHome(){
  return(
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introduction}>
            <VMainHeader/>
          </div>
        </div>
      </div>
    </div>
  )
}