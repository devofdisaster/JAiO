import Body from './Element/Body'
import Box from './Element/Box'
import Section from './Element/Section'

const mapping = {
    'body': Body,
    'box': Box,
    'section': Section
}

class ElementFactory {
    static buildElement(object) {
        if (mapping[object.type]) {
            return new mapping[object.type](object)
        }
    }
}

export default ElementFactory
