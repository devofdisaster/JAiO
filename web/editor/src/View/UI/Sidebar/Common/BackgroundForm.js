import React from 'react'
import LabeledTextInput from './LabeledTextInput'
import LabeledSelect from './LabeledSelect'

class BackgroundForm extends React.Component {
    constructor (props) {
        super(props)

        this.onImageChange = this.onImageChange.bind(this)
        this.onColorChange = this.onColorChange.bind(this)
        this.onSizeChange = this.onSizeChange.bind(this)
        this.onPositionChange = this.onPositionChange.bind(this)
        this.onRepeatChange = this.onRepeatChange.bind(this)
    }

    onImageChange(e) {
        window.Application.changeElementStyle('background-image', `${e.target.value}`)

        if (e.target.value) {
            if (!this.props.source.parameters.style['background-repeat']) {
                window.Application.changeElementStyle('background-repeat', 'no-repeat')
            }
            if (!this.props.source.parameters.style['background-size']) {
                window.Application.changeElementStyle('background-size', 'initial')
            }
            if (!this.props.source.parameters.style['background-position']) {
                window.Application.changeElementStyle('background-position', 'center')
            }
        }
    }

    onColorChange(e) {
        window.Application.changeElementStyle('background-color', `${e.target.value || ''}`)
    }

    onRepeatChange(e) {
        window.Application.changeElementStyle('background-repeat', `${e.target.value}`)
    }

    onSizeChange(e) {
        window.Application.changeElementStyle('background-size', `${e.target.value}`)
    }

    onPositionChange(e) {
        window.Application.changeElementStyle('background-position', `${e.target.value}`)
    }

    render() {
        const sizeOptions = [
            { value: 'initial', label: 'Default'},
            { value: 'contain', label: 'Contain'},
            { value: 'cover', label: 'Cover'}
        ]
        const repeatOptions = [
            { value: 'no-repeat', label: 'None'},
            { value: 'repeat-x', label: 'Horizontally'},
            { value: 'repeat-y', label: 'Vertically'},
            { value: 'repeat', label: 'Both'}
        ]
        const positionOptions = [
            { value: 'center', label: 'Center'},
            { value: 'left', label: 'Left'},
            { value: 'right', label: 'Right'},
            { value: 'top', label: 'Top'},
            { value: 'top left', label: 'Top left'},
            { value: 'top right', label: 'Top right'},
            { value: 'bottom', label: 'Bottom'},
            { value: 'bottom left', label: 'Bottom left'},
            { value: 'bottom right', label: 'Bottom right'}
        ]

        return <form>
            <LabeledTextInput
                id="elementBackColor"
                label="Color"
                onChange={this.onColorChange}
                placeholder="#fff | rgba(255,255,255,1)"
                value={this.props.source.parameters.style['background-color']}
            />
            <LabeledTextInput
                id="elementBackImage"
                label="Image URL"
                onChange={this.onImageChange}
                placeholder="url(https://example.com/image.png)"
                value={this.props.source.parameters.style['background-image']}
            />
            {
                this.props.source.parameters.style['background-image'] ?
                    <div>
                        <LabeledSelect
                            id="elementBackRepeat"
                            label="Repeat"
                            onChange={this.onRepeatChange}
                            value={this.props.source.parameters.style['background-repeat' || 'no-repeat']}
                            options={repeatOptions}
                        />
                        <LabeledSelect
                            id="elementBackSize"
                            label="Size"
                            onChange={this.onSizeChange}
                            value={this.props.source.parameters.style['background-size' || 'initial']}
                            options={sizeOptions}
                            />
                        <LabeledSelect
                            id="elementBackPosition"
                            label="Position"
                            onChange={this.onPositionChange}
                            value={this.props.source.parameters.style['background-position' || 'center']}
                            options={positionOptions}
                        />
                    </div> :
                    null
            }
        </form>
    }
}

export default BackgroundForm
