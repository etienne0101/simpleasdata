import * as React from 'react'
import Layout from '../components/layout'
import Bio from "../components/bio"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Bio />
      
      <p><h5>Hello ! </h5></p>
      <p><i>Simple comme une donnée</i>, c'est une série de mini reportages sur le sujet des données.
      <p> </p>        
        Je donne la parole à des spécialistes de tout horizon sur la façon dont ils utilisent ou produisent des données : que ce soit dans le cadre de leur métier, 
        et/ou de leur passion qui les mène à faire avancer des projets d'intérêt général.

        <h5>Qu'allez-vous voir dans les épisodes de <i>Simple comme une donnée </i> ?</h5>

        <p><li>Comment certains métiers utilisent des données : gestion de l'eau, transports en commun...</li>
        <li>Comment ces données sont créées ou collectées sur le terrain ?</li>
        <li>Quels sont les différents métiers de la donnée publique ?</li> 
        <li>Quels sont les outils que ces personnes emploient au quotidien ?</li> 
        </p>
        <p><blockquote>Le fil conducteur de <i>Simple comme une donnée </i>: comprendre ce que font les données et savoir les utiliser, <b>c'est à la portée de toute personne qui s'y intéresse.</b></blockquote></p>
      </p>
      <h5>Qui suis-je ?</h5>
      <img 
        src="https://github.com/etienne0101/simpleasdata/blob/master/src/images/portrait-bio.png?raw=true" 
        align="left" 
        width="300" 
        height="360" 
        className="portraitpic" />
      <p>Je travaille sur ce projet sur mon temps libre, depuis Lille 🇫🇷</p> 
        <p>Aujourd'hui je suis freelance, en mission pour Etalab et plus particulièrement pour <a href="https://api.gouv.fr">api.gouv.fr</a>.
        J'ai toujours travaillé <i>dans la data</i>, d'abord pour la Métropole de Lille, où j'ai initié l'open data en 2016, 
        puis chez <a href="https://datactivist.coop">Datactivist</a>, où j'étais consultant.
        <p></p> 
        <p><b>Et donc depuis plusieurs années, je croise des personnes brillantes sur leurs sujets, et communicatives sur leur passion des données - 
          d'où cette envie de les mettre en lumière avec <i>Simple comme une donnée</i></b></p>
      </p>
    </Layout>
  )
}
export default AboutPage