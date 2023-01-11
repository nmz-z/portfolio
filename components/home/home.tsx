"use client"
import React from "react"
import { ToolsAndTech } from "./toolsandtech"
import mypic from './Diego.jpg'
import DoubleArrowIcon from "./DoubleArrowIcon"
import Image from "next/image"
import { VMainHeader } from "../mainheader"
import styles from './home.module.css'
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

export default function VHome(){
  return(
    <div className={styles.homeContainer}>
      <div className={styles.content}>
          <div className={styles.introduction}>
            <VMainHeader/>
            <div className={styles.technologies}>
              <div className={styles.profilePictureContainer}>
              <Image className={styles.profilePicture}
                  src={mypic}
                  alt="Picture of me"
                  width={200}
                  height={200}
                  priority
                />
                </div>
              <ToolsAndTech/>
            </div>
          </div>
          <div className={styles.swipeDownIcon}>
            <DoubleArrowIcon width={26} height={26} fill="#FFFFFF"/>
          </div>
        <div className={styles.personalProjects}>
          <div className={styles.linkBox}>
            <Fade triggerOnce={true}>
              <h1 className={styles.linkBoxTitle}>Mis proyectos</h1>
              <h2 className={styles.linkBoxTextContent}>Aquí podrán revisar todos mis trabajos, las tecnologías usadas en cada uno de ellos y un enlace al código en GitHub.</h2>
              <Link href={`./projects/`}>
                <div className={styles.linkBoxButton}>
                  Ir a los proyectos
                </div>
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}