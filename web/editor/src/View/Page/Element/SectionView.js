import ElementComponent from '../ElementComponent'
import ElementComponentFactory from '../ElementComponentFactory'
import ElementFrame from '../UI/ElementFrame'
import React from 'react'

class SectionView extends ElementComponent {

    constructor (props) {
        super(props)

        this.elem = null
    }

    componentDidMount() {
        $(this.elem).droppable({
            accept: '.ui-draggable',
            greedy: true,
            drop: (e, ui) => {
                const type = ui.draggable[0].getAttribute('type');

                if (type) {
                    window.Application.addNewElement(this.props.source.uuid, type, ui.offset)
                } else {
                    window.Application.moveElement(
                        ui.draggable[0].getAttribute('id'),
                        this.props.source.uuid,
                        ui.offset
                    )
                }
            }
        })
    }

    render() {
        const source = this.props.source
        const style = this.renderStyle(source.parameters.style)
        const children = this.renderKids(source.children)

        return <div id={source.uuid} style={style} onClick={this.handleClick}
                    className="element-section"
                    ref={(elem) => this.elem = elem}
        >
            <ElementFrame visible={source.selected}/>
            {children}
        </div>
    }

    renderKids (childArray = []) {
        return childArray.map((child) => ElementComponentFactory(child))
    }
}

export default SectionView
