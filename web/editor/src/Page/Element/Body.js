import React from 'react'
import Element from '../Element'

class Body extends Element {
    render() {
        return <body {this.attributes.render()} {this.style.render()}>
            { this.children.reduce((prev, next) => prev + next.render(), '') }
        </body>
    }
}

export default Body
