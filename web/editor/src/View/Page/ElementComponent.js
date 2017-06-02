import { camelize } from '../../Infrastructure/StringUtil'
import React from 'react'

class ElementComponent extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        if (this.isDraggable()) {
            const $elem = $(this.elem);

            $elem.draggable({
                containment: $elem.parent(),
                distance: 10,
                revert: 'invalid',
                start: () => window.Application.toggleSelected($elem.attr('id'), true)
            })
        }
    }

    isDraggable() {
        return ['box', 'text'].indexOf(this.props.source.type) >= 0
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
