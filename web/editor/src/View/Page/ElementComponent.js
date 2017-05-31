import { camelize } from '../../Infrastructure/StringUtil'
import React from 'react'

class ElementComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    renderStyle (styleObject = {}) {
        const style = {}

        for (let prop in styleObject) {
            if (styleObject.hasOwnProperty(prop)) {
                style[camelize(prop)] = styleObject[prop]
            }
        }

        return style
    }

    render () {
        throw new Error('This class does not support rendering directly!')
    }
}

export default ElementComponent
