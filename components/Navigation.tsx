"use client"

import Link from "next/link"
import styles from './Navigation.module.css'
import Typewriter from "typewriter-effect"

const redirections = [{
  label: 'Home',
  route: '/'
},{
  label: 'Projects',
  route: './projects'
}]// Al agregar mas paginas, actualizar este array

export function Navigation() {
  return(
    <header>
      <nav className={styles.menubar}>
        <a className={styles.menubar_title} href="/">
          <div className={styles.menubar_initials_container}>
          <Typewriter
          options={{
            delay:120,
            cursor: ""
          }}
          onInit={(typewriter) =>{
            typewriter.typeString("<")
            typewriter.typeString("D.R ")
            typewriter.typeString("/>")
              .start()
          }}/>
          </div>
          <h2 className={styles.menubar_name}>
          <Typewriter
          options={{
            delay:50
          }}
          onInit={(typewriter) =>{
            typewriter.typeString("Diego Ramirez")
              .start()
          }}/>
          </h2>
        </a>
        <ul className={styles.linksList}>
          {redirections.map(({ label, route }) => (
            <li key={route}>
              <Link className={styles.labelsParent} href={route}>
                <span>{label}</span>
                <span>{"<"}{label}{" />"}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}