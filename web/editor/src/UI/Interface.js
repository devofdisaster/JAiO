import Header from './Header'
import Sidebar from './Sidebar'

class Interface {

    constructor () {
        this.header = new Header()
        this.sidebar = new Sidebar()
    }

    setSelectedElement(element) {
        this.sidebar.setSelectedElement(element)
    }

    toView() {
        return {
            header: this.header.toView(),
            sidebar: this.sidebar.toView()
        }
    }
}

export default Interface
