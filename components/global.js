import { injectGlobal } from '../helpers/styled'

if (injectGlobal)
  injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    @import url('https://fonts.googleapis.com/css?family=Roboto:300');
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    overflow-x: hidden;
  }
`
