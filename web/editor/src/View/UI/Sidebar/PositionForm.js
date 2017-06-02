import React from 'react'
import LabeledNumberInput from './Common/LabeledNumberInput'

class PositionForm extends React.Component {
    constructor (props) {
        super(props)

        this.onLeftChange = this.onLeftChange.bind(this)
        this.onTopChange = this.onTopChange.bind(this)
    }

    onLeftChange(e) {
        window.Application.changeElementStyle('left', `${e.target.value || 0}px`)
    }

    onTopChange(e) {
        window.Application.changeElementStyle('top', `${e.target.value || 0}px`)
    }

    render() {
        const top = parseInt(this.props.source.parameters.style.top || 0, 10)
        const left = parseInt(this.props.source.parameters.style.left || 0, 10)

        return <form>
            <LabeledNumberInput
                id="elementPositionTop"
                label="Vertical position"
                max="699"
                min="0"
                onChange={this.onTopChange}
                placeholder={top}
                value={top}
            />
            <LabeledNumberInput
                id="elementPositionLeft"
                label="Horizontal position"
                max="959"
                min="0"
                onChange={this.onLeftChange}
                placeholder={left}
                value={left}
            />
        </form>
    }
}

export default PositionForm
