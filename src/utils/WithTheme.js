import React from 'react'
import { Context } from './Context';

const WithTheme = (Component) => {
    return (props) => {
        return <Context.Consumer>
            {context => <Component {...context} {...props} />}
        </Context.Consumer>
    }
}

export default WithTheme;
