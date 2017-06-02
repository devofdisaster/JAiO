import ElementFactory from './ElementFactory'
import Attributes from './Properties/Attributes'
import Style from './Properties/Style'
import Uuid from 'uuid'

class Element {
    constructor(object) {
        this.uuid = object.uuid || Uuid()
        this.type = object.type
        this.value = object.value
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

    changeValueTo(value) {
        this.value = value
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
            value: this.value,
            attributes: this.attributes.toJSON(),
            parameters: { style: this.style.toJSON() },
            children: this.children
        }
    }

    toView() {
        return {
            uuid: this.uuid,
            type: this.type,
            value: this.value,
            attributes: this.attributes.toView(),
            parameters: { style: this.style.toView() },
            children: this.children.map((child) => child.toView()),
            selected: this.selected
        }
    }

}

export default Element
