import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="Data-curiosités">
      <h2>Data-curiosités</h2>
      <p>
          Retrouvez ici une sélection de sites et datavisualisations, sur des thématiques variées.
          <br></br>
          <br></br>
          <b>Recherchez par mots-clés dans la barre qui s'affiche à droite ↘️ </b>
          <br></br>
          Ou bien filtrez les thématiques par mots-clés en appliquant une condition à "Tags"
      </p>
      <iframe className="airtable"src="https://airtable.com/embed/shrYLoRgE0uTwDetY?backgroundColor=cyan&viewControls=on" frameborder="0" onmousewheel="" width="150%" height="900" relative-left="20px"></iframe>
    </Layout>
  )
}
export default AboutPage