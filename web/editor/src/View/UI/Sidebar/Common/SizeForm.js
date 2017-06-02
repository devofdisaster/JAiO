import React from 'react'
import LabeledNumberInput from './LabeledNumberInput'

class SizeForm extends React.Component {
    constructor (props) {
        super(props)

        this.onHeightChange = this.onHeightChange.bind(this)
        this.onWidthChange = this.onWidthChange.bind(this)
    }

    onHeightChange(e) {
        window.Application.changeElementStyle('height', `${e.target.value || 0}px`)
    }

    onWidthChange(e) {
        if (!e.target.disabled) {
            window.Application.changeElementStyle('width', `${e.target.value || 0}px`)
        }
    }

    render() {
        const isSection = this.props.source.type === 'section';
        const width = parseInt(this.props.source.parameters.style.width || 0, 10)
        const height = parseInt(this.props.source.parameters.style.height || 0, 10)

        return <form>
            <LabeledNumberInput
                id="elementPositionWidth"
                label="Width"
                max="960"
                min="0"
                onChange={this.onWidthChange}
                placeholder={width}
                value={width}
                disabled={isSection}
            />
            <LabeledNumberInput
                id="elementPositionHeight"
                label="Height"
                max="700"
                min="0"
                onChange={this.onHeightChange}
                placeholder={height}
                value={height}
            />
        </form>
    }
}

export default SizeForm
