import React from 'react'
import SizeForm from './SizeForm'

class SizePanel extends React.Component {
    render() {
        return <div className="panel panel-default">
            <div className="panel-body">
                <SizeForm source={this.props.source}/>
            </div>
        </div>
    }
}

export default SizePanel
