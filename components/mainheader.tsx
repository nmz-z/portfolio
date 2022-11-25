"use client"
import React from 'react';
import Typewriter from 'typewriter-effect';// https://www.npmjs.com/package/typewriter-effect
import styles from './mainheader.module.css'

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        <Typewriter
          options={
            {
              delay:50,
              cursor: "."
            }
          }
          onInit={ (typewriter) =>{
            typewriter.typeString("Hola, soy Diego")
              .start()
          }}/>
      </h1>
      <h2>
        <Typewriter
        options={
          {
            delay:25
          }}
          onInit={ (typewriter) => {
            typewriter.pauseFor(1500)
              .typeString("Un desarrollador de Javascript")
              .pauseFor(1500)
              .changeDeleteSpeed(20)
              .deleteChars(10)
              .typeString("Typescript")
              .pauseFor(1500)
              .deleteChars(10)
              .typeString("React")
              .pauseFor(1500)
              .deleteChars(8)
              .typeString("Front End =)")
              .start()
          }}
          />
      </h2>
    </div>
  )
}