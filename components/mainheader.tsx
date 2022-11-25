"use client"
import React from 'react';
import Typewriter from 'typewriter-effect';// https://www.npmjs.com/package/typewriter-effect
import styles from './mainheader.module.css'

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        <Typewriter
          options={{
            delay:50
          }}
          onInit={(typewriter) =>{
            typewriter.typeString("Comming soon...")
            .start()
          }}/>
        <br/>
      </h1>
    </div>
  )
}