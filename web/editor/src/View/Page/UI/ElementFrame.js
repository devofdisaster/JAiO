import React from 'react'

class ElementFrame extends React.Component {
    render() {
        const classes = `element-frame ${this.props.visible ? 'visible' : ''}`

        return (
            <div className={classes}/>
        )
    }
}

export default ElementFrame
