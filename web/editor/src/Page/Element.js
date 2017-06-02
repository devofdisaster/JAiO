import ElementFactory from './ElementFactory'
import Attributes from './Properties/Attributes'
import Style from './Properties/Style'
import Uuid from 'uuid'

class Element {
    constructor(object) {
        this.uuid = object.uuid || Uuid()
        this.type = object.type
        this.attributes = new Attributes(object.attributes)
        this.style = new Style(object.parameters.style)
        this.children = []
        this.selected = !!object.selected

        if (object.children && object.children.length) {
            for (const childObject of object.children) {
                const child = ElementFactory.buildElement(childObject)

                if (child) {
                    this.children.push(child)
                }
            }
        }
    }

    deselect() {
        this.selected = false
    }

    getDescendantByUuid(uuid) {
        return this.children.reduce((carry, current) => {
            return carry || (current.isEqual(uuid) ? current : current.getDescendantByUuid(uuid))
        }, null)
    }

    getSelectedDescendant() {
        return this.children.reduce((carry, current) => {
            return carry || (current.isSelected() ? current : current.getSelectedDescendant())
        }, null)
    }

    isEqual(element) {
        if (typeof element === 'string') {
            return element === this.uuid
        }

        return element === this
    }

    isSelected() {
        return !!this.selected
    }

    select() {
        this.selected = true
    }

    toJSON() {
        return {
            uuid: this.uuid,
            type: this.type,
            attributes: this.attributes,
            parameters: { style: this.style },
            children: this.children
        }
    }

    toView() {
        return {
            uuid: this.uuid,
            type: this.type,
            attributes: this.attributes.toView(),
            parameters: { style: this.style.toView() },
            children: this.children.map((child) => child.toView()),
            selected: this.selected
        }
    }

}

export default Element
