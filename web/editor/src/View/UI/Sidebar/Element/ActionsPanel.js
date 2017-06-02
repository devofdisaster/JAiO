import React from 'react'

class ActionsPanel extends React.Component {

    constructor (props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
        this.handleClone = this.handleClone.bind(this)
    }

    handleClone(e) {
        window.Application.cloneElement(this.props.source.uuid)
    }

    handleDelete(e) {
        window.Application.removeElement(this.props.source.uuid)
    }

    render() {
        return <div className="panel panel-default">
            <div className="panel-body text-center">
                <div className="btn-group btn-group-lg">
                    <btn className="btn btn-default" onClick={this.handleClone}>
                        <i className="glyphicon glyphicon-duplicate"/>
                    </btn>
                    <btn className="btn btn-danger" onClick={this.handleDelete}>
                        <i className="glyphicon glyphicon-trash"/>
                    </btn>
                </div>
            </div>
        </div>
    }
}

export default ActionsPanel

