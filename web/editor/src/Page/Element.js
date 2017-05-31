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

        if (object.children && object.children.length) {
            for (const childObject of object.children) {
                const child = ElementFactory.buildElement(childObject)

                if (child) {
                    this.children.push(child)
                }
            }
        }
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
            children: this.children.map((child) => child.toView())
        }
    }

}

export default Element
