import React from "react"
import Layout from '../components/Layout'
import styled from 'styled-components'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

export default function Home() {
  return (
    <Layout>
    <section>
        <div>
          <h2>Arushi</h2>
          <h3>UX Developer</h3>
        </div>
    </section>
    </Layout>
  )
}
