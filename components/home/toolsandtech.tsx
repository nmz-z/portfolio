"use client"
import React from 'react'
import { Fade }  from "react-awesome-reveal"
import {
  BootstrapLogo,
  AdobephotoshopLogo,
  CssLogo,
  GitLogo,
  HtmlLogo,
  JavaScriptLogo,
  NextJsLogo,
  NodeJsLogo,
  NpmLogo,
  ReactJsLogo,
  TypeScriptLogo,
  WordPressLogo
} from './icons/index'
import styles from './toolsandtech.module.css'

export function ToolsAndTech() {
  return (
    <div className={styles.technologiesIcons}>
      <Fade delay={500} duration={5000}>
        <h2>Tecnologías que manejo</h2>
        <div className={styles.technologiesIconsRow}>
          <HtmlLogo className={styles.htmlLogo} fill='#FFFFFF' width={50}/>
          <CssLogo className={styles.cssLogo} fill='#FFFFFF' width={50}/>
          <BootstrapLogo className={styles.bootstrapLogo} fill='#FFFFFF' width={50}/>
          <JavaScriptLogo className={styles.javascriptLogo} fill='#FFFFFF' width={50}/>
          <TypeScriptLogo className={styles.typescriptLogo} fill='#FFFFFF' width={50}/>
          <ReactJsLogo className={styles.reactLogo} fill='#FFFFFF' width={50}/>
        </div>
        <div className={styles.technologiesIconsRow}>
          <NextJsLogo className={styles.nextJsLogo} fill='#FFFFFF' width={50}/>
          <GitLogo className={styles.gitLogo} fill='#FFFFFF' width={50}/>
          <NodeJsLogo className={styles.nodeJsLogo} fill='#FFFFFF' width={50}/>
          <NpmLogo className={styles.npmLogo} fill='#FFFFFF' width={50}/>
          <WordPressLogo className={styles.wordpressLogo} fill='#FFFFFF' width={50}/>
          <AdobephotoshopLogo className={styles.adobephotoshopLogo} fill='#FFFFFF' width={50}/>
        </div>
      </Fade>
    </div>
  )
}