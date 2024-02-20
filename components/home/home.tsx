"use client"
import React from "react"
import { ToolsAndTech } from "./toolsandtech"
import mypic from './mypic.jpg'
import DoubleArrowIcon from "./DoubleArrowIcon"
import Image from "next/image"
import { VMainHeader } from "../mainheader"
import styles from './home.module.css'
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

export default function VHome(){
  return(
    <div className={styles.homeContainer}>
      <div className={styles.introduction}>
        <VMainHeader/>
        <div className={styles.technologies}>
          <div className={styles.profilePicture}>
          <Image className={styles.pic}
              src={mypic}
              alt="Picture of me"
              width={300}
              priority
              quality={85}
            />
            </div>
          <ToolsAndTech/>
        </div>
      </div>
      <div className={styles.swipeDownIcon}>
        <DoubleArrowIcon width={26} height={26} fill="#FFFFFF"/>
      </div>
      <Fade triggerOnce={true}>
        <div className={styles.personalProjects}>
          <div className={styles.linkBox}>
            <h1 className={styles.linkBoxTitle}>Mis proyectos</h1>
            <h2 className={styles.linkBoxTextContent}>Aquí podrán revisar todos mis trabajos, las tecnologías usadas en cada uno de ellos y un enlace al código en GitHub.</h2>
            <Link href={`./projects/`}>
              <div className={styles.linkBoxButton}>
                Ir a los proyectos
              </div>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  )
}