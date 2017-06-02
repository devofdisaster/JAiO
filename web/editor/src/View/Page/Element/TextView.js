import ElementComponent from '../ElementComponent'
import ElementFrame from '../UI/ElementFrame'
import React from 'react'

class TextView extends ElementComponent {
    constructor (props) {
        super(props)

        this.elem = null
    }

    render() {
        const source = this.props.source
        const style = this.renderStyle(source.parameters.style)

        return (
            <div id={source.uuid} style={style} onClick={this.handleClick}
                 className="element-text"
                 ref={(elem) => this.elem = elem}
            >
                <ElementFrame visible={source.selected}/>
                <span className="text-content">{source.value}</span>
            </div>
        )
    }
}

export default TextView
