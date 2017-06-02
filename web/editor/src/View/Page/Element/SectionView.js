import ElementComponent from '../ElementComponent'
import ElementComponentFactory from '../ElementComponentFactory'
import ElementFrame from '../UI/ElementFrame'
import React from 'react'

class SectionView extends ElementComponent {
    render() {
        const source = this.props.source
        const style = this.renderStyle(source.parameters.style)
        const children = this.renderKids(source.children)

        return <div id={source.uuid} style={style} onClick={this.handleClick}>
            <ElementFrame visible={source.selected}/>
            {children}
        </div>
    }

    renderKids (childArray = []) {
        return childArray.map((child) => ElementComponentFactory(child))
    }
}

export default SectionView
