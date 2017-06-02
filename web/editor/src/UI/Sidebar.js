class  Sidebar {
    constructor () {
        this.selected = null
    }

    setSelectedElement(element) {
        this.selected = element
    }

    toView() {
        return { selected: this.selected ? this.selected.toView() : null }
    }
}

export default Sidebar
