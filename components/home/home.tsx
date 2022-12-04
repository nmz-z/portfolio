import React from "react"
import { ToolsAndTech } from "./toolsandtech"
import mypic from './Diego.jpg'
import DoubleArrowIcon from "./DoubleArrowIcon"
import Image from "next/image"
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
            <div className={styles.technologies}>
              <div className={styles.profilePicture}>
              <Image
                  src={mypic}
                  alt="Picture of me"
                  width={200}
                  height={200}
                />
                </div>
              <ToolsAndTech/>
            </div>
          </div>
          <div className={styles.swipeDownIcon}>
            <DoubleArrowIcon width={26} height={26} fill="#FFFFFF"/>
          </div>
        </div>
      </div>
    </div>
  )
}