import React from 'react'
import styled from '../helpers/styled'
import s from '../helpers/splitter'
import platform from '../helpers/platform'

const BlankImage = styled.img`
  height: ${s(300)};
`

let Image
if (platform === 'native')
  Image = ({ src }) => <BlankImage source={{ uri: src }} />
else Image = ({ src, height }) => <BlankImage src={src} />

export default Image
