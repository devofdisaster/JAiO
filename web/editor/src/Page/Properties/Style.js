class Style {
    constructor (object) {
        this.properties = Object.assign({}, object)
    }

    toJSON() {
        return this.properties
    }

    toView() {
        return this.properties
    }
}

export default Style
