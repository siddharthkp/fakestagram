import React from 'react'
import styled from './helpers/styled'

import Header from './components/header'
import Gallery from './components/gallery'
import './components/global'

const Page = styled.page``

const App = () => (
  <Page>
    <Header />
    <Gallery />
  </Page>
)

export default App
