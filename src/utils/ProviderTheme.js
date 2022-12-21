import React, { Component } from 'react'
import { Context } from './Context';

class ProviderTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'chocolate',
            setColor: this.setColor.bind(this)
        }
    }
    setColor(color) {
        this.setState({ color });
    }
    render() {
        return (
            <Context.Provider value={{ selectTheme: { ...this.state } }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default ProviderTheme;
