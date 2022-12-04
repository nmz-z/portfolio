"use client"
import React from 'react'
import { useState, useEffect } from 'react'
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

function showText(row:number, i:number) {
  clearTimeout(timer)
  const list = document.getElementById('toolsandtech-global-list')
  document.getElementById('toolsandtech-title')!.innerHTML = list?.children[row].firstChild?.childNodes[i].firstChild?.innerHTML
}

var timer:any

function hideText() {
  timer = setTimeout(() => {
    document.getElementById('toolsandtech-title')!.innerHTML = "Tecnologias que manejo"
  }, 500);
}

export function ToolsAndTech() {
  return (
    <div id='toolsandtech-global-list' className={styles.technologiesIcons}>
      <Fade delay={500} duration={5000}>
        <h2 id='toolsandtech-title'>Tecnologías que manejo</h2>
        <div id='toolsandtech-row-1' className={styles.technologiesIconsRow}>
          <HtmlLogo className={styles.htmlLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(1,0)} onMouseLeave={hideText} />
          <CssLogo className={styles.cssLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(1,1)} onMouseLeave={hideText} />
          <BootstrapLogo className={styles.bootstrapLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(1,2)} onMouseLeave={hideText} />
          <JavaScriptLogo className={styles.javascriptLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(1,3)} onMouseLeave={hideText} />
          <TypeScriptLogo className={styles.typescriptLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(1,4)} onMouseLeave={hideText} />
          <ReactJsLogo className={styles.reactLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(1,5)} onMouseLeave={hideText} />
        </div>
        <div id='toolsandtech-row-2' className={styles.technologiesIconsRow}>
          <NextJsLogo className={styles.nextJsLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(2,0)} onMouseLeave={hideText}/>
          <GitLogo className={styles.gitLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(2,1)} onMouseLeave={hideText}/>
          <NodeJsLogo className={styles.nodeJsLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(2,2)} onMouseLeave={hideText}/>
          <NpmLogo className={styles.npmLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(2,3)} onMouseLeave={hideText}/>
          <WordPressLogo className={styles.wordpressLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(2,4)} onMouseLeave={hideText}/>
          <AdobephotoshopLogo className={styles.adobephotoshopLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(2,5)} onMouseLeave={hideText}/>
        </div>
      </Fade>
    </div>
  )
}