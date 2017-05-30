import Body from './Element/Body'
import Box from './Element/Box'

const mapping = {
    'body': Body,
    'box': Box
}

class ElementFactory {
    static buildElement(object) {
        if (mapping[object.type]) {
            return new mapping[object.type](object)
        }
    }
}

export default ElementFactory
