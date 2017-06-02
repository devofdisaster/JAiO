import ApplicationComponent from './View/ApplicationComponent'
import ElementFactory from './Page/ElementFactory'
import React from 'react'
import ReactDOM from 'react-dom'
import Interface from './UI/Interface'

class Application {
    constructor (data) {
        this.initData = data
        this.Page = null
        this.Interface = null
        this.viewUpdateCallback = null
    }

    async init() {
        const response = await fetch(`/page/${this.initData.uuid}`)
        const json = await response.json()

        this.Page = ElementFactory.buildElement(json)
        this.Interface = new Interface();

        ReactDOM.render(
            <ApplicationComponent />,
            document.getElementById('root')
        )
    }

    changeElementStyle(prop, value) {
        const element = this.getSelectedElement();

        if (!element) {
            return;
        }

        element.style.set(prop, value)
        this.updateView()
    }

    cloneElement(uuid) {
        const element = this.getElementByUuid(uuid)

        if (element && element.type !== 'body' && element.type !== 'section') {
            const clone = ElementFactory.cloneElement(element.toJSON())

            clone.style.set('top', parseInt(clone.style.get('top'), 10) + 10, 'px');
            clone.style.set('left', parseInt(clone.style.get('left'), 10) + 10, 'px');

            this.Page.children[0].children.push(clone)
            this.toggleSelected(clone.uuid)
        }
    }

    getElementByUuid(uuid) {
        if (this.Page.isEqual(uuid)) {
            return this.Page
        }

        return this.Page.getDescendantByUuid(uuid)
    }

    getSelectedElement() {
        if (this.Page.isSelected()) {
            return this.Page
        }

        return this.Page.getSelectedDescendant()
    }

    removeElement(uuid) {
        const element = this.getElementByUuid(uuid)

        if (element && element.type !== 'body' && element.type !== 'section') {
            element.deselect()
            this.Page.children[0].children.splice(this.Page.children.indexOf(element, 1));
            this.updateView()
        }
    }

    async savePage() {
        this.Interface.toggleSpinOnSave()
        this.updateView()

        const data = new FormData();
        data.append('json', JSON.stringify(this.Page));

        const response = await fetch(`/page/${this.initData.uuid}`, {
            method: 'POST',
            body: data
        })

        if (response.statusText === 'OK') {
            this.Interface.toggleSpinOnSave()
            this.updateView()
        }
    }

    setViewUpdateCallback(func) {
        this.viewUpdateCallback = func
    }

    toggleSelected(uuid) {
        /**
         * @type Element
         */
        const selected = this.getSelectedElement()

        /**
         * @type Element
         */
        const element = this.getElementByUuid(uuid)

        if (selected) {
            selected.deselect()
        }

        if (!element.isEqual(selected)) {
            element.select()
        }

        this.Interface.setSelectedElement(element)
        this.updateView()
    }

    updateView(data) {
        if (this.viewUpdateCallback) {
            this.viewUpdateCallback(data || { page: this.Page.toView(), ui: this.Interface.toView() })
        }
    }
}

export default Application
