class Attributes {

    constructor (object) {
        this.attributes = Object.assign({}, object)
    }

    render() {
        let attrs = []

        for (const attr of this.attributes) {
            attrs.push(`${attr}="${this.attributes[attr]}"`)
        }

        return attrs.join(' ');
    }
}

export default Attributes
