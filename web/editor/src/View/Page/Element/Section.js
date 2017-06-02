import ElementComponent from '../ElementComponent'
import ElementComponentFactory from '../ElementComponentFactory'
import React from 'react'


class Section extends ElementComponent {
    render() {
        const source = this.props.source
        const style = this.renderStyle(source.parameters.style)
        const children = this.renderKids(source.children)

        return <div id={source.uuid} style={style}>
            {children}
        </div>
    }

    renderKids (childArray = []) {
        return childArray.map((child) => ElementComponentFactory(child))
    }
}

export default Section
