import Body from './Element/Body'
import Box from './Element/Box'
import Section from './Element/Section'
import Uuid from 'uuid'

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

    static cloneElement(object) {
        if (mapping[object.type]) {
            object.uuid = Uuid();

            return new mapping[object.type](object)
        }
    }
}

export default ElementFactory
