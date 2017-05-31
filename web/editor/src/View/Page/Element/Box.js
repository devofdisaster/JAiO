import ElementComponent from '../ElementComponent'
import React from 'react'

class Box extends ElementComponent {
    render() {
        const source = this.props.source
        const style = this.renderStyle(source.parameters.style)

        return <div id={source.uuid} style={style}/>
    }
}

export default Box
