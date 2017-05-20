import React from 'react'
import styled from '../helpers/styled'
import s from '../helpers/splitter'
import Avatar from './avatar'

const Block = styled.block`
  padding: ${s(20)};
`

const Username = styled.span`
  font-size: ${s(18)};
  padding: ${s(10)};
  position: relative;
  top: ${s(-10)};
`

const User = ({ avatar, name }) => (
  <Block avatar={avatar} name={name}>
    <Avatar height="50" src={avatar} />
    <Username>{name}</Username>
  </Block>
)

export default User
