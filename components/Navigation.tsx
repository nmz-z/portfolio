"use client"

import Link from "next/link"
import styles from './Navigation.module.css'
import Typewriter from "typewriter-effect"

const redirections = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About me',
  route: './about'
}, {
  label: 'Projects',
  route: './projects'
}]// Al agregar mas paginas, actualizar este array

export function Navigation() {
  return(
    <header>
      <nav className={styles.menubar}>
        <a className={styles.menubar_title} href="/">
          <div className={styles.menubar_initials_container}>{"<D.R />"}</div>
          <h3 className={styles.menubar_name}>
          <Typewriter
          options={{
            delay:50
          }}
          onInit={(typewriter) =>{
            typewriter.typeString("Diego Ramirez")
            .start()
          }}/>
          </h3>
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