import React from 'react'
import styled from '../helpers/styled'
import platform from '../helpers/platform'
import s from '../helpers/splitter'

const Topbar = styled.block`
  background: #2980b9;
  color: #FFF;
  font-size: ${s(24, 20)};
  text-align: center;
  padding: ${s(20, '40 20 20')};
`

const Header = () => <Topbar>Fakestagram</Topbar>

export default Header
