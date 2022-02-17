import * as React from 'react'
import Layout from '../components/layout'
import Bio from "../components/bio"


const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Bio />
      <img 
        src="../images/portrait-bio.png" 
        align="left" 
        width="300" 
        height="360" 
        className="portraitpic" />
      <p><h6>Hello ! </h6></p>
      <p><i>Simple comme une donnée</i>, c'est une série de mini reportages sur le sujet des données.
        J'interroge des spécialistes de tout horizon sur la façon dont ils utilisent ou produisent des données.
        

        <h6>Qu'allez-vous voir dans les épisodes de <i>Simple comme une donnée </i> ?</h6>

        <p><li>Comment certains métiers utilisent des données : gestion de l'eau, transports en commun...</li>
        <li>Comment ces données sont créées ou collectées sur le terrain ?</li>
        <li>Quels sont les différents métiers de la donnée publique ?</li> 
        <li>Quels sont les outils que ces personnes emploient au quotidien ?</li> 
        </p>
        <p>Le fil conducteur de <i>Simple comme une donnée </i>: comprendre ce que font les données et savoir les utiliser, <b>c'est à la portée de toute personne qui s'y intéresse.</b></p>
      </p>
    </Layout>
  )
}
export default AboutPage