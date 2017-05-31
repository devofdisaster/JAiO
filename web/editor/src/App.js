import ApplicationComponent from './View/ApplicationComponent'
import ElementFactory from './Page/ElementFactory'
import React from 'react'
import ReactDOM from 'react-dom'

class Application {
    constructor (data) {
        this.initData = data
    }

    async init() {
        const response = await fetch(`/page/${this.initData.uuid}`)
        const json = await response.json()

        this.Page = ElementFactory.buildElement(json)
        ReactDOM.render(
            <ApplicationComponent page={this.Page.toView()} app={this} />,
            document.getElementById('root')
        )
    }

    updateView(data) {

    }
}

export default Application
