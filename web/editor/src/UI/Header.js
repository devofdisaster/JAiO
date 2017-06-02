class Header {
    constructor () {
        this.saving = false;
    }

    toView() {
        return { saving: this.saving }
    }
}

export default Header
