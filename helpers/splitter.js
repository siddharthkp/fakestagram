import platform from './platform'

const splitter = (web, native) => {
  if (platform === 'native') return native || web
  else return web + 'px'
}

export default splitter
