import { camelize } from '../../Infrastructure/StringUtil'
import React from 'react'

class ElementComponent extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.stopPropagation()
        this.toggleSelected()
    }

    render() {
        throw new Error('This class does not support rendering directly!')
    }

    renderStyle(styleObject = {}) {
        const style = {}

        for (let prop in styleObject) {
            if (styleObject.hasOwnProperty(prop)) {
                style[camelize(prop)] = styleObject[prop]
            }
        }

        return style
    }

    toggleSelected() {
        window.Application.toggleSelected(this.props.source.uuid)
    }
}

export default ElementComponent
