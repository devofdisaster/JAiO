import ElementComponent from '../ElementComponent'
import ElementFrame from '../UI/ElementFrame'
import React from 'react'

class BoxView extends ElementComponent {
    render() {
        const source = this.props.source
        const style = this.renderStyle(source.parameters.style)

        return (
            <div id={source.uuid} style={style} onClick={this.handleClick}
                 className="element-box"
                 ref={(elem) => this.elem = elem}
            >
                <ElementFrame visible={source.selected}/>
            </div>
        )
    }
}

export default BoxView
