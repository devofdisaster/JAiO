import React from 'react'
import ReactDOM from 'react-dom'

class Application {
    constructor () {

    }

    init() {
        ReactDOM.render(
            <div id="page">Page goes here</div>,
            document.getElementById('root')
        )
    }
}

export default Application
