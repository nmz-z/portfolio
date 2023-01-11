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
  WordPressLogo,
  MySqlLogo
} from '../icons/index'
import styles from './toolsandtech.module.css'

function showText(i:number) {
  clearTimeout(timer)
  const svgList = document.querySelectorAll('svg')
  let tech = svgList[i].firstChild?.textContent!

  const toolsandtechTitle = document.getElementById('toolsandtech-title')

  toolsandtechTitle!.innerHTML = tech

  svgList[i]?.addEventListener('mouseover', () => {
    toolsandtechTitle!.style.color = document.getElementsByClassName('logo-title')[i].attributes[1].value // Access to color attribute
  }, false)
  svgList[i]?.addEventListener('mouseout', () => {
    toolsandtechTitle!.className = styles.toolsAndTechTitle;
  }, false)
}

var timer:any

function hideText() {
  timer = setTimeout(() => {
    document.getElementById('toolsandtech-title')!.innerHTML = "Tecnologías que uso"
  }, 500);
}

export function ToolsAndTech() {
  return (
    <div id='toolsandtech-global-list' className={styles.technologiesIcons}>
      <Fade delay={200} duration={1500} triggerOnce={true}>
        <h2 id='toolsandtech-title' className={styles.toolsAndTechTitle}>Tecnologías que uso</h2>
        <div id='toolsandtech-row-1' className={styles.technologiesIconsRow}>
          <HtmlLogo className={styles.htmlLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(0)} onMouseLeave={hideText} />
          <CssLogo className={styles.cssLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(1)} onMouseLeave={hideText} />
          <BootstrapLogo className={styles.bootstrapLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(2)} onMouseLeave={hideText} />
          <JavaScriptLogo className={styles.javascriptLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(3)} onMouseLeave={hideText} />
          <TypeScriptLogo className={styles.typescriptLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(4)} onMouseLeave={hideText} />
          <ReactJsLogo className={styles.reactLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(5)} onMouseLeave={hideText} />
          <MySqlLogo className={styles.mySqlLogo} fill="#FFFFFF" width={50} onMouseEnter={() => showText(6)} onMouseLeave={hideText} />
        </div>
        <div id='toolsandtech-row-2' className={styles.technologiesIconsRow}>
          <NextJsLogo className={styles.nextJsLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(7)} onMouseLeave={hideText}/>
          <GitLogo className={styles.gitLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(8)} onMouseLeave={hideText}/>
          <NodeJsLogo className={styles.nodeJsLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(9)} onMouseLeave={hideText}/>
          <NpmLogo className={styles.npmLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(10)} onMouseLeave={hideText}/>
          <WordPressLogo className={styles.wordpressLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(11)} onMouseLeave={hideText}/>
          <AdobephotoshopLogo className={styles.adobephotoshopLogo} fill='#FFFFFF' width={50} onMouseEnter={() => showText(12)} onMouseLeave={hideText}/>
        </div>
      </Fade>
    </div>
  )
}