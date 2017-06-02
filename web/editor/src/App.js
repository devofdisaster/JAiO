import ApplicationComponent from './View/ApplicationComponent'
import ElementFactory from './Page/ElementFactory'
import React from 'react'
import ReactDOM from 'react-dom'
import Interface from './UI/Interface'

class Application {
    constructor (data) {
        this.initData = data
    }

    async init() {
        const response = await fetch(`/page/${this.initData.uuid}`)
        const json = await response.json()

        this.Page = ElementFactory.buildElement(json)
        this.Interface = new Interface();

        ReactDOM.render(
            <ApplicationComponent app={this} />,
            document.getElementById('root')
        )
    }

    updateView(data) {

    }
}

export default Application
