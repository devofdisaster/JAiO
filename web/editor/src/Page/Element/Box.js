import React from 'react'
import Element from '../Element'

class Box extends Element {
    render() {
        return <div {this.attributes.render()} {this.style.render()}></div>
    }
}

export default Box
