"use client"
import styles from './projects.module.css'
import { Fade } from 'react-awesome-reveal'
import ProjectsHead from './head'
import {Card} from '../../components/projects/cards'
import {
  GithubLogo,
  GoToWebsiteLogo } from '../../components/icons'
import {
  PortfolioPhoto,
  BadfairyPhoto,
  BingoPhoto } from '../../components/projects/images/index'

export default function ProjectsPage(){
  return(
    <div className={styles.projectsContainer}>
      <ProjectsHead/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade triggerOnce={true}>
            <h1>Mis proyectos</h1>
            <h2>Desarrollados al 100% por mí</h2>
            <div className={styles.root}>
              <ul className={styles.cards}>
              <Card
                title='this.portfolio'
                description='Este es mi proyecto actual, hecho con React, estilizado con CSS Modules y toda la potencia del nuevo NextJS 13. Revisa mi código en GitHub!'
                src={PortfolioPhoto}
                alt='My portfolio screenshot'
                href='./'
                github={
                <a href="https://github.com/nmz-z/portfolio" target="_blank">
                  <GithubLogo className={styles.logo} width={40}/>
                </a>}
                goToWebsite={
                  <a href='./'>
                    <GoToWebsiteLogo className={styles.logo} width={40}/>
                  </a>}
                />

              <Card
                title='Badfairy.cl'
                description='Mi primer eCommerce hecho con WordPress y su plugin WooCommerce, en este proyecto aprendí también sobre phpMyAdmin, cPanel, SMTP, etc'
                src={BadfairyPhoto}
                alt='Badfairy.cl'
                href='https://badfairy.cl/'
                goToWebsite={
                  <a href='https://badfairy.cl/' target="_blank">
                    <GoToWebsiteLogo className={styles.logo} width={40}/>
                  </a>}
                />

              <Card
                title='Bingo game'
                description='Juego hecho con JavaScript vanilla puro, el objetivo era pulir las skills de bucles, manipular el DOM, arrays, etc. dejando un poco de lado los estilos CSS'
                src={BingoPhoto}
                alt={'Bingo Vanilla Javascript'}
                href='https://nmz-z.github.io/bingo-vanilla-javascript/'
                github={
                  <a href="https://github.com/nmz-z/bingo-vanilla-javascript" target="_blank">
                    <GithubLogo className={styles.logo} width={40}/>
                  </a>
                }
                goToWebsite={
                  <a href='https://nmz-z.github.io/bingo-vanilla-javascript/' target="_blank">
                    <GoToWebsiteLogo className={styles.logo} width={40}/>
                  </a>
                }
                />
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}