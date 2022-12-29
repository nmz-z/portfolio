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

function showText(i:number) {
  clearTimeout(timer)
  const svgList = document.querySelectorAll('svg')
  let tech = svgList[i].firstChild?.textContent!
  document.getElementById('toolsandtech-title')!.innerHTML = tech
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
          <HtmlLogo className={styles.htmlLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(0)} onMouseLeave={hideText} />
          <CssLogo className={styles.cssLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(1)} onMouseLeave={hideText} />
          <BootstrapLogo className={styles.bootstrapLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(2)} onMouseLeave={hideText} />
          <JavaScriptLogo className={styles.javascriptLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(3)} onMouseLeave={hideText} />
          <TypeScriptLogo className={styles.typescriptLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(4)} onMouseLeave={hideText} />
          <ReactJsLogo className={styles.reactLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(5)} onMouseLeave={hideText} />
        </div>
        <div id='toolsandtech-row-2' className={styles.technologiesIconsRow}>
          <NextJsLogo className={styles.nextJsLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(6)} onMouseLeave={hideText}/>
          <GitLogo className={styles.gitLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(7)} onMouseLeave={hideText}/>
          <NodeJsLogo className={styles.nodeJsLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(8)} onMouseLeave={hideText}/>
          <NpmLogo className={styles.npmLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(9)} onMouseLeave={hideText}/>
          <WordPressLogo className={styles.wordpressLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(10)} onMouseLeave={hideText}/>
          <AdobephotoshopLogo className={styles.adobephotoshopLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(11)} onMouseLeave={hideText}/>
        </div>
      </Fade>
    </div>
  )
}