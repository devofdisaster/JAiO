import React from 'react'

class HeaderComponent extends React.Component {

    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.stopPropagation()

        window.Application.savePage()
    }

    render() {
        const classes = `btn  ${this.props.source.saving ? 'btn-warning' : 'btn-success'}`

        return <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 col-sm-offset-11 text-center">
                        <btn className={classes} onClick={this.handleClick}>
                            { this.props.source.saving ?
                                <i className="glyphicon glyphicon-spin glyphicon-refresh"/> :
                                'Save'
                            }
                        </btn>
                    </div>
                </div>
            </div>
        </nav>
    }
}

export default HeaderComponent
