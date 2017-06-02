import React from 'react'
import LabeledNumberInput from './LabeledNumberInput'
import LabeledTextInput from './LabeledTextInput'

class BorderForm extends React.Component {
    constructor (props) {
        super(props)

        this.onWidthChange = this.onWidthChange.bind(this)
        this.onRadiusChange = this.onRadiusChange.bind(this)
        this.onColorChange = this.onColorChange.bind(this)
    }

    onColorChange(e) {
        if (!this.props.source.parameters.style['border-style']) {
            //window.Application.changeElementStyle('border-style', 'solid')
        }

        window.Application.changeElementStyle('border-color', e.target.value || '#000')
    }

    onWidthChange(e) {
        if (!this.props.source.parameters.style['border-style']) {
            window.Application.changeElementStyle('border-style', 'solid')
        }

        window.Application.changeElementStyle('border-width', `${e.target.value || 0}px`)
    }

    onRadiusChange(e) {
        window.Application.changeElementStyle('border-radius', `${e.target.value || 0}px`)
    }

    render() {
        const width = parseInt(this.props.source.parameters.style['border-width'], 10) || 0;
        const radius = parseInt(this.props.source.parameters.style['border-radius'], 10) || 0;
        const maxWidth = Math.min(this.props.source.parameters.style.width, this.props.source.parameters.style.height)

        return <form>
            <LabeledTextInput
                id="elementBorderColor"
                label="Border color"
                onChange={this.onColorChange}
                value={this.props.source.parameters.style['border-color'] || '#000'}
            />
            <LabeledNumberInput
                id="elementBorderWidth"
                label="Border width"
                min="0"
                max={maxWidth}
                onChange={this.onWidthChange}
                value={width}
            />
            <LabeledNumberInput
                id="elementBorderRadius"
                label="Border radius"
                onChange={this.onRadiusChange}
                value={radius}
            />
        </form>
    }
}

export default BorderForm
