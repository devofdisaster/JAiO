class Attributes {
    constructor (object) {
        this.attributes = Object.assign({}, object)
    }

    toJSON() {
        return this.attributes
    }

    toView() {
        return this.attributes
    }
}

export default Attributes
