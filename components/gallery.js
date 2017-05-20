import React from 'react'
import styled from '../helpers/styled'
import api from '../helpers/api'

const List = styled.list``
import Card from './card'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = { photos: [] }
  }
  componentDidMount() {
    api().then(photos => this.setState(photos))
  }
  render() {
    return (
      <List>
        {this.state.photos.map((photo, index) => (
          <Card key={index} {...photo} />
        ))}
      </List>
    )
  }
}

export default Gallery
