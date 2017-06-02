import React from 'react'

class HeaderComponent extends React.Component {

    constructor (props) {
        super(props)

        this.props = props
    }

    render() {
        return <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 col-sm-offset-11">
                        <btn className="btn btn-success">Save</btn>
                    </div>
                </div>
            </div>
        </nav>
    }
}

export default HeaderComponent
