class Style {
    constructor (object) {
        this.properties = Object.assign({}, object);
    }

    render() {
        let props = [];

        for (const property of this.properties) {
            props.push(`${property}:${this.properties[property]};`);
        }

        return `style="${props.join(' ')}"`;
    }
}

export default Style
