import React from 'react'
import styled from '../helpers/styled'

import User from './user'
import Photo from './photo'

const Div = styled.div``

const Card = ({ avatar, name, photo }) => (
  <Div>
    <User avatar={avatar} name={name} />
    <Photo height="300" src={photo} />
  </Div>
)

export default Card
