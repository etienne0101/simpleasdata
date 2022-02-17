import * as React from 'react'
import Layout from '../components/layout'
import Bio from "../components/bio"


const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Bio />
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}
export default AboutPage