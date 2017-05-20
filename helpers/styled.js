import platform from './platform'

let styled, injectGlobal, css

if (platform === 'native') styled = require('styled-components/native').default
else {
  styled = require('styled-components').default
  injectGlobal = require('styled-components').injectGlobal
}

if (platform === 'native') {
  const map = {
    div: 'View',
    span: 'Text',
    img: 'Image',

    page: 'View',
    list: 'ScrollView',
    block: 'Text'
  }

  const htmlTags = Object.keys(map)
  for (let tag of htmlTags) {
    styled[tag] = styled[map[tag]]
  }
} else {
  styled.page = styled.div
  styled.list = styled.div
  styled.block = styled.div
}

export default styled

export { injectGlobal, css }
