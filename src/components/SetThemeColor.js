import React from 'react'
import WithTheme from '../utils/WithTheme';

const SetThemeColor = (props) => {
  return <>
    <button onClick={() => props.selectTheme.setColor('green')}>Set Green Color</button>
    <button onClick={() => props.selectTheme.setColor('red')}>Set Red Color</button>
  </>
}

export default WithTheme(SetThemeColor);
