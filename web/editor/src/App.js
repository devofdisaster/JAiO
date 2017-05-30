import React from 'react'
import ReactDOM from 'react-dom'
import ElementFactory from './Page/ElementFactory'

class Application {
    constructor () {

    }

    init() {
        const Page = this.fetchPage(page.uuid)

        ReactDOM.render(
            <div id="page">Page goes here</div>,
            document.getElementById('root')
        )
    }

    async fetchPage(uuid) {
        try {
            return ElementFactory.buildElement(await fetch(`/page/${page.uuid}`))
        } catch (e) {
            throw new EvalError('well fuck');
        }
    }
}

export default Application
