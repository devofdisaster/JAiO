import React from 'react'
import PositionForm from './PositionForm'

class PositionPanel extends React.Component {
    render() {
        return <div className="panel panel-default">
            <div className="panel-body">
                <PositionForm source={this.props.source}/>
            </div>
        </div>
    }
}

export default PositionPanel
