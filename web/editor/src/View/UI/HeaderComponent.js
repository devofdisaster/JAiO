import React from 'react'
import NewElement from './Header/NewElement'

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
                    <div className="col-sm-4">
                        <NewElement type="box"/>
                        <NewElement type="text"/>
                    </div>
                    <div className="col-sm-1 col-sm-offset-7 text-center">
                        <btn className={classes} onClick={this.handleClick}>
                            { this.props.source.saving ?
                                <i className="glyphicon glyphicon-spin glyphicon-repeat"/> :
                                <i className="glyphicon glyphicon-floppy-disk"/>
                            } Save
                        </btn>
                    </div>
                </div>
            </div>
        </nav>
    }
}

export default HeaderComponent
