
  import React from 'react'
  import {render} from 'react-dom'
  import Page from '/Users/siddharth/Code/learn/native/fakestagram/pages/home.js'

  render(
    <Page {...window.INITIAL_PROPS}/>,
    document.getElementById('root')
  );

  if (module.hot) {
    module.hot.accept('/Users/siddharth/Code/learn/native/fakestagram/pages/home.js', () => {
      render(<Page {...window.INITIAL_PROPS}/>, document.getElementById('root'))
    });
  }
