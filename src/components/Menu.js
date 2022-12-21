import React from 'react'
import WithTheme from '../utils/WithTheme';

const Menu = (props) => {
  return <h3 style={{color: props.selectTheme.color }}>HOC Context API</h3>
}

export default WithTheme(Menu);
