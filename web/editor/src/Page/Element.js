import ElementFactory from './ElementFactory'
import Attributes from './Properties/Attributes'
import Style from './Properties/Style'

class Element {
    constructor(object) {
        this.uuid = object.uuid
        this.type = object.type
        this.attributes = new Attributes(object.attributes)
        this.style = new Style(object.style)
        this.children = []

        for (const childObject of object.children) {
            const child = ElementFactory.buildElement(childObject)

            if (child) {
                this.children.push(child)
            }
        }
    }

    render() {
        throw new Error('Element overclass is non-instantiable')
    }
}

export default Element
