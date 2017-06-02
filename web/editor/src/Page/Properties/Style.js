class Style {
    constructor (object) {
        this.properties = Object.assign({}, object)
    }

    get(prop, def) {
        return this.properties[prop] || def || null
    }

    set(prop, val, unit) {
        let value = val

        if (unit) {
            value = val + unit
        }

        this.properties[prop] = value
    }

    toJSON() {
        return this.properties
    }

    toView() {
        return this.properties
    }
}

export default Style
